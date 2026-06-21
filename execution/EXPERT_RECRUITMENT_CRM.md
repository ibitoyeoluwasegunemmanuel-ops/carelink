# Expert Recruitment CRM & Tracking System

**Purpose**: Track 150 expert targets through recruitment pipeline from identification to active participation  
**Tool**: Google Sheets or Airtable (template provided)  
**Owner**: Expert Acquisition Lead  
**Update Frequency**: Daily during active recruitment (Weeks 3-7)  

---

## CRM Pipeline Stages

### Stage 1: Identified
- Expert found via research
- Basic info: Name, specialty, location, contact
- Action: Add to CRM
- Status: Ready for outreach

### Stage 2: Contacted
- Initial email/call sent
- Contact method: Email / Phone / LinkedIn
- Date contacted: [timestamp]
- Response deadline: 7 days
- Action: Monitor for response

### Stage 3: Responded
- Expert replied with interest
- Response method: Email / Phone / Message
- Date responded: [timestamp]
- Next action: Send application form or schedule call
- Action: Send next step

### Stage 4: Application Submitted
- Expert submitted application form
- Documents provided: Yes/No
- Documents complete: Yes/No/Partial
- Missing documents: [list]
- Action: Request missing docs or start verification

### Stage 5: Verification Pending
- All documents received
- Verification started
- Verification tasks: [checklist]
- Expected completion: [date]
- Action: Complete background check, reference calls

### Stage 6: Verified
- All checks passed
- Decision: Approved / Conditional / Rejected
- Approval date: [timestamp]
- Action: Send welcome email, begin onboarding

### Stage 7: Profile Complete
- Expert completed profile
- Bio: [text]
- Photo: [link/uploaded]
- Specializations: [selected]
- Availability: [confirmed]
- Action: Invite to expert community

### Stage 8: Active
- Expert confirmed participation
- In expert WhatsApp group: Yes/No
- Launch participation confirmed: Yes/No
- Action: Maintain engagement until launch

---

## CRM Spreadsheet Structure

### Required Columns

**Basic Information**
```
1. Expert ID
   ├─ Format: EXP-001, EXP-002, etc.
   └─ Auto-generated or assigned

2. Full Name
   ├─ First name
   └─ Last name (separate columns optional)

3. Email
   ├─ Primary email
   └─ Verified: Yes/No

4. Phone
   ├─ Primary number
   └─ Verified: Yes/No

5. Specialization
   ├─ Primary: [Select from list]
   ├─ Secondary: [Select]
   └─ Tertiary: [Select]

6. Location (City)
   ├─ City name
   ├─ State/Region
   └─ Tier: [Tier 1 / Tier 2 / Tier 3]

7. Current Role/Organization
   ├─ Job title
   └─ Organization name
```

**Recruitment Pipeline**
```
8. Pipeline Stage
   ├─ Dropdown: Identified / Contacted / Responded / 
   │            Application Submitted / Verification Pending /
   │            Verified / Profile Complete / Active
   └─ Use conditional formatting to color-code stages

9. Date Added
   ├─ Format: YYYY-MM-DD
   └─ When expert entered CRM

10. Date Contacted
    ├─ Format: YYYY-MM-DD
    ├─ When first outreach happened
    └─ Blank if not yet contacted

11. Contact Method
    ├─ Dropdown: Email / Phone / LinkedIn / Referral
    └─ How expert was first reached

12. Response Status
    ├─ Dropdown: No Response / Declined / Interested / Applied
    └─ Did expert respond?

13. Response Date
    ├─ Format: YYYY-MM-DD
    └─ When expert responded

14. Days Since Last Contact
    ├─ Formula: =TODAY() - [Last Contact Date]
    └─ Auto-calculated for follow-up tracking
```

**Verification Tracking**
```
15. Application Status
    ├─ Dropdown: Not Started / In Progress / Complete / Incomplete
    └─ Has expert filled out application?

16. Documents Received
    ├─ Dropdown: None / Partial / Complete
    └─ What documents submitted?

17. License/Credential Verified
    ├─ Dropdown: Not Started / In Progress / Verified / Unable to Verify
    └─ Checked against regulatory bodies

18. Background Check
    ├─ Dropdown: Not Started / In Progress / Passed / Issues Found
    └─ Online background check status

19. References Verified
    ├─ Dropdown: Not Started / In Progress / Complete / Issues
    ├─ Reference 1: [Contacted: Yes/No, Response: Positive/Neutral/Negative]
    └─ Reference 2: [Same format]

20. Verification Decision
    ├─ Dropdown: Pending / Approved / Conditional / Rejected
    └─ Final verification result

21. Verification Date
    ├─ Format: YYYY-MM-DD
    └─ When verification completed
```

**Onboarding & Engagement**
```
22. Profile Completion Status
    ├─ Dropdown: Not Started / In Progress / Complete
    └─ Has expert filled out full profile?

23. Bio Submitted
    ├─ Yes/No
    └─ Professional biography 150+ words

24. Photo Uploaded
    ├─ Yes/No
    └─ Professional headshot

25. Specializations Selected
    ├─ Yes/No
    └─ Expert chose specializations

26. Availability Confirmed
    ├─ Yes/No / [Time frame]
    └─ Response time preference set

27. In Expert Community
    ├─ Yes/No
    └─ Added to WhatsApp group?

28. Launch Participation
    ├─ Dropdown: Confirmed / Pending / Declined
    └─ Will expert participate in launch?

29. Launch Week Status
    ├─ Dropdown: Confirmed / Notified / At Risk
    └─ Week 8 commitment status
```

**Recruitment Source & Notes**
```
30. Recruitment Channel
    ├─ Dropdown: Professional Association / Hospital / Private Practice /
    │            NGO / University / Referral / Other
    └─ Where expert was found

31. Referred By
    ├─ [Name if referral]
    └─ Who recommended this expert?

32. Notes
    ├─ Text field (optional)
    └─ Any special notes about expert

33. Follow-up Date
    ├─ Format: YYYY-MM-DD
    └─ When to follow up next

34. Assigned To
    ├─ Dropdown: [Team member names]
    └─ Who is managing this expert's recruitment?
```

---

## Weekly KPI Dashboard

### Tracking Sheet (Separate Tab)

**Weekly Metrics** (Update every Friday)

```
Week [Number]: [Date Range]

APPLICATIONS RECEIVED
├─ This week: [Number]
├─ Cumulative: [Number]
└─ Target: [Goal]

BY SPECIALIZATION (This Week / Cumulative / Target)
├─ Speech Therapists: [0/0/20]
├─ OT: [0/0/15]
├─ Psychologists: [0/0/15]
├─ Pediatricians: [0/0/15]
├─ Special Ed Teachers: [0/0/15]
├─ Physical Therapists: [0/0/10]
└─ Other: [0/0/10]

BY LOCATION (This Week / Cumulative / Target)
├─ Lagos: [0/0/30]
├─ Abuja: [0/0/20]
└─ Other Cities: [0/0/50]

VERIFICATION PROGRESS
├─ Documents Received: [Count]
├─ Verification In Progress: [Count]
├─ Verified & Approved: [Count]
├─ Conditional Approvals: [Count]
└─ Rejections: [Count]

ONBOARDING PROGRESS
├─ Profiles Complete: [Count]
├─ In Expert Community: [Count]
└─ Launch Confirmation: [Count]

PIPELINE VELOCITY
├─ Application → Verified: [Average days]
├─ Verified → Profile Complete: [Average days]
├─ Profile Complete → Active: [Average days]
└─ Total: Identified → Active: [Average days]

CONVERSION RATE
├─ Contacted → Responded: [%]
├─ Responded → Applied: [%]
├─ Applied → Verified: [%]
└─ Verified → Active: [%]

TOP RECRUITMENT CHANNELS (This Week)
├─ Channel 1: [X applications]
├─ Channel 2: [X applications]
└─ Channel 3: [X applications]

BOTTLENECKS & ISSUES
├─ Issue 1: [Description & action plan]
├─ Issue 2: [Description & action plan]
└─ Issue 3: [Description & action plan]

FORECAST TO WEEK 8 TARGET
├─ Current pace: [X experts/week]
├─ Required pace: [X experts/week]
├─ On track: Yes / At risk / Behind
└─ Action if behind: [Plan to recover]
```

---

## CRM Rules & Best Practices

### Data Entry Standards

**Required on Every Entry**
- Expert ID
- Full name
- Contact info (email & phone)
- Specialization
- Location
- Date added

**Update Frequency**
- Contacted experts: Update every 2-3 days
- Pending verification: Update daily
- Active experts: Update weekly

### Stage Transitions

**Identified → Contacted**
- ✓ Have valid email or phone
- ✓ Sent initial outreach
- ✓ Document outreach in Notes
- → Timeline: Week 3 starting

**Contacted → Responded**
- ✓ Expert replied
- ✓ Expressed interest (even tentative)
- ✓ Have response date
- → Expected timeline: 3-7 days after contact

**Responded → Application Submitted**
- ✓ Sent application form link/attachment
- ✓ Gave deadline for submission
- ✓ Send reminder if needed
- → Expected timeline: 3-5 days after contact

**Application Submitted → Verification Pending**
- ✓ Application received
- ✓ All required documents attached
- ✓ Started verification process
- → Expected timeline: Same day as submission

**Verification Pending → Verified**
- ✓ License verified
- ✓ Background check passed
- ✓ References checked (2 minimum)
- ✓ Final approval given
- → Expected timeline: 7-10 days

**Verified → Profile Complete**
- ✓ Sent welcome email with onboarding instructions
- ✓ Expert filled out full profile (bio, photo, specializations)
- ✓ Profile reviewed and approved
- → Expected timeline: 3-5 days

**Profile Complete → Active**
- ✓ Sent invite to expert community (WhatsApp)
- ✓ Expert confirmed launch participation
- ✓ Added to expert moderator list (if applicable)
- → Expected timeline: Immediate

### Data Quality Checks

**Weekly Audit**
- [ ] No duplicate entries
- [ ] All contact info valid
- [ ] All stages accurate
- [ ] No experts in "Contacted" for >2 weeks without update
- [ ] All "Verification Pending" have dates
- [ ] All "Active" have launch confirmation

---

## Sample CRM Query Views

### View 1: Ready to Contact This Week
```
Filter: Pipeline Stage = "Identified"
        Days Since Added ≤ 7
Sort: Specialization, Location
Show: Name, Email, Phone, Specialization, Recruitment Channel
Action: Review and contact these experts this week
```

### View 2: Verification Bottleneck
```
Filter: Pipeline Stage = "Verification Pending"
        Days in Stage ≥ 10
Sort: Days in Stage (descending)
Show: Name, Days in Stage, Missing Documents, Next Step
Action: Prioritize these for completion
```

### View 3: Profile Completion Needed
```
Filter: Pipeline Stage = "Verified"
        Profile Completion Status ≠ "Complete"
Sort: Verification Date (oldest first)
Show: Name, Verified Date, Days Since Verified, Status
Action: Send onboarding reminders
```

### View 4: Launch Week Confirmation Pending
```
Filter: Pipeline Stage = "Active"
        Launch Participation = "Pending"
Sort: Days Since Profile Complete
Show: Name, Phone, Email, Profile Complete Date
Action: Final confirmation calls in Week 7
```

### View 5: Geographic Distribution
```
Filter: Pipeline Stage = "Active"
Group: By Location
Count: Number of active experts per city
Show: Actual vs. Target (30/20/50)
Action: Identify underrepresented regions
```

---

## Weekly Expert Acquisition Lead Checklist

**Every Monday**
- [ ] Review "Ready to Contact" view
- [ ] Plan outreach for week (20-30 contacts)
- [ ] Assign follow-ups

**Every Wednesday**
- [ ] Check for responses to last week's outreach
- [ ] Send application forms to "Responded" experts
- [ ] Review verification status

**Every Friday**
- [ ] Update weekly KPI dashboard
- [ ] Identify bottlenecks
- [ ] Plan next week
- [ ] Report metrics to leadership

---

## KPI Targets by Week

| Week | Target Applications | Target Verified | Target Active | Notes |
|------|-------------------|-----------------|---------------|-------|
| 2 | Planning | 0 | 0 | Prep complete |
| 3 | 30 | 20 | 10 | First cohort |
| 4 | 60 | 40 | 25 | Momentum builds |
| 5 | 80 | 60 | 40 | Major push |
| 6 | 100+ | 80 | 60 | Nearing target |
| 7 | 100+ | 100 | 90+ | Finalization |
| 8 | 100+ | 100 | 100 | LAUNCH |

---

## Technical Setup (Google Sheets)

### Formulas to Include

**Column: Pipeline Stage Color**
```
=IF(F2="Identified","#FFE6E6",IF(F2="Contacted","#FFCCCC",...))
```
Automatically color-codes each row by stage for visual tracking.

**Column: Days Since Last Contact**
```
=IF(J2="","",(TODAY()-J2))
```
Highlights experts who haven't responded in 7+ days.

**Summary Tab: Total by Stage**
```
=COUNTIF(CRM!F:F,"Verified")
```
Auto-counts experts in each stage.

**Summary Tab: Conversion Rate**
```
=COUNTIF(CRM!F:F,"Verified")/COUNTIF(CRM!F:F,"Contacted")
```
Shows % of contacts who became verified experts.

---

This CRM structure enables real-time tracking of 150 expert targets through an 8-week recruitment pipeline with clear visibility into bottlenecks, conversion rates, and weekly progress toward 100 verified experts.
