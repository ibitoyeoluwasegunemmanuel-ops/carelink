# Partnership CRM & Tracking System

**Purpose**: Track 15 partnership targets from identification through launch activation  
**Tool**: Google Sheets or Airtable  
**Owner**: Partnership Lead  
**Update Frequency**: Weekly during active outreach (Weeks 2-8)  

---

## Partnership Pipeline Stages

### Stage 1: Prospect
- Organization identified as potential partner
- Basic research completed
- Contact person identified
- Action: Ready for initial outreach

### Stage 2: Outreach Sent
- Initial email/call made
- Contact method: Email / Phone / Referral
- Date sent: [timestamp]
- Response deadline: 1 week
- Action: Monitor for response

### Stage 3: Interested
- Organization expressed interest
- Discovery call scheduled or completed
- Potential collaboration identified
- Action: Schedule detailed discussion

### Stage 4: Exploring
- Deep dive call completed
- Mutual benefit discussed
- Partnership agreement shared
- Action: Wait for response to proposal

### Stage 5: Agreement Negotiation
- Partnership terms discussed
- Specific collaboration defined
- Agreement being finalized
- Action: Collect signatures

### Stage 6: Agreed
- Partnership agreement signed
- Launch date confirmed
- Collaboration plan finalized
- Action: Coordinate joint announcements

### Stage 7: Active
- Partnership live
- Joint content published (if applicable)
- Referral pathway active
- Action: Regular check-ins, nurture relationship

---

## CRM Spreadsheet Structure

### Required Columns

**Basic Information**
```
1. Partner ID
   ├─ Format: PAR-001, PAR-002, etc.
   └─ Auto-generated

2. Organization Name
   ├─ Full legal name
   └─ Commonly known as: [optional]

3. Organization Type
   ├─ Dropdown: NGO / Hospital / Professional Association /
   │            University / Therapy Center / School / 
   │            Individual Advocate / Other
   └─ Category for partnership tier

4. Tier
   ├─ Dropdown: Tier 1 / Tier 2 / Tier 3
   └─ Strategic importance level

5. Location
   ├─ City
   ├─ State/Region
   └─ Geographic focus

6. Contact Person
   ├─ Primary contact name
   ├─ Title/Role
   └─ Email

7. Backup Contact
   ├─ Secondary contact name
   ├─ Email/Phone
   └─ If primary unavailable
```

**Outreach Tracking**
```
8. Pipeline Stage
   ├─ Dropdown: Prospect / Outreach Sent / Interested / 
   │            Exploring / Agreement Negotiation / 
   │            Agreed / Active
   └─ Current status in partnership funnel

9. Date Identified
   ├─ Format: YYYY-MM-DD
   └─ When organization added to target list

10. Outreach Date
    ├─ Format: YYYY-MM-DD
    └─ When first contact made

11. Outreach Method
    ├─ Dropdown: Email / Phone / LinkedIn / Referral
    └─ How organization was first reached

12. Email Address
    ├─ Contact email
    └─ Verified: Yes/No

13. Phone Number
    ├─ Contact phone
    └─ Verified: Yes/No

14. Response Status
    ├─ Dropdown: No Response / Declined / Interested
    └─ Did organization respond to outreach?

15. Response Date
    ├─ Format: YYYY-MM-DD
    └─ When organization responded

16. Days Since Last Contact
    ├─ Formula: =TODAY() - [Last Contact Date]
    └─ Auto-calculated for follow-up tracking
```

**Collaboration Details**
```
17. Collaboration Focus
    ├─ Text field
    ├─ Example: "Expert directory + referrals"
    └─ Specific collaboration proposed

18. Expected Contribution - Experts
    ├─ Dropdown: Yes / No
    └─ Will they provide expert volunteers?

19. Expected Contribution - Parents/Members
    ├─ Dropdown: Yes / No
    └─ Will they promote to parents/members?

20. Expected Contribution - Content
    ├─ Dropdown: Yes / No
    └─ Will they co-create content?

21. Expected Contribution - Visibility
    ├─ Dropdown: Yes / No
    └─ Will they promote on their channels?

22. Expected Reach
    ├─ Number field
    └─ How many people do they reach?

23. Collaboration Plan
    ├─ Text field
    ├─ Specific activities
    ├─ Timeline
    └─ Deliverables

24. Agreement Status
    ├─ Dropdown: Not Started / Drafted / Sent / 
    │            Negotiating / Signed / Declined
    └─ Partnership agreement progress

25. Agreement Date
    ├─ Format: YYYY-MM-DD
    └─ When agreement signed
```

**Launch Coordination**
```
26. Joint Announcement
    ├─ Dropdown: Not Planned / Planned / Drafted / 
    │            Ready / Published
    └─ Launch day announcement

27. Joint Content
    ├─ Dropdown: Not Planned / Planned / In Progress / 
    │            Ready / Published
    └─ Co-created content status

28. Referral Pathway
    ├─ Dropdown: Not Set Up / In Progress / Live
    └─ How families flow from partner to CareLink

29. Partner Promotion
    ├─ Yes/No
    └─ Are they promoting CareLink?

30. Launch Week Status
    ├─ Dropdown: Confirmed / Notified / At Risk
    └─ Week 8 commitment
```

**Relationship Management**
```
31. Assigned To
    ├─ Dropdown: [Team member names]
    └─ Who manages this partnership?

32. Primary Contact Updated
    ├─ Format: YYYY-MM-DD
    └─ Last time contact info verified

33. Last Communication
    ├─ Format: YYYY-MM-DD
    └─ Last time we communicated

34. Next Follow-up
    ├─ Format: YYYY-MM-DD
    └─ When to reach out next

35. Relationship Health
    ├─ Dropdown: Strong / Good / Neutral / At Risk
    └─ How is relationship going?

36. Notes
    ├─ Text field
    ├─ Any important details
    ├─ Relationship notes
    └─ Special requirements
```

---

## Weekly Partnership Dashboard

### Tracking Sheet (Separate Tab)

**Weekly Metrics** (Update every Friday)

```
Week [Number]: [Date Range]

PARTNERSHIPS BY TIER (This Week / Cumulative / Target)
├─ Tier 1 Strategic: [0/0/7]
│  ├─ NGOs: [0/0/3-5]
│  ├─ Hospitals: [0/0/2-3]
│  └─ Government: [0/0/1-2]
├─ Tier 2 Content: [0/0/5]
│  ├─ Associations: [0/0/3]
│  └─ Universities: [0/0/2]
└─ Tier 3 Community: [0/0/3]

PARTNERSHIPS BY STAGE
├─ Prospect: [Count]
├─ Outreach Sent: [Count]
├─ Interested: [Count]
├─ Exploring: [Count]
├─ Agreement Negotiation: [Count]
├─ Agreed: [Count]
└─ Active: [Count]

CONVERSION FUNNEL
├─ Prospect → Interested: [%]
├─ Interested → Exploring: [%]
├─ Exploring → Agreed: [%]
└─ Agreed → Active: [%]

PIPELINE VELOCITY
├─ Outreach → Interested: [Average days]
├─ Interested → Agreed: [Average days]
├─ Agreed → Active: [Average days]
└─ Total: Prospect → Active: [Average days]

EXPECTED REACH (Cumulative)
├─ From Tier 1: [Number]
├─ From Tier 2: [Number]
├─ From Tier 3: [Number]
└─ Total: [Number]

COLLABORATION TYPES (Active Partners)
├─ Providing Experts: [Count]
├─ Providing Parent/Member Reach: [Count]
├─ Co-creating Content: [Count]
└─ Co-promoting: [Count]

PARTNERSHIPS READY FOR LAUNCH
├─ Announcement Ready: [Count]
├─ Content Ready: [Count]
├─ Referral Live: [Count]
└─ Actively Promoting: [Count]

BOTTLENECKS
├─ Issue 1: [Count in stalled stage, Action plan]
├─ Issue 2: [Count in stalled stage, Action plan]
└─ Issue 3: [Count in stalled stage, Action plan]

FORECAST TO LAUNCH (Week 8)
├─ Current pace: [X partnerships/week]
├─ Required pace: [X partnerships/week]
├─ On track: Yes / At risk / Behind
└─ Action if behind: [Recovery plan]
```

---

## Partnership Outreach Calendar

### Outreach Schedule by Week

**Week 2: Research & Planning**
- [ ] Final 15 partnership targets identified
- [ ] All contacts researched
- [ ] Pitch materials prepared

**Week 3: Tier 1 Outreach**
- [ ] Email all 5 NGOs
- [ ] Email all 3 hospitals
- [ ] Phone calls to key contacts
- Target: 50% positive response

**Week 4: Discovery Calls & Tier 2 Outreach**
- [ ] Calls with 8-10 Tier 1 interested partners
- [ ] Propose specific collaboration
- [ ] Email all 5 professional associations
- [ ] Email all 3 universities
- Target: 5-6 Tier 1 moving forward

**Week 5: Partnership Formalization & Tier 3 Outreach**
- [ ] Send agreements to confirmed Tier 1 partners
- [ ] Finalize Tier 1 partnerships (5-7 confirmed)
- [ ] Follow up with Tier 2 partners
- Target: 5-7 Tier 1 + 4-5 Tier 2 interested

**Week 6: Tier 2 & 3 Completion**
- [ ] Finalize 4-5 Tier 2 partnerships
- [ ] Contact 8-10 Tier 3 targets
- [ ] Target: 6-8 Tier 3 interested

**Week 7: Final Push & Launch Prep**
- [ ] Finalize all Tier 3 partnerships
- [ ] All 15 agreements signed
- [ ] Joint announcements drafted
- [ ] Confirm launch participation

**Week 8: Launch Activation**
- [ ] Joint announcements published
- [ ] Referral pathways active
- [ ] Partner promotion begins
- [ ] Launch week coordination

---

## Partnership Follow-up Tracking

### Follow-up Schedule Rules

**If No Response in 3 Days**
- Send follow-up email
- Note in CRM
- Update next follow-up: +3 days

**If No Response in 7 Days**
- Make phone call
- Note response
- Update stage (Declined or Interested)

**If Interested but No Action in 5 Days**
- Send partnership brief
- Request timeline for response
- Update next follow-up: +3 days

**If Agreement Sent but No Response in 7 Days**
- Send reminder email
- Offer to answer questions
- Update next follow-up: +5 days

**If Agreed but No Launch Participation Confirmed in Week 7**
- Final confirmation call
- Clarify launch timing and expectations
- Ensure promotional plan is ready

---

## Partnership Agreement Checklist

For each partnership, confirm:

```
MUTUAL COMMITMENT
☐ Partner will promote CareLink to their network
☐ Partner will refer families/patients
☐ Partner will participate in collaboration
☐ CareLink will feature partner on website
☐ CareLink will co-create content
☐ CareLink will provide value exchange [specific]

COLLABORATION DETAILS
☐ Specific activities defined
☐ Timeline established
☐ Deliverables clear
☐ Communication frequency set (monthly check-in)
☐ Success metrics defined

LAUNCH COORDINATION
☐ Partner aware of launch date (Week 8)
☐ Joint announcement plan discussed
☐ Partner promotional plan confirmed
☐ Expected reach quantified
☐ Launch week activities scheduled

DOCUMENTATION
☐ Agreement signed by both parties
☐ Signed copy stored in Drive
☐ Copy sent to partner
☐ Confirmed receipt
```

---

## Partnership Relationship Management

### Monthly Check-In Template (Starting Week 9)

For each active partner, conduct monthly check-in:

```
PARTNERSHIP CHECK-IN CALL

Partner: [Name]
Date: [YYYY-MM-DD]
Participants: [Names]

PROGRESS REVIEW
├─ Collaboration on track: Yes/No
├─ Joint activities completed: [List]
├─ Referrals sent: [Count] families/patients
├─ Impact: [Qualitative feedback]

CHALLENGES
├─ Issue 1: [Description, Solution]
├─ Issue 2: [Description, Solution]
└─ Issue 3: [Description, Solution]

NEXT MONTH PLAN
├─ Activities scheduled: [List]
├─ Expected outcomes: [Quantified]
└─ Support needed: [Any assistance from CareLink?]

RELATIONSHIP HEALTH
├─ Overall satisfaction: [1-10]
├─ Renewal likelihood: Yes/Maybe/No
└─ Expansion potential: [Describe]

NOTES
├─ Anything else discussed
└─ Follow-up items: [List with due dates]
```

---

## Partnership Status Reports

### Weekly Status for Leadership

**Report Template** (Every Friday)

```
PARTNERSHIP PROGRAM - WEEK [X] STATUS

SUMMARY
├─ Total partnerships in pipeline: [X]
├─ Active partnerships: [X]
├─ New this week: [X]
└─ Status: On track / At risk / Behind

BY TIER
├─ Tier 1: [X/7 target] (NGC, Hospitals, Gov)
├─ Tier 2: [X/5 target] (Associations, Universities)
└─ Tier 3: [X/3 target] (Community, Therapy)

WINS THIS WEEK
├─ Partnership 1 signed
├─ Partnership 2 moved to agreement stage
└─ Partnership 3 discovery call scheduled

BOTTLENECKS
├─ [Partnership]: [Issue], [Solution], [ETA to resolve]
└─ [Partnership]: [Issue], [Solution], [ETA to resolve]

FORECAST
├─ On pace for [X] partnerships by launch
├─ On track to hit 15-partnership target: Yes/No
└─ Action if behind: [Recovery plan]

NEXT WEEK PRIORITIES
├─ [ ] Priority 1
├─ [ ] Priority 2
└─ [ ] Priority 3
```

---

## CRM Rules & Best Practices

### Data Entry Standards

**Required on Every Entry**
- Partner ID
- Organization name
- Organization type
- Tier
- Location
- Contact person & email
- Pipeline stage
- Date added

**Update Frequency**
- Active outreach: Every 2-3 days
- Negotiating: Every 2-3 days
- Agreed: Weekly
- Active: Weekly

### Stage Transition Rules

**Prospect → Outreach Sent**
- ✓ Contact person identified
- ✓ Outreach email drafted
- ✓ Sent via email (CC partner lead)
- → Timeline: Week 2-3

**Outreach Sent → Interested**
- ✓ Organization responded
- ✓ Expressed interest (any level)
- ✓ Have response date
- → Timeline: 3-7 days after outreach

**Interested → Exploring**
- ✓ Discovery call scheduled and completed
- ✓ Introduced CareLink mission
- ✓ Understood partner's needs
- ✓ Proposed collaboration
- → Timeline: Week 4

**Exploring → Agreement Negotiation**
- ✓ Sent partnership agreement
- ✓ Discussed terms with partner
- ✓ Awaiting partner feedback
- → Timeline: Week 5

**Agreement Negotiation → Agreed**
- ✓ Agreement signed by both parties
- ✓ Signed copy stored
- ✓ Partner confirmed receipt
- ✓ Launch participation confirmed
- → Timeline: Week 5-6

**Agreed → Active**
- ✓ Joint announcement published (or scheduled)
- ✓ Collaboration activities begun
- ✓ Referral pathway live
- ✓ Partner actively promoting
- → Timeline: Week 8

### Data Quality Checks

**Weekly Audit**
- [ ] No duplicate entries
- [ ] All contact info accurate
- [ ] All stages reflect current status
- [ ] No partnerships in "Outreach Sent" for >10 days
- [ ] All "Exploring" have discovery call date
- [ ] All "Agreed" have signature date
- [ ] All "Active" have launch confirmation

---

## Query Views

### View 1: Ready to Contact This Week
```
Filter: Stage = "Prospect"
        Days Since Added ≤ 7
Sort: Tier, Location
Show: Organization, Contact, Type, Tier
Action: Contact these organizations
```

### View 2: Waiting for Response
```
Filter: Stage = "Outreach Sent" OR "Exploring"
        Days Since Contact ≥ 5
Sort: Days Since Contact (descending)
Show: Organization, Contact, Days Waiting
Action: Send follow-up
```

### View 3: Ready to Sign
```
Filter: Stage = "Agreement Negotiation"
        Days Since Agreement Sent ≥ 5
Sort: Tier
Show: Organization, Days Waiting, Status
Action: Follow up on signatures
```

### View 4: Launch Week Checklist
```
Filter: Stage = "Agreed" OR "Active"
Sort: Tier, Launch Status
Show: Organization, Launch Status, Announcement Ready,
      Content Ready, Referral Live
Action: Finalize launch coordination
```

### View 5: Geographic Distribution
```
Filter: Stage = "Active"
Group: By Location
Count: Number of partnerships per city
Action: Identify partnership gaps
```

---

## Partnership Lead Weekly Checklist

**Every Monday**
- [ ] Review partnerships in "Outreach Sent" stage
- [ ] Send follow-ups for any >5 days without response
- [ ] Review "Exploring" stage for negotiation readiness

**Every Wednesday**
- [ ] Follow up on unsigned agreements
- [ ] Check on discovery calls scheduled
- [ ] Identify any bottlenecks

**Every Friday**
- [ ] Update partnership dashboard
- [ ] Calculate weekly metrics
- [ ] Report to leadership
- [ ] Plan next week outreach

---

## KPI Targets by Week

| Week | Target New | Target Interested | Target Agreed | Target Active |
|------|-----------|------------------|--------------|--------------|
| 2 | 0 | 0 | 0 | 0 |
| 3 | 8 | 4 | 0 | 0 |
| 4 | 8 | 8 | 2 | 0 |
| 5 | 4 | 10 | 5 | 2 |
| 6 | 3 | 11 | 9 | 5 |
| 7 | 2 | 11 | 15 | 10 |
| 8 | 0 | 11 | 15 | 15 |

---

This partnership tracking system enables real-time management of 15 partnership targets through a 6-week pipeline with clear visibility into collaboration status, launch readiness, and expected reach.
