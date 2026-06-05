# CareLink Africa - Sitemap & Navigation

## Information Architecture

### 1. Public Pages (No Authentication Required)

#### Home
- `/` - Landing page with hero, features, conditions, success stories, CTA

#### About
- `/about` - Company mission, vision, team, impact statistics
- `/how-it-works` - Platform walkthrough
- `/team` - Team members and bios
- `/impact` - Impact statistics and data

#### Conditions Directory
- `/conditions` - All conditions listing
- `/conditions/[slug]` - Individual condition page
  - Overview
  - Symptoms
  - Diagnosis information
  - Treatment options
  - Recommended experts
  - Resources and articles
  - Related success stories

#### Learning Center
- `/learn` - Hub page with featured content
- `/learn/articles` - Browse all articles
- `/learn/articles/[slug]` - Individual article
- `/learn/videos` - Video library
- `/learn/guides` - Downloadable guides
- `/learn/parenting-tips` - Parenting tips collection
- `/learn/early-diagnosis` - Early diagnosis guides

#### Success Stories
- `/stories` - Browse all success stories
- `/stories/[slug]` - Individual story page
- `/stories/new` - Submit new story (authenticated)

#### Expert Directory
- `/experts` - Search and filter experts
- `/experts/[id]` - Expert profile page
  - Bio and qualifications
  - Specialization
  - Ratings and reviews
  - Availability
  - Book appointment

#### Contact & Support
- `/contact` - Contact form
- `/faq` - FAQ page
- `/emergency` - Emergency resources

#### Legal
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/cookie-policy` - Cookie policy
- `/accessibility` - Accessibility statement

### 2. Authentication Pages

#### Authentication
- `/auth/login` - Login page
- `/auth/signup` - Signup page (choose user type)
- `/auth/forgot-password` - Password reset
- `/auth/reset-password` - Password reset form
- `/auth/verify-email` - Email verification
- `/auth/onboarding` - User type onboarding

### 3. Authenticated Pages - Parent Dashboard

#### Dashboard
- `/dashboard` - Dashboard home
- `/dashboard/profile` - User profile management
- `/dashboard/children` - Children management
  - `/dashboard/children/new` - Add new child
  - `/dashboard/children/[id]` - Edit child
  - `/dashboard/children/[id]/progress` - Progress tracking
  - `/dashboard/children/[id]/appointments` - Appointment history
  - `/dashboard/children/[id]/therapies` - Therapy records

#### Appointments
- `/dashboard/appointments` - All appointments
- `/dashboard/appointments/new` - Book appointment
- `/dashboard/appointments/[id]` - Appointment details
- `/dashboard/appointments/[id]/reschedule` - Reschedule appointment

#### Community
- `/dashboard/forums` - My forum threads
- `/dashboard/support-groups` - Joined support groups
- `/dashboard/support-groups/[id]` - Support group details
- `/dashboard/support-groups/[id]/discussions` - Group discussions

#### Campaigns & Donations
- `/dashboard/campaigns` - My campaigns
- `/dashboard/campaigns/new` - Create campaign
- `/dashboard/campaigns/[id]` - Campaign details
- `/dashboard/campaigns/[id]/edit` - Edit campaign
- `/dashboard/campaigns/[id]/donations` - Campaign donations
- `/dashboard/donations` - Donation history

#### Progress Tracking
- `/dashboard/progress` - Progress overview
- `/dashboard/progress/milestones` - Milestones
- `/dashboard/progress/milestones/new` - Add milestone
- `/dashboard/progress/therapy-records` - Therapy records
- `/dashboard/progress/therapy-records/new` - Add therapy record
- `/dashboard/progress/reports` - Generate reports

#### Settings
- `/dashboard/settings` - Settings home
- `/dashboard/settings/profile` - Profile settings
- `/dashboard/settings/privacy` - Privacy settings
- `/dashboard/settings/notifications` - Notification preferences
- `/dashboard/settings/billing` - Billing & subscriptions

### 4. Authenticated Pages - Expert Dashboard

#### Expert Profile
- `/expert/dashboard` - Expert dashboard home
- `/expert/profile` - Profile management
- `/expert/profile/edit` - Edit profile
- `/expert/profile/qualifications` - Manage qualifications
- `/expert/profile/availability` - Set availability

#### Appointments
- `/expert/appointments` - Manage appointments
- `/expert/appointments/[id]` - Appointment details
- `/expert/appointments/[id]/notes` - Add appointment notes

#### Patients
- `/expert/patients` - Patient list
- `/expert/patients/[id]` - Patient details
- `/expert/patients/[id]/history` - Patient history

#### Reviews
- `/expert/reviews` - Manage reviews
- `/expert/reviews/[id]` - Review details and response

#### Earnings
- `/expert/earnings` - Earnings dashboard
- `/expert/earnings/transactions` - Transaction history
- `/expert/earnings/withdrawal` - Withdrawal requests
- `/expert/earnings/invoices` - Invoices

#### Settings
- `/expert/settings` - Settings home
- `/expert/settings/profile` - Profile settings
- `/expert/settings/payment` - Payment settings
- `/expert/settings/notifications` - Notifications

### 5. Authenticated Pages - Donor/Volunteer Dashboard

#### Dashboard
- `/supporter/dashboard` - Dashboard home
- `/supporter/profile` - Profile management

#### Donations
- `/supporter/donations` - Donation history
- `/supporter/donations/new` - Make donation
- `/supporter/donations/recurring` - Manage recurring donations

#### Volunteer
- `/supporter/volunteer` - Volunteer opportunities
- `/supporter/volunteer/[id]` - Opportunity details
- `/supporter/volunteer/applied` - Applied opportunities

#### Impact
- `/supporter/impact` - View impact
- `/supporter/impact/certificates` - Impact certificates

### 6. Admin Dashboard (Admin Only)

#### Admin Home
- `/admin` - Admin dashboard
- `/admin/analytics` - Analytics and reports

#### Users Management
- `/admin/users` - User list and management
- `/admin/users/[id]` - User details
- `/admin/experts/verify` - Expert verification
- `/admin/experts/[id]/verify` - Verify expert

#### Content Management
- `/admin/articles` - Manage articles
- `/admin/articles/new` - Create article
- `/admin/articles/[id]/edit` - Edit article
- `/admin/conditions` - Manage conditions
- `/admin/conditions/new` - Add condition
- `/admin/conditions/[id]/edit` - Edit condition

#### Moderation
- `/admin/forums/moderation` - Forum moderation
- `/admin/forums/threads` - Manage threads
- `/admin/forums/reports` - Reported content

#### Support Tickets
- `/admin/support` - Support tickets
- `/admin/support/[id]` - Ticket details

#### Settings
- `/admin/settings` - Admin settings
- `/admin/settings/general` - General settings
- `/admin/settings/email` - Email settings
- `/admin/settings/payment` - Payment settings
- `/admin/settings/permissions` - User permissions

## Navigation Structure

### Main Navigation
1. Home
2. Services (dropdown)
   - Expert Directory
   - Conditions Guide
   - Learning Center
3. Community (dropdown)
   - Discussion Forums
   - Support Groups
   - Success Stories
4. About
5. Contact

### User Menu (Authenticated)
1. Dashboard
2. Profile
3. Settings
4. Logout

## Page Flow Diagrams

### User Signup Flow
1. Landing Page
2. Auth/Signup
3. Choose User Type (Parent/Expert/Donor)
4. Onboarding
5. Dashboard

### Expert Discovery Flow
1. Home
2. Expert Directory
3. Filter/Search
4. Expert Profile
5. Book Appointment
6. Confirmation

### Campaign Support Flow
1. Home/Campaigns
2. Campaign Details
3. Donation Page
4. Payment
5. Confirmation
6. Impact Report

### Forum Engagement Flow
1. Home/Forums
2. Forum List
3. Thread List
4. Create Thread/Post
5. Community Engagement

## Responsive Design Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## SEO Structure

- Each main page has unique meta tags
- Conditions and articles are optimized for search
- Breadcrumb navigation for deep pages
- Structured data markup for rich snippets
