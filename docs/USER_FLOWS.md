# CareLink Africa - User Flows & Interactions

## 1. Parent User Flow

### A. Signup & Onboarding
```
Landing Page
    ↓ (Click "Get Started")
Auth/Signup
    ↓ (Select "Parent")
Email Verification
    ↓ (Verify email)
Onboarding - Basic Info
    ↓ (Add name, phone, country)
Onboarding - Children
    ↓ (Add first child info)
Onboarding - Preferences
    ↓ (Choose conditions, interests)
Dashboard
```

### B. Finding & Booking Expert
```
Dashboard
    ↓ (Click "Find Expert")
Expert Directory
    ↓ (Filter by condition, location, type)
Expert Profile
    ↓ (View qualifications, reviews, availability)
Book Appointment
    ↓ (Select date/time)
Review Booking
    ↓ (Confirm details)
Payment
    ↓ (Process payment)
Confirmation
    ↓ (Calendar updated)
```

### C. Tracking Progress
```
Dashboard
    ↓ (Click "Progress Tracking")
Progress Overview
    ↓ (Select child)
Add Milestone/Record
    ↓ (Fill form)
Save & Notify
    ↓ (Update calendar)
View Progress Report
    ↓ (Generate report)
```

### D. Creating Support Campaign
```
Dashboard
    ↓ (Click "Create Campaign")
Campaign Form
    ↓ (Select type: therapy, medical, education, equipment)
Campaign Details
    ↓ (Title, description, goal amount)
Add Images/Documents
    ↓ (Upload proof)
Review & Publish
    ↓ (Set live)
Campaign Page
    ↓ (Share with community)
Track Donations
    ↓ (Monitor progress)
```

### E. Community Engagement
```
Dashboard
    ↓ (Click "Forums")
Forum Categories
    ↓ (Select category - Autism, ADHD, etc.)
Thread List
    ↓ (Browse discussions)
Create Thread / Reply
    ↓ (Share experience/question)
Post Published
    ↓ (Community response)
Mark Helpful
    ↓ (Rate contributions)
```

## 2. Expert User Flow

### A. Signup & Verification
```
Landing Page
    ↓ (Click "Get Started")
Auth/Signup
    ↓ (Select "Expert")
Email Verification
    ↓ (Verify email)
Onboarding - Basic Info
    ↓ (Name, phone, specialization)
Onboarding - Qualifications
    ↓ (Upload licenses, certificates)
Onboarding - Availability
    ↓ (Set availability & rates)
Onboarding - Consultation Settings
    ↓ (Online/Physical/Phone preferences)
Expert Profile
    ↓ (Submitted for verification)
Verification Process (Admin Review)
    ↓ (2-5 days)
Approved/Active Profile
```

### B. Managing Appointments
```
Expert Dashboard
    ↓ (View upcoming appointments)
Appointment Details
    ↓ (Parent info, child info, history)
Prepare for Appointment
    ↓ (Review notes)
Complete Appointment
    ↓ (Add notes/assessment)
Mark as Complete
    ↓ (Generate assessment report)
Send Report to Parent
    ↓ (Notification sent)
Request Review/Rating
```

### C. Building Profile & Reviews
```
Expert Dashboard
    ↓ (View Profile Stats)
Current Ratings/Reviews
    ↓ (See feedback)
Respond to Review
    ↓ (Add professional response)
View Patient Success Stories
    ↓ (Track impact)
Update Qualifications
    ↓ (Add new certifications)
View Appointment History
    ↓ (Track progress)
```

## 3. Donor/Volunteer User Flow

### A. Donation Flow
```
Landing Page / Campaigns
    ↓ (Browse campaigns)
Campaign Details
    ↓ (View family story, goal progress)
Donation Options
    ├─ Financial Donation
    ├─ Equipment Donation
    └─ Volunteer Hours
    ↓
Select Option
    ↓
Donation Details
    ↓ (Amount, message, recurring?)
Payment / Confirmation
    ↓
Thank You Page
    ↓
Impact Certificate / Receipt
    ↓
Track Impact
    ↓ (See how donation helped)
```

### B. Volunteering Flow
```
Dashboard
    ↓ (Click "Volunteer")
Volunteer Opportunities
    ↓ (Filter by type, location, commitment)
Opportunity Details
    ↓ (Description, time commitment, location)
Express Interest
    ↓ (Add cover letter, availability)
Application Submitted
    ↓ (Wait for approval)
Onboarding Materials
    ↓ (Receive training)
Start Volunteering
    ↓ (Log hours, track impact)
Feedback & Recognition
```

## 4. Admin User Flow

### A. Expert Verification
```
Admin Dashboard
    ↓ (View pending verifications)
Expert Application
    ↓ (Review credentials)
Verify Documents
    ├─ License verification
    ├─ Education verification
    ├─ Background check
    └─ References
    ↓
Approve / Reject
    ↓
Notify Expert
    ↓
Expert Profile Goes Live / Rejected
```

### B. Content Management
```
Admin Dashboard
    ↓ (Click "Content")
Create/Edit Article
    ↓ (Write and format)
Add Condition Guide
    ↓ (Fill template)
Manage Resources
    ↓ (Videos, downloads)
Publish / Schedule
    ↓ (SEO optimization)
Content Live
```

### C. Forum Moderation
```
Admin Dashboard
    ↓ (Click "Moderation")
Flag/Report Review
    ├─ Inappropriate content
    ├─ Spam
    ├─ Harassment
    └─ Misinformation
    ↓
Review Content
    ↓
Action Decision
    ├─ Approve
    ├─ Request Edit
    └─ Remove
    ↓
Notify User
    ↓
Monitor Compliance
```

## 5. Feature-Specific Flows

### Progress Tracking Flow
```
Child Profile
    ↓
Select Progress Type
    ├─ Milestone
    ├─ Therapy Session
    ├─ Medical Appointment
    └─ General Progress
    ↓
Add Details
    ├─ Date
    ├─ Type/Category
    ├─ Notes
    ├─ Rating (1-10)
    └─ Attachments (photos, documents)
    ↓
Save & Notify
    ↓
Update Timeline
    ↓
Generate Reports
    └─ Monthly/Quarterly/Annual
```

### Appointment Flow (Parent Perspective)
```
Book Appointment
    ↓
Select Expert
    ├─ Filter by specialization
    ├─ Filter by location/language
    └─ Check availability
    ↓
Select Date & Time
    ↓
Review Appointment Details
    ├─ Expert info
    ├─ Child info
    ├─ Type (online/physical)
    └─ Price
    ↓
Proceed to Payment
    ├─ Add payment method
    ├─ Enter promo code
    └─ Confirm total
    ↓
Payment Confirmation
    ↓
Appointment Confirmed
    ↓
Calendar Event Created
    ↓
Day Before: Reminder
    ↓
Appointment Day
    ↓
Post-Appointment: Request Review/Rating
```

### Support Campaign Creation
```
Create Campaign
    ↓
Select Campaign Type
    ├─ Therapy Support
    ├─ Medical Support
    ├─ Education Support
    ├─ Equipment Support
    └─ Family Assistance
    ↓
Campaign Information
    ├─ Title
    ├─ Description
    ├─ Child's story
    ├─ Goal amount
    └─ Timeline
    ↓
Upload Media
    ├─ Child's photo (optional)
    ├─ Documents/proof
    └─ Medical reports (if applicable)
    ↓
Set Privacy
    ├─ Public/Private
    └─ Donation visibility
    ↓
Review & Publish
    ↓
Campaign Live
    ↓
Share Campaign
    ├─ Email
    ├─ Social media
    └─ Forums
    ↓
Monitor Donations
    ├─ Track funds
    ├─ Thank donors
    └─ Update community
    ↓
Campaign Complete
    └─ Share impact report
```

## 6. Error Handling Flows

### Failed Payment
```
Proceed to Payment
    ↓ (Error: Card Declined)
Error Message
    ↓
Retry Payment
    ├─ Try different card
    └─ Update payment method
    ↓
Success / Failure
```

### Expert Not Available
```
Select Expert
    ↓ (No slots available)
View Alternative Experts
    ├─ Suggested alternatives
    ├─ Similar specializations
    └─ Available slots
    ↓
Select Alternative
    ↓
Proceed with booking
```

## 7. Communication Flows

### In-App Notifications
```
Event Triggered
    ├─ Appointment confirmed
    ├─ Review posted
    ├─ Donation received
    ├─ Message received
    └─ Milestone reached
    ↓
Create Notification
    ↓
Send Push/Email
    ↓
User Sees Notification
    ↓
User Action
    └─ Dismiss / View / Reply
```

### Email Communication
```
Event Triggered
    ↓
Email Template Selected
    ├─ Appointment confirmed
    ├─ Payment receipt
    ├─ Weekly digest
    ├─ Campaign update
    └─ Important announcement
    ↓
Personalize Content
    ├─ Insert user name
    ├─ Insert relevant details
    └─ Add call-to-action
    ↓
Send via SendGrid
    ↓
Track Open/Click Rates
```

## Key Interaction Patterns

1. **Discovery** - Users explore content (directory, forums, articles)
2. **Connection** - Users connect with experts or community (booking, forums)
3. **Tracking** - Users monitor progress (milestones, therapy records)
4. **Support** - Users give/receive support (donations, campaigns)
5. **Learning** - Users access resources (articles, guides, videos)
6. **Engagement** - Users participate in community (forums, groups)
