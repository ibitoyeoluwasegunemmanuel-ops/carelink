# WEEK 1 EXECUTION PLAN
## From Today to First Expert Profile

**Objective**: Backend infrastructure + first expert profile creation working end-to-end

**Timeline**: 7 days (Mon June 21 - Sun June 27, 2026)

**Success Criteria**: 
- ✅ Database deployed with expert_profiles table
- ✅ API route POST /api/experts working
- ✅ Frontend form connects to API
- ✅ Expert can sign up → create profile → see it in database

---

## MONDAY JUNE 21 (Today)

### Morning: Architecture Lockdown

**Task 1: Database Schema Approval (2 hours)**
```sql
-- EXPERT_PROFILES TABLE (FINAL)
CREATE TABLE expert_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  
  -- Basic Info
  full_name TEXT NOT NULL,
  photo_url TEXT,
  bio TEXT,
  specialization TEXT NOT NULL, -- 'pediatrician', 'therapist', 'speech_therapist', 'psychologist', 'occupational_therapist', 'teacher'
  years_of_experience INT,
  
  -- Credentials
  license_number TEXT,
  license_country TEXT,
  credentials_verified BOOLEAN DEFAULT FALSE,
  verification_date TIMESTAMP,
  verified_by UUID REFERENCES auth.users(id),
  
  -- Location & Contact
  location TEXT NOT NULL, -- 'Lagos', 'Accra', etc.
  country TEXT NOT NULL, -- 'Nigeria', 'Ghana', etc.
  phone TEXT,
  consultation_types TEXT[], -- {'online', 'physical', 'phone'}
  
  -- Pricing
  hourly_rate_usd DECIMAL(10,2), -- $50, $100, etc.
  
  -- Status
  status TEXT DEFAULT 'pending', -- 'pending', 'verified', 'suspended'
  is_active BOOLEAN DEFAULT TRUE,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(user_id)
);

CREATE INDEX idx_expert_profiles_user_id ON expert_profiles(user_id);
CREATE INDEX idx_expert_profiles_status ON expert_profiles(status);
CREATE INDEX idx_expert_profiles_location ON expert_profiles(location);
CREATE INDEX idx_expert_profiles_specialization ON expert_profiles(specialization);
CREATE INDEX idx_expert_profiles_created_at ON expert_profiles(created_at DESC);

ALTER TABLE expert_profiles ENABLE ROW LEVEL SECURITY;

-- RLS: Users can only read verified experts or their own profile
CREATE POLICY "anyone_read_verified_experts" ON expert_profiles
  FOR SELECT USING (status = 'verified' OR auth.uid() = user_id);

-- RLS: Users can only create/update their own profile
CREATE POLICY "users_own_profile" ON expert_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_update_own_profile" ON expert_profiles
  FOR UPDATE USING (auth.uid() = user_id);
```

**Approval Checklist:**
- [ ] Schema covers all expert signup fields
- [ ] Verification fields included
- [ ] Location-based search possible
- [ ] RLS policies correct
- [ ] Indexes for performance
- [ ] Ready to deploy

**Decision**: APPROVE or REQUEST CHANGES

---

### Afternoon: API Framework Setup (4 hours)

**Task 2: Next.js API Routes Infrastructure**

Create file structure:
```
app/api/
├── experts/
│   ├── route.ts          (GET /api/experts, POST /api/experts)
│   └── [id]/
│       ├── route.ts      (GET /api/experts/[id], PUT /api/experts/[id])
│       └── verify/
│           └── route.ts  (POST /api/experts/[id]/verify - admin only)
├── middleware.ts         (Auth verification)
└── lib/
    └── errors.ts         (Standardized error responses)
```

**File 1: app/api/middleware.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase'

export async function verifyAuth(request: NextRequest) {
  const supabase = createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
  
  return user
}
```

**File 2: app/api/experts/route.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '../middleware'
import { createClient } from '@/lib/supabase'

// POST /api/experts - Create expert profile
export async function POST(request: NextRequest) {
  try {
    const user = await verifyAuth(request)
    if (user instanceof NextResponse) return user
    
    const body = await request.json()
    const supabase = createClient()
    
    // Validation
    if (!body.full_name || !body.specialization || !body.location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Insert profile
    const { data, error } = await supabase
      .from('expert_profiles')
      .insert({
        user_id: user.id,
        full_name: body.full_name,
        specialization: body.specialization,
        location: body.location,
        country: body.country || 'Nigeria',
        phone: body.phone,
        bio: body.bio,
        hourly_rate_usd: body.hourly_rate_usd,
        consultation_types: body.consultation_types || ['online'],
        license_number: body.license_number,
      })
      .select()
      .single()
    
    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

// GET /api/experts - List experts (with search)
export async function GET(request: NextRequest) {
  try {
    const supabase = createClient()
    const searchParams = request.nextUrl.searchParams
    
    let query = supabase
      .from('expert_profiles')
      .select('*')
      .eq('status', 'verified')
    
    // Filters
    if (searchParams.has('location')) {
      query = query.eq('location', searchParams.get('location'))
    }
    if (searchParams.has('specialization')) {
      query = query.eq('specialization', searchParams.get('specialization'))
    }
    
    // Pagination
    const page = parseInt(searchParams.get('page') || '1')
    const limit = 20
    const start = (page - 1) * limit
    
    query = query.range(start, start + limit - 1)
    
    const { data, error } = await query
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
```

**File 3: app/api/experts/[id]/route.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '../../middleware'
import { createClient } from '@/lib/supabase'

// GET /api/experts/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('expert_profiles')
      .select('*')
      .eq('id', params.id)
      .single()
    
    if (error || !data) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PUT /api/experts/[id] - Update own profile
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await verifyAuth(request)
    if (user instanceof NextResponse) return user
    
    const supabase = createClient()
    const body = await request.json()
    
    // Check ownership
    const { data: profile } = await supabase
      .from('expert_profiles')
      .select('user_id')
      .eq('id', params.id)
      .single()
    
    if (profile?.user_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    
    // Update
    const { data, error } = await supabase
      .from('expert_profiles')
      .update({ ...body, updated_at: new Date() })
      .eq('id', params.id)
      .select()
      .single()
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
```

**File 4: app/api/experts/[id]/verify/route.ts**
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '../../../middleware'
import { createClient } from '@/lib/supabase'

// POST /api/experts/[id]/verify - Admin only
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await verifyAuth(request)
    if (user instanceof NextResponse) return user
    
    const supabase = createClient()
    
    // TODO: Check if user is admin (add admin role to auth.users)
    
    const { data, error } = await supabase
      .from('expert_profiles')
      .update({
        status: 'verified',
        verification_date: new Date(),
        verified_by: user.id,
      })
      .eq('id', params.id)
      .select()
      .single()
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
```

**Deliverables:**
- [ ] All 4 API files created
- [ ] TypeScript types correct
- [ ] Error handling in place
- [ ] Pushed to branch

---

### Evening: Deployment Prep (2 hours)

**Task 3: Database Migration**
```bash
# Create migration file
supabase migration new create_expert_profiles

# Deploy to staging
supabase db push --local

# Test connection
npm run dev
```

**Task 4: Test API Locally**
```bash
# Test CREATE expert
curl -X POST http://localhost:3000/api/experts \
  -H "Authorization: Bearer {TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Dr. Segun Okafor",
    "specialization": "pediatrician",
    "location": "Lagos",
    "country": "Nigeria",
    "phone": "+234803",
    "bio": "10 years experience",
    "hourly_rate_usd": 50
  }'

# Test LIST experts
curl http://localhost:3000/api/experts?location=Lagos

# Test GET single expert
curl http://localhost:3000/api/experts/{expert_id}
```

**End of Day Checklist:**
- [ ] Schema approved
- [ ] API files created with TypeScript
- [ ] Supabase migration deployed
- [ ] Local API tested (create + read)
- [ ] Pushed to `claude/elegant-albattani-kVy5a`
- [ ] PR created for code review

---

## TUESDAY JUNE 22

### Morning: Frontend Integration (4 hours)

**Task 5: Create Expert Signup Form**

File: `app/auth/expert-signup/page.tsx`

```typescript
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ExpertSignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const [form, setForm] = useState({
    full_name: '',
    specialization: '',
    location: '',
    country: 'Nigeria',
    phone: '',
    bio: '',
    hourly_rate_usd: '',
    license_number: '',
    consultation_types: ['online'],
  })
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const res = await fetch('/api/experts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error)
      }
      
      // Success
      router.push('/dashboard?success=profile_created')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Create Your Expert Profile</h1>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-2">Full Name</label>
            <input
              type="text"
              required
              value={form.full_name}
              onChange={(e) => setForm({...form, full_name: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Dr. Segun Okafor"
            />
          </div>
          
          {/* Specialization */}
          <div>
            <label className="block font-semibold mb-2">Specialization</label>
            <select
              required
              value={form.specialization}
              onChange={(e) => setForm({...form, specialization: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">Select...</option>
              <option value="pediatrician">Pediatrician</option>
              <option value="therapist">Therapist</option>
              <option value="speech_therapist">Speech Therapist</option>
              <option value="psychologist">Psychologist</option>
              <option value="occupational_therapist">Occupational Therapist</option>
              <option value="teacher">Special Education Teacher</option>
            </select>
          </div>
          
          {/* Location */}
          <div>
            <label className="block font-semibold mb-2">Location</label>
            <select
              required
              value={form.location}
              onChange={(e) => setForm({...form, location: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">Select...</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Accra">Accra</option>
              <option value="Nairobi">Nairobi</option>
            </select>
          </div>
          
          {/* Phone */}
          <div>
            <label className="block font-semibold mb-2">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({...form, phone: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="+234803..."
            />
          </div>
          
          {/* Bio */}
          <div>
            <label className="block font-semibold mb-2">Bio</label>
            <textarea
              value={form.bio}
              onChange={(e) => setForm({...form, bio: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              rows={4}
              placeholder="Brief bio about your experience..."
            />
          </div>
          
          {/* Hourly Rate */}
          <div>
            <label className="block font-semibold mb-2">Hourly Rate (USD)</label>
            <input
              type="number"
              value={form.hourly_rate_usd}
              onChange={(e) => setForm({...form, hourly_rate_usd: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="50"
            />
          </div>
          
          {/* License */}
          <div>
            <label className="block font-semibold mb-2">License Number</label>
            <input
              type="text"
              value={form.license_number}
              onChange={(e) => setForm({...form, license_number: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Optional"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Profile'}
          </button>
        </form>
      </div>
    </div>
  )
}
```

**Deliverables:**
- [ ] Form created and styled
- [ ] All fields match API contract
- [ ] Error handling displayed
- [ ] Success redirect to dashboard
- [ ] Tested in browser

---

### Afternoon: Admin Dashboard (3 hours)

**Task 6: Admin Expert Verification Page**

File: `app/admin/experts/pending/page.tsx`

```typescript
'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function AdminExpertsPage() {
  const [experts, setExperts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchPendingExperts()
  }, [])
  
  const fetchPendingExperts = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('expert_profiles')
      .select('*')
      .eq('status', 'pending')
    
    if (!error) setExperts(data || [])
    setLoading(false)
  }
  
  const verifyExpert = async (expertId: string) => {
    const res = await fetch(`/api/experts/${expertId}/verify`, {
      method: 'POST',
    })
    
    if (res.ok) {
      setExperts(experts.filter(e => e.id !== expertId))
    }
  }
  
  if (loading) return <div>Loading...</div>
  
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Pending Expert Verifications</h1>
        
        {experts.length === 0 ? (
          <p className="text-gray-600">No pending experts</p>
        ) : (
          <div className="space-y-6">
            {experts.map((expert) => (
              <div key={expert.id} className="border rounded-lg p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-gray-600">Name</p>
                    <p className="font-semibold">{expert.full_name}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Specialization</p>
                    <p className="font-semibold">{expert.specialization}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-semibold">{expert.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{expert.bio}</p>
                
                <button
                  onClick={() => verifyExpert(expert.id)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
                >
                  Verify Expert
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
```

---

### Evening: Testing (1 hour)

**Task 7: End-to-End Test**

Manual checklist:
- [ ] Sign up as expert (use existing auth)
- [ ] Navigate to `/auth/expert-signup`
- [ ] Fill form completely
- [ ] Submit
- [ ] Verify data saved in Supabase
- [ ] Admin views pending expert in `/admin/experts/pending`
- [ ] Admin verifies expert
- [ ] Expert appears in search results

**Automated test (optional)**
```typescript
// __tests__/experts.test.ts
import { POST } from '@/app/api/experts/route'

describe('Expert API', () => {
  it('creates expert profile', async () => {
    // Test implementation
  })
})
```

**End of Day Checklist:**
- [ ] Expert signup form created
- [ ] Admin verification page created
- [ ] End-to-end test passes
- [ ] Pushed to branch

---

## WEDNESDAY JUNE 23

### Full Day: Testing & Debugging (8 hours)

**Task 8: Quality Assurance**

Test matrix:
```
[ ] API endpoint returns 400 if full_name missing
[ ] API endpoint returns 400 if specialization missing
[ ] API endpoint returns 400 if location missing
[ ] API endpoint returns 201 on success
[ ] Expert can view their own profile
[ ] Expert cannot view others' unverified profiles
[ ] Admin can verify expert
[ ] Verified expert appears in search
[ ] Search filters by location work
[ ] Search filters by specialization work
[ ] Pagination works (20 per page)
[ ] Unverified experts cannot see each other
```

**Bug tracking**
- Log every issue found
- Create GitHub issues for blockers
- Fix all blockers before Friday
- Accept non-critical issues as Tech Debt

---

## THURSDAY JUNE 24

### Staging Deployment (4 hours)

**Task 9: Deploy to Staging**

```bash
# Merge to main (trigger Vercel deployment)
git checkout main
git pull origin main
git merge claude/elegant-albattani-kVy5a
git push origin main

# Wait for Vercel deployment
# Test on staging: https://carelink-staging.vercel.app

# Verification checklist:
[ ] API endpoints respond
[ ] Database connection works
[ ] Expert signup form loads
[ ] Can create expert profile on staging
[ ] Admin page loads
[ ] Can verify expert on staging
```

**Task 10: Performance Check**

```
[ ] Expert list response time < 500ms
[ ] Expert create response time < 2s
[ ] Search with filters < 500ms
[ ] Database queries have proper indexes
```

---

## FRIDAY JUNE 25

### Documentation & Handoff (4 hours)

**Task 11: API Documentation**

Create `docs/API.md`:
```markdown
# Expert Management API

## POST /api/experts
Create an expert profile.

Request:
```json
{
  "full_name": "Dr. Segun",
  "specialization": "pediatrician",
  "location": "Lagos",
  ...
}
```

Response (201):
```json
{
  "id": "uuid",
  "user_id": "uuid",
  "full_name": "Dr. Segun",
  ...
}
```

Errors:
- 400: Missing required fields
- 401: Unauthorized
```

**Task 12: Database Documentation**

Create `docs/DATABASE.md`:
```markdown
# Database Schema

## expert_profiles

| Column | Type | Required | Notes |
|--------|------|----------|-------|
| id | UUID | Yes | Primary key |
| user_id | UUID | Yes | Foreign key to users |
| full_name | TEXT | Yes | Expert name |
| specialization | TEXT | Yes | See allowed values |
| location | TEXT | Yes | City |
| status | TEXT | No | 'pending', 'verified', 'suspended' |
...
```

---

## SATURDAY JUNE 26 - SUNDAY JUNE 27

### Live Deployment & UAT (8 hours over weekend)

**Task 13: Production Deployment**

- [ ] Set environment variables in Vercel
- [ ] Deploy to production
- [ ] Smoke test all endpoints
- [ ] Expert signup form works live
- [ ] Admin verification works live

**Task 14: First Expert Signup**

- Invite 2-3 trusted experts to sign up
- Have them create profiles live
- Admin verifies them
- Celebrate first verified expert 🎉

---

## END OF WEEK DELIVERABLES

```
✅ Database: expert_profiles table live
✅ API: POST /api/experts working
✅ API: GET /api/experts working with search
✅ API: PUT /api/experts/:id working
✅ API: POST /api/experts/:id/verify working
✅ Frontend: Expert signup form complete
✅ Frontend: Admin verification page complete
✅ Testing: All critical paths tested
✅ Documentation: API docs + schema docs
✅ Deployment: Live on production
✅ First verified expert created
```

---

## SUCCESS METRIC

**By end of Week 1:**

- [ ] Visit https://carelink.vercel.app/auth/expert-signup
- [ ] Fill form as expert
- [ ] Submit
- [ ] Confirm profile in database
- [ ] Admin approves
- [ ] Verified expert appears in `/experts` search results

**If any step fails: Do not move forward. Fix it.**

---

## TEAM ASSIGNMENTS

```
Backend Engineer:
  - API endpoints (Tasks 2, 4)
  - Database setup (Task 3)
  - Verification workflow (Task 6)
  
Frontend Engineer:
  - Expert signup form (Task 5)
  - Admin verification UI (Task 6)
  - Testing (Task 7, 8)
  
DevOps / Product:
  - Deployment coordination (Task 9, 13)
  - Documentation (Task 11, 12)
  - Quality assurance (Task 8)
```

---

## DAILY STANDUP FORMAT

Each day, report:
```
What got done today:
- [ ] Task X complete
- [ ] Task Y blocked because Z

Blockers:
- Database migration failing (fix by EOD)

Tomorrow:
- Continue Task A
- Start Task B
```

---

## RED FLAGS (Stop & Reassess If)

🚩 **Database migration fails** → Don't proceed, debug
🚩 **API test fails locally** → Don't deploy to staging
🚩 **Form doesn't connect to API** → Don't deploy to production
🚩 **More than 1 day behind schedule** → Cut scope, ship what works

---

**START: Monday June 21, 2026**  
**END: Sunday June 27, 2026**  
**DEFINITION OF DONE: First verified expert searchable by parents**

**Go.**
