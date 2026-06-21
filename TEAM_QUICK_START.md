# CareLink Africa - Team Quick Start Guide

## For All Team Members

### Access the Landing Page
- **URL**: `https://carelink-git-clau-*.vercel.app/waitlist` (or production domain once deployed)
- **What to see**: Hero section, founder story, 3 signup forms, social proof, WhatsApp buttons
- **Test it**: Fill out each form and verify you receive a success message

### Access the Admin Dashboard
- **URL**: `https://carelink-git-clau-*.vercel.app/admin/waitlist`
- **What you'll see**: Real-time counts of all submissions
- **Tabs**: Overview, Parents, Experts, Partnerships
- **Features**: View all submissions, export to CSV, filter by status

---

## For Expert Lead

### Your Job This Week
1. Finalize list of 150 expert targets (from networks, associations, referrals)
2. Prepare personalized outreach emails (use template from `/execution/OUTREACH_TEMPLATES.md`)
3. Set up Expert Recruitment CRM spreadsheet (see `/execution/EXPERT_RECRUITMENT_CRM.md`)
4. Begin Week 3 outreach: **Send 50 expert recruitment emails**

### Quick Links
- **Template**: Expert Recruitment Email in `/execution/OUTREACH_TEMPLATES.md` (Email 1)
- **CRM Tracker**: `/execution/EXPERT_RECRUITMENT_CRM.md` (copy columns into Google Sheets)
- **Target List**: 150 experts across Nigeria (prioritize associations: SPSI, NAPED, etc.)
- **Success Metric**: 50+ contacted, 15+ responded, 5+ applications by Friday

### How to Track
1. Create a Google Sheet with columns from `EXPERT_RECRUITMENT_CRM.md`
2. Copy expert email addresses into the CRM
3. Log outreach action and date sent
4. Track responses and follow-up dates
5. Update status as they move through pipeline (contacted → responded → applied → verified)

### WhatsApp Follow-up
- Send WhatsApp message after 3 days of no response (template in `/execution/OUTREACH_TEMPLATES.md`)
- Keep calls brief: "Still interested? Click [link]. Questions? Call me."

---

## For Community Lead

### Your Job This Week
1. Identify 100 early adopter parents (from networks, referrals, parent groups)
2. Prepare parent outreach messages (WhatsApp, email, social media)
3. Seed 50 discussion topics (titles + 1-2 starter questions each)
4. Set up Community CRM for tracking parent signups

### Quick Links
- **Template**: Parent Outreach in `/execution/OUTREACH_TEMPLATES.md`
- **Social Post**: Facebook post template included
- **Target**: 25 parent signups by Friday (Week 3)
- **Discussion Seed List**: Plan 50 topics by theme (Autism, ADHD, Speech, etc.)

### How to Execute
1. Share `/waitlist` link on LinkedIn, Facebook, WhatsApp groups
2. Send direct messages to 50 parent contacts with personalized note
3. Once parents sign up, capture them in CRM and add to a "Verified Parents" group
4. Prepare 50 discussion topics (can be crowdsourced with team)

---

## For Partnership Lead

### Your Job This Week
1. Finalize list of 15 partnership targets (NGOs, hospitals, associations, companies)
2. Research contact information and relevant stakeholders
3. Prepare partnership inquiry emails (use template from `/execution/OUTREACH_TEMPLATES.md`)
4. Set up Partnership CRM (see `/execution/PARTNERSHIP_CRM.md`)

### Quick Links
- **NGO Template**: Partnership Email 1 in `/execution/OUTREACH_TEMPLATES.md`
- **Hospital Template**: Partnership Email 2
- **CRM Tracker**: `/execution/PARTNERSHIP_CRM.md`
- **Target**: 2 conversations scheduled by Friday, 9 partners signed by Week 8

### How to Execute
1. Create Google Sheet with Partnership CRM columns
2. List 15 target partnerships by tier (Tier 1: established, Tier 2: growing, Tier 3: aligned)
3. Research decision-makers and email addresses
4. Send personalized outreach emails (Week 3)
5. Log responses and schedule 20-minute calls
6. Document partnership agreements once signed

---

## For Content/Resources Lead

### Your Job This Week
1. Finalize list of 50 article topics (by condition and common questions)
2. Assign 50 articles to writers (team members, external partners, or AI-assisted)
3. Set up Content Production Tracker (see `/execution/CONTENT_PRODUCTION_TRACKER.md`)
4. Establish content review and approval process

### Quick Links
- **Topics**: See `/docs/LAUNCH_CONTENT_STRATEGY.md` for 50 recommended topics
- **Tracker**: Copy columns from `/execution/CONTENT_PRODUCTION_TRACKER.md` into Google Sheets
- **Timeline**: 20 articles by Week 4, all 50 by Week 6
- **Format**: 500-1000 words, expert-reviewed, parent-tested language

### How to Execute
1. Create content production tracker with columns: Topic, Condition, Assigned Writer, Due Date, Status, Reviewed By
2. Assign each article (realistic: 3-5 per writer per week)
3. Set deadline: Week 4 for first 20, Week 5 for next 20, Week 6 for final 10
4. Establish review workflow: Writer → Editor → Expert Review → Publish

---

## Accessing the Real-Time Metrics

### Signup Counts (from Admin Dashboard)
- **URL**: `/admin/waitlist`
- **Parent Signups**: Tab "Parents" shows email, name, location, condition, date
- **Expert Applications**: Tab "Experts" shows credentials, location, specialization
- **Partnership Inquiries**: Tab "Partnerships" shows organization, interest areas
- **Export**: Click "Download CSV" to export for reporting

### What to Track Daily
1. **Parent Signups**: How many submitted forms today?
2. **Expert Applications**: How many applied today? Any verifications complete?
3. **Partnership Inquiries**: How many organizations showed interest?
4. **Response Rate**: Of those you contacted, how many responded?

### What to Report Weekly (Friday)
- Total experts contacted (vs. target of 50)
- Total experts responded (vs. target of 15)
- Total expert applications (vs. target of 5)
- Total parent signups (vs. target of 25)
- Total partnership inquiries (vs. target of 2+)
- Conversion rate: Applications / Contacted
- Next week priorities

---

## Quick Reference: Key URLs

| Purpose | URL |
|---------|-----|
| Landing Page | `/waitlist` |
| Admin Dashboard | `/admin/waitlist` |
| Expert Signup | `/waitlist` (Experts tab) |
| Parent Signup | `/waitlist` (Parents tab) |
| Partner Inquiry | `/waitlist` (Partners tab) |

---

## Critical Success Factors

### Week 2 (This Week): Setup
- [ ] All forms tested and working
- [ ] Admin dashboard showing submissions
- [ ] Supabase migration deployed
- [ ] Team access to CRMs set up
- [ ] All outreach templates finalized
- [ ] Target lists ready (150 experts, 50 parents, 15 partners)

### Week 3: Launch Outreach
- [ ] Send 50 expert emails (Expert Lead)
- [ ] Share waitlist on social (Community Lead)
- [ ] Contact 2 NGOs (Partnership Lead)
- [ ] Collect 25+ parent signups
- [ ] Receive 5+ expert applications
- [ ] Log all activity in CRMs

### Week 4+: Momentum
- Continue verified expert pipeline
- Increase parent signups
- Close first partnerships
- Publish first 20 articles
- Seed discussions with early community

---

## If Something Breaks

1. **Forms not submitting?** 
   - Check Supabase migration was deployed
   - Verify `.env` has NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
   - Test form in browser console (F12) for errors

2. **Admin dashboard shows no data?**
   - Verify form submissions show up in database
   - Check Supabase RLS policies allow authenticated reads
   - Confirm you're logged into admin dashboard

3. **Vercel build failed?**
   - Check GitHub PR for build error message
   - Fix error and push new commit
   - Rebuild should trigger automatically

4. **Need help?**
   - Check `/LAUNCH_STATUS.md` for current system status
   - Review `/WEEKLY_TRACTION_CHECKLIST.md` for execution framework
   - Reach out to technical lead

---

## Let's Go 🚀

The infrastructure is ready. The templates are ready. The CRMs are ready.

**This week: Set up and prepare.**  
**Next week: Launch outreach and measure real traction.**  

Good luck!

