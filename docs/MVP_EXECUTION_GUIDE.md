# CareLink Africa MVP - Execution Guide

**Timeline**: 6-8 weeks  
**Team Size**: 3-4 people  
**Go-Live**: Week 8  

---

## Phase-by-Phase Execution

### WEEK 1-2: Foundation & Setup

**Backend Tasks** (Backend Engineer)
```
- [ ] Supabase project setup
- [ ] Create 8 core tables (see MVP_DATABASE_SCHEMA.md)
- [ ] Set up authentication (email/password)
- [ ] Create API endpoints for:
  - POST /auth/signup
  - POST /auth/login
  - POST /auth/logout
  - GET /experts (with filters)
  - GET /conditions
  - GET /articles
  - GET /videos
  - GET /forums
  - POST /forums/threads
  - POST /forums/posts
- [ ] Set up SendGrid for emails
- [ ] Create admin user seed data
- [ ] Write API documentation
- [ ] Set up database backups
```

**Frontend Tasks** (Frontend Engineer 1)
```
- [ ] Remove donation/campaign features from codebase
- [ ] Simplify design system (keep core only)
- [ ] Set up authentication flows
- [ ] Create login/signup pages
- [ ] Set up API client with auth
- [ ] Create base layout for authenticated users
- [ ] Set up routing structure
```

**DevOps Tasks** (Part-time)
```
- [ ] GitHub Actions setup
- [ ] Vercel deployment pipeline
- [ ] Environment variables configuration
- [ ] Database migration scripts
- [ ] Monitoring & alerts
- [ ] Logging setup
```

**Launch**: MVP API ready, auth working, frontend scaffold complete

---

### WEEK 3-4: Core Pages & Search

**Frontend Tasks** (2 Frontend Engineers)
```
- [ ] Homepage (simplified - no donations/campaigns)
  - Hero section
  - Mission statement
  - 2-3 success stories (hardcoded for now)
  - Featured conditions (5)
  - Featured experts (6)
  - Join CTA

- [ ] Conditions Directory
  - Conditions list (paginated)
  - Condition detail page with:
    - Overview
    - Symptoms
    - Diagnosis info
    - Related articles/videos
    - Expert search by condition

- [ ] Expert Directory
  - Expert search with filters:
    - Country
    - Specialization
    - Years of experience
  - Expert list view
  - Expert detail page with:
    - Profile info
    - Bio
    - Languages
    - Contact email
    - Location

- [ ] Learning Center
  - Articles list (searchable)
  - Article detail page
  - Videos list (searchable)
  - Video embed page
  - Category filtering

- [ ] Mobile optimization
  - Responsive design
  - Touch-friendly interface
```

**Backend Tasks** (Backend Engineer)
```
- [ ] Implement expert search API
  - GET /experts?country=&specialization=&search=
  - Full-text search on name/bio
  - Country + specialization filtering
  
- [ ] Implement conditions API
  - GET /conditions
  - GET /conditions/:slug
  - Include related articles/videos

- [ ] Implement content APIs
  - GET /articles?search=&category=
  - GET /articles/:slug
  - GET /videos?search=&category=
  - GET /videos/:slug

- [ ] Add seed data
  - 5 conditions
  - 50+ articles
  - 20+ videos
  - 10 sample experts
```

**Launch**: User can search experts by country & specialization, browse conditions, read articles

---

### WEEK 5-6: Forums & Community

**Frontend Tasks** (1 Frontend Engineer)
```
- [ ] Forum directory page
- [ ] Forum category page
- [ ] Forum thread list (by category)
- [ ] Forum thread detail page
- [ ] Create thread form (parents only)
- [ ] Create reply form
- [ ] Edit/delete thread (own threads only)
- [ ] Edit/delete reply (own replies only)
- [ ] Flag for review button
- [ ] User profiles in forum
```

**Backend Tasks** (Backend Engineer)
```
- [ ] Forum API endpoints
  - GET /forums
  - GET /forums/:category
  - GET /forums/threads/:id
  - POST /forums/threads (auth required)
  - POST /forums/posts/:threadId (auth required)
  - PATCH /forums/threads/:id (own only)
  - PATCH /forums/posts/:id (own only)
  - DELETE /forums/threads/:id (own only)
  - DELETE /forums/posts/:id (own only)
  - POST /forums/posts/:id/flag
  - GET /admin/forums/flagged

- [ ] Moderation API
  - Flag system for inappropriate content
  - Admin review endpoint
  - Soft delete for removed content
```

**Launch**: Parents can create discussions, reply to threads, report inappropriate content

---

### WEEK 7-8: Expert Verification & Polish

**Frontend Tasks** (1 Frontend Engineer)
```
- [ ] Nearby services map (optional)
  - Services directory page
  - Service detail page
  - Map view (if time permits)
  - Filter by city/country

- [ ] Expert profile management
  - Edit my expert profile
  - Upload profile picture
  - Manage bio/specializations

- [ ] Admin dashboard (basic)
  - Login gate (admin only)
  - Expert verification queue
  - Approve/reject experts
  - Content management interface
  - Forum moderation queue

- [ ] Performance optimization
  - Image optimization
  - Code splitting
  - Lazy loading
  - Caching strategies

- [ ] Mobile testing
  - Test on iOS & Android
  - Fix responsive issues
  - Test touch interactions
```

**Backend Tasks** (Backend Engineer)
```
- [ ] Expert verification endpoints
  - POST /admin/experts/:id/verify
  - POST /admin/experts/:id/reject
  - GET /admin/verification-queue

- [ ] Content management API
  - POST /admin/articles
  - PATCH /admin/articles/:id
  - DELETE /admin/articles/:id
  - POST /admin/videos
  - PATCH /admin/videos/:id
  - DELETE /admin/videos/:id

- [ ] Nearby services API
  - GET /services?country=&city=&type=
  - GET /services/:id
  - POST /services (admin only)

- [ ] Admin endpoints
  - GET /admin/users (pagination)
  - GET /admin/experts/pending
  - GET /admin/forums/flagged
  - PATCH /admin/forums/threads/:id/lock

- [ ] Security audit
  - CORS configuration
  - Rate limiting
  - Input validation
  - SQL injection prevention
  - XSS prevention

- [ ] Performance optimization
  - Database query optimization
  - Caching layer (Redis)
  - API response compression
```

**Launch Checklist**
```
- [ ] All pages responsive on mobile/tablet/desktop
- [ ] Zero console errors or warnings
- [ ] Forms have validation
- [ ] Error messages are helpful
- [ ] Loading states on all buttons
- [ ] No broken images
- [ ] API response times < 500ms
- [ ] Database queries optimized
- [ ] Security headers set
- [ ] Environment variables secure
- [ ] Backups configured
- [ ] Monitoring configured
- [ ] Alert system working
```

---

## API Endpoint Summary (MVP)

### Authentication
```
POST /auth/signup
POST /auth/login
POST /auth/logout
POST /auth/forgot-password
POST /auth/reset-password
```

### Users
```
GET /users/me
PATCH /users/me
POST /users/me/profile-picture
```

### Experts
```
GET /experts
GET /experts/:id
POST /experts/profile
PATCH /experts/profile
```

### Conditions
```
GET /conditions
GET /conditions/:slug
```

### Content
```
GET /articles
GET /articles/:slug
GET /videos
GET /videos/:slug
```

### Forums
```
GET /forums
GET /forums/:category
GET /forums/threads/:id
POST /forums/threads
POST /forums/posts/:threadId
PATCH /forums/posts/:id
DELETE /forums/posts/:id
POST /forums/posts/:id/flag
```

### Services
```
GET /services
GET /services/:id
```

### Admin
```
GET /admin/experts/pending
POST /admin/experts/:id/verify
GET /admin/forums/flagged
POST /admin/articles
PATCH /admin/articles/:id
```

---

## MVP Content Requirements

### Conditions (5)
1. Autism Spectrum Disorder
2. ADHD
3. Down Syndrome
4. Cerebral Palsy
5. Speech Disorders

### Articles (Minimum 50)
- 10 per condition
- Topics:
  - Overview of condition
  - Early diagnosis signs
  - Treatment options
  - Parenting strategies
  - School accommodations

### Videos (Minimum 20)
- 4 per condition
- Content:
  - Expert interviews
  - Parent testimonials
  - Therapy demonstrations
  - Educational guides

### Expert Seed Data
- 20-30 sample experts
- Mix of specializations
- Geographic distribution
- Verified status set to TRUE (for launch)

---

## Team Roles & Responsibilities

### Backend Engineer (Full-time)
- Database design & optimization
- API development & documentation
- Authentication system
- Admin endpoints
- Security & performance
- **Week 1-2**: Foundation
- **Week 3-4**: Content APIs
- **Week 5-6**: Forum APIs
- **Week 7-8**: Admin & launch prep

### Frontend Engineer 1 (Full-time)
- UI/UX implementation
- Responsive design
- Form development
- State management
- **Week 1-2**: Auth setup
- **Week 3-4**: Expert directory & content
- **Week 5-6**: Forum UI
- **Week 7-8**: Polish & optimization

### Frontend Engineer 2 (Full-time)
- Homepage & conditions
- Learning center
- Admin dashboard
- Mobile optimization
- **Week 3-4**: Homepage & conditions
- **Week 5-6**: Learning center
- **Week 7-8**: Admin & mobile

### DevOps (Part-time)
- Infrastructure setup
- Deployment pipeline
- Monitoring & alerts
- **Week 1-2**: Pipeline setup
- **Week 7-8**: Pre-launch

---

## Technology Decisions for MVP

### Database
- **Supabase** (PostgreSQL + Auth + Storage)
- Why: Fast setup, built-in auth, great for MVP

### Frontend
- **Next.js 14** + **React** + **TypeScript**
- **Tailwind CSS** for styling
- Why: Fast development, great performance, easy to scale

### Hosting
- **Vercel** for frontend
- **Supabase** for backend
- Why: Zero-config deployment, excellent DX

### Email
- **SendGrid** free tier
- Why: Free, reliable, good for startup

### Authentication
- **Supabase Auth** (built-in)
- Why: Included, works great with database

### Payments (Phase 2)
- **Stripe**
- Why: Industry standard, easy integration

---

## Common MVP Pitfalls to Avoid

❌ **Don't**
- Build campaign/donation system (Phase 2)
- Add appointment booking (Phase 2)
- Create progress tracking (Phase 2)
- Build AI assistant (Phase 3)
- Support multiple languages (Phase 3+)
- Create mobile app (Phase 3)
- Build volunteer system (Phase 3)

✅ **Do**
- Keep features focused and simple
- Test thoroughly before launch
- Get expert verification working
- Build community engagement early
- Collect user feedback constantly
- Monitor performance closely
- Plan Phase 2 during MVP

---

## Launch Readiness Checklist

**Week 8 - 48 Hours Before Launch**
```
Database & APIs
- [ ] All APIs tested & documented
- [ ] Database backups configured
- [ ] Monitoring alerts active
- [ ] Error logging working
- [ ] CORS properly configured

Frontend
- [ ] No console errors
- [ ] All links working
- [ ] Forms validating
- [ ] Mobile responsive
- [ ] Loading states visible
- [ ] Error handling graceful

Content
- [ ] All 5 conditions created
- [ ] 50+ articles imported
- [ ] 20+ videos embedded
- [ ] 20 expert accounts created
- [ ] Admin account working

Security
- [ ] Password hashing verified
- [ ] API authentication tested
- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] Rate limiting active

Performance
- [ ] Page load < 3 seconds
- [ ] API response < 500ms
- [ ] Database queries optimized
- [ ] Images optimized
- [ ] No memory leaks
```

**Launch Day**
```
- [ ] Final backup
- [ ] Monitor errors closely
- [ ] Watch user signups
- [ ] Be ready for quick hotfixes
- [ ] Celebrate 🎉
```

---

## Success Criteria for MVP Launch

- ✅ Zero critical bugs in first 48 hours
- ✅ 99%+ uptime
- ✅ All expert verification working
- ✅ Forum functional & moderation possible
- ✅ Mobile responsive
- ✅ Email notifications working
- ✅ Admin can manage content
- ✅ First 100 users sign up
- ✅ First 20 experts verified
- ✅ First 50 forum threads created

---

## Post-Launch (Weeks 9-12)

### Monitoring
- Monitor error rates 24/7
- Watch performance metrics
- Track user engagement
- Monitor expert verification rate

### User Feedback
- Collect feedback daily
- Do 20+ user interviews
- Watch forum discussions
- Track feature requests

### Bug Fixes
- Quick turnaround on critical bugs
- Weekly non-critical fixes
- Performance improvements
- Mobile fixes

### Content Growth
- Add more articles weekly
- Add more experts weekly
- Moderate forum actively
- Featured content rotation

### Planning Phase 2
- Based on user feedback
- Based on usage patterns
- Based on feature requests
- Based on engagement metrics

---

This execution guide keeps the team focused, eliminates scope creep, and gets you to launch in 8 weeks. Good luck! 🚀
