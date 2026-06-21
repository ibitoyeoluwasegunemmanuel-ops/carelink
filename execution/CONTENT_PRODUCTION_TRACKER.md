# Content Production Tracker

**Purpose**: Track 50 articles, 20 FAQs, 50 discussion starters through production pipeline  
**Tool**: Google Sheets or Airtable  
**Owner**: Content Manager / Editor-in-Chief  
**Update Frequency**: Daily during active production (Weeks 3-7)  

---

## Content Pipeline Stages

### Stage 1: Planned
- Article topic assigned
- Brief created
- Writer assigned
- Action: Writer begins research

### Stage 2: In Progress
- Writer actively drafting
- Research completed
- First draft 50%+ complete
- Action: Monitor progress

### Stage 3: Draft Submitted
- First draft completed
- Submitted to editor
- Awaiting editorial review
- Action: Editorial feedback

### Stage 4: Editorial Review
- Editor reviewing draft
- Checking structure, flow, clarity
- Adding feedback comments
- Action: Return to writer with notes

### Stage 5: Revision In Progress
- Writer incorporating feedback
- Addressing editor comments
- Resubmitting revised draft
- Action: Expert review

### Stage 6: Expert Review
- Expert reviewer reading
- Fact-checking content
- Adding professional perspective
- Action: Return to writer with notes

### Stage 7: Final Revision
- Writer incorporating expert feedback
- Making final polish
- Submitting final version
- Action: Copy editing

### Stage 8: Copy Editing
- Copy editor reviewing
- Grammar, clarity, formatting
- Mobile optimization check
- Action: Approve for publishing

### Stage 9: Published
- Live on website
- Social media scheduled
- Email announcement queued
- Action: Monitor engagement

---

## Content Production Spreadsheet Structure

### Required Columns

**Basic Information**
```
1. Content ID
   ├─ Format: ART-001, FAQ-001, DIS-001
   └─ Identifies article/FAQ/discussion

2. Content Type
   ├─ Dropdown: Article / FAQ / Discussion Starter
   └─ Type of content

3. Title
   ├─ Full article title
   └─ Keep under 70 characters for SEO

4. Topic/Number
   ├─ Reference to topic list
   ├─ Example: "Autism #1" or "FAQ #5"
   └─ Links to content strategy doc

5. Specialization/Category
   ├─ Autism / ADHD / Down Syndrome / Cerebral Palsy /
   │  Speech Disorders / General Special Needs
   └─ For organization and tracking
```

**Production Pipeline**
```
6. Pipeline Stage
   ├─ Dropdown: Planned / In Progress / Draft Submitted /
   │            Editorial Review / Revision In Progress /
   │            Expert Review / Final Revision /
   │            Copy Editing / Published
   └─ Current status

7. Date Created
   ├─ Format: YYYY-MM-DD
   └─ When content added to tracker

8. Assigned Writer
   ├─ Dropdown: [Writer names]
   └─ Who is writing this?

9. Due Date (First Draft)
   ├─ Format: YYYY-MM-DD
   └─ When first draft due

10. Draft Submitted Date
    ├─ Format: YYYY-MM-DD
    └─ When writer submitted first draft

11. Days Since Assigned
    ├─ Formula: =TODAY() - [Assigned Date]
    └─ How long in progress?

12. Days to Deadline
    ├─ Formula: =[Due Date] - TODAY()
    └─ Negative = overdue
```

**Editorial Review**
```
13. Editor Assigned
    ├─ Dropdown: [Editor name]
    └─ Editor-in-Chief

14. Editorial Review Started
    ├─ Format: YYYY-MM-DD
    └─ When editor began reviewing

15. Editorial Issues
    ├─ Text field
    ├─ Example: "Restructure intro, simplify medical jargon"
    └─ Key feedback points

16. Editorial Review Complete
    ├─ Format: YYYY-MM-DD
    └─ When feedback returned to writer
```

**Expert Review**
```
17. Expert Reviewer
    ├─ Dropdown: [Expert names]
    └─ Which expert is reviewing?

18. Expert Review Status
    ├─ Dropdown: Not Started / In Progress / Complete / Issue Found
    └─ Status of expert review

19. Expert Issues
    ├─ Text field
    ├─ Accuracy concerns
    ├─ Evidence questions
    └─ Recommendations

20. Expert Review Complete
    ├─ Format: YYYY-MM-DD
    └─ When expert feedback provided

21. Expert Approval
    ├─ Dropdown: Approved / Conditional / Not Approved
    └─ Does expert approve publishing?
```

**Final Production**
```
22. Copy Editor Assigned
    ├─ Dropdown: [Copy editor name]
    └─ Who is copy editing?

23. Copy Edit Started
    ├─ Format: YYYY-MM-DD
    └─ When copy editor began

24. Copy Edit Issues
    ├─ Text field
    ├─ Grammar fixes
    ├─ Formatting notes
    └─ Mobile optimization

25. Copy Edit Complete
    ├─ Format: YYYY-MM-DD
    └─ When final proofs complete

26. SEO Keywords
    ├─ Text field
    ├─ 3-5 target keywords
    └─ For search optimization

27. SEO Slug
    ├─ Text field
    ├─ URL-friendly slug
    ├─ Example: /articles/autism-diagnosis
    └─ Final URL path
```

**Publishing & Distribution**
```
28. Publication Status
    ├─ Dropdown: Not Published / Scheduled / Live / Featured
    └─ Publishing status

29. Published Date
    ├─ Format: YYYY-MM-DD
    └─ When article went live

30. Content URL
    ├─ Link field
    └─ Full URL to published content

31. Social Media Scheduled
    ├─ Yes/No
    └─ Has social post been scheduled?

32. Email Announcement Scheduled
    ├─ Yes/No
    └─ Has email been queued?

33. Featured
    ├─ Yes/No
    └─ Is this featured/promoted?
```

**Tracking & Notes**
```
34. Word Count
    ├─ Number field
    ├─ Target: 1,200-1,500 (articles)
    │         300-500 (FAQs)
    │         200 (discussions)
    └─ Actual count

35. Days in Production
    ├─ Formula: =TODAY() - [Date Created]
    └─ Total time from creation to publish

36. Quality Score
    ├─ Scale: 1-10
    ├─ Based on expert feedback & editorial notes
    └─ Track content quality

37. Notes
    ├─ Text field
    ├─ Any special requirements
    ├─ Revisions needed
    └─ Next steps
```

---

## Weekly Content Dashboard

### Tracking Sheet (Separate Tab)

**Weekly Metrics** (Update Daily, Summary Friday)

```
Week [Number]: [Date Range]

ARTICLES (50 Total)
├─ Phase 1 (Articles 1-20)
│  ├─ Planned: 20
│  ├─ In Progress: [#]
│  ├─ Draft Submitted: [#]
│  ├─ In Review: [#]
│  ├─ Published: [#]
│  └─ Status: Week [target]
├─ Phase 2 (Articles 21-40)
│  ├─ Planned: 20
│  ├─ In Progress: [#]
│  ├─ Published: [#]
│  └─ Status: Week [target]
└─ Phase 3 (Articles 41-50)
   ├─ Planned: 10
   ├─ In Progress: [#]
   └─ Status: Week [target]

FAQs (20 Total)
├─ Planned: 20
├─ In Progress: [#]
├─ Draft Submitted: [#]
├─ In Review: [#]
├─ Published: [#]
└─ Target: All done Week 6

DISCUSSIONS (50 Total)
├─ Planned: 50
├─ Drafted: [#]
├─ In Review: [#]
├─ Ready to Seed: [#]
└─ Target: All ready Week 7

PRODUCTION VELOCITY
├─ Average articles/day this week: [#]
├─ Average days in production: [#] days
├─ Average editorial revisions: [#]
└─ Average review time: [#] days

PHASE PROGRESS
├─ Phase 1: [#%] complete
├─ Phase 2: [#%] complete
├─ Phase 3: [#%] complete
└─ Overall: [#%] complete

BOTTLENECKS
├─ Issue 1: [Stage], [Count], [Action]
├─ Issue 2: [Stage], [Count], [Action]
└─ Issue 3: [Stage], [Count], [Action]

WRITER PRODUCTIVITY
├─ Writer 1: [# articles in progress]
├─ Writer 2: [# articles in progress]
├─ Writer 3: [# articles in progress]
└─ Average per writer: [#] articles

REVIEWER STATUS
├─ Expert Reviewer 1: [# in queue]
├─ Expert Reviewer 2: [# in queue]
├─ Expert Reviewer 3: [# in queue]
└─ Total in expert review: [#]

FORECAST TO PUBLICATION
├─ Phase 1 done: Week [target]
├─ Phase 2 done: Week [target]
├─ Phase 3 done: Week [target]
├─ All FAQs done: Week [target]
└─ On track: Yes / No
```

---

## Content Production Workflow

### Week 3: Phase 1 (Articles 1-20) Writing Sprint

```
Monday-Friday
├─ Writer 1: Begin writing Articles 1-10
├─ Writer 2: Begin writing Articles 11-15
├─ Writer 3: Begin writing Articles 16-20
└─ Target: All 20 first drafts submitted Friday EOD

Friday EOD
├─ All 20 drafts submitted
├─ Editor begins review
└─ Transition: Editorial feedback -> Writer revisions
```

### Week 4: Phase 1 Publishing + Phase 2 Writing

```
Monday-Wednesday
├─ Articles 1-20: Editor feedback -> Writer revisions
├─ Writer 3: Researching Phase 2 articles
└─ Expert reviewer: Beginning Phase 1 reviews

Wednesday-Friday
├─ Phase 1: Expert reviews + writer final edits
├─ Phase 2 Writers: Drafting Articles 21-40
├─ Copy editor: Preparing Phase 1 for publishing
└─ Articles 1-10: Ready to publish by Friday

Friday
├─ Articles 1-10 published
└─ Phase 1 publishing begins
```

### Week 5: Phase 2 Publishing + Phase 3 Writing + FAQs

```
Monday-Tuesday
├─ Phase 1: Articles 11-20 published
├─ Phase 2: Articles 21-40 in editorial review
└─ FAQs: Editor drafting all 20 FAQs

Wednesday-Thursday
├─ Phase 2: Writer revisions & expert review
├─ FAQs: Expert review of all 20
├─ Phase 3: Writers drafting Articles 41-50
└─ Discussions: Editor drafting all 50

Friday
├─ Phase 2: Articles 21-40 published (all of Phase 2)
├─ FAQs: Ready for copy editing
└─ Discussions: Drafted and ready
```

### Week 6: All Content Published & Optimized

```
Monday-Tuesday
├─ Phase 3: Expert review of Articles 41-50
├─ FAQs: Copy editing + publishing
└─ Discussions: Formatted for platform

Wednesday-Thursday
├─ Phase 3: Articles 41-50 published
├─ All FAQs live
├─ Discussions: Ready to seed in Week 7
└─ SEO optimization begins

Friday
├─ All 70 pieces live (50 articles + 20 FAQs)
├─ Discussions ready
└─ SEO optimization continues into Week 7
```

### Week 7: Final Optimization & Preparation

```
Monday-Friday
├─ SEO optimization (all pieces)
├─ Internal linking review
├─ Mobile responsiveness testing
├─ Social media calendar creation
├─ Email newsletter content prep
└─ Partner sharing prep

Friday
├─ All content SEO optimized
├─ All content ready for launch
└─ Promotion schedule finalized
```

---

## Daily Content Manager Tasks

### Every Weekday During Production (Weeks 3-7)

**Morning Update (9 AM)**
```
[ ] Review overnight submissions
[ ] Check writer progress on deadline articles
[ ] Identify articles at risk of missing deadline
[ ] Flag any blockers or issues
[ ] Update spreadsheet with overnight changes
```

**Midday Check (12 PM)**
```
[ ] Check editorial review progress
[ ] Ensure expert reviewers have materials
[ ] Follow up on missing reviews
[ ] Check for new submissions
[ ] Answer writer questions
```

**End of Day (5 PM)**
```
[ ] Update all pipeline stages
[ ] Check for completed reviews
[ ] Flag articles ready for next stage
[ ] Note any bottlenecks
[ ] Plan tomorrow's priorities
[ ] Prepare status for leadership
```

### Weekly Content Manager Checklist

**Every Friday**

```
[ ] Update content dashboard with weekly metrics
[ ] Calculate phase completion percentages
[ ] Identify top bottlenecks
[ ] Plan next week's assignments
[ ] Check forecast for on-time completion
[ ] Report status to leadership
[ ] Identify any articles at risk
[ ] Plan contingencies if behind
```

---

## Quality Checkpoints

### Before Submission to Editorial

**Writer Pre-Submission Checklist**
```
[ ] Word count: 1,200-1,500 (or target for content type)
[ ] Title: Clear, benefit-oriented, under 70 characters
[ ] Structure: Intro, 3-4 body sections, expert insight, action steps, resources
[ ] Content: Evidence-based, accurate, no medical claims without evidence
[ ] Tone: Warm, empathetic, non-judgmental, actionable
[ ] Grammar: Spell-checked, no obvious errors
[ ] Formatting: Proper headers, short paragraphs, good flow
[ ] Expert perspective: Included with attribution
[ ] Action steps: Clear, numbered, realistic
[ ] Resources: Listed with links (if applicable)
[ ] Ready for: Editorial review
```

### Before Submission to Expert Review

**Editor Pre-Expert Checklist**
```
[ ] Structure: Logical flow, clear headers
[ ] Clarity: No jargon without explanation
[ ] Tone: Appropriate empathy and professionalism
[ ] Completeness: Covers main topic thoroughly
[ ] Actionability: Practical advice included
[ ] Accuracy: No obvious factual errors
[ ] Length: Within target word count
[ ] Formatting: Consistent with style guide
[ ] Ready for: Expert review
```

### Before Copy Editing

**Expert Pre-Copy Checklist**
```
[ ] Accuracy: All medical facts verified
[ ] Evidence: Claims are evidence-based
[ ] Completeness: Nothing critical missing
[ ] Safety: No harmful recommendations
[ ] Tone: Appropriate for parent audience
[ ] Quality: Well-written, clear
[ ] Ready for: Copy editing
```

### Before Publishing

**Copy Editor Final Checklist**
```
[ ] Grammar: No errors
[ ] Spelling: All correct
[ ] Punctuation: Consistent and correct
[ ] Style: Consistent with brand
[ ] Formatting: Headers, bold, italics correct
[ ] Links: All functional, properly formatted
[ ] Images: Alt text present, properly sized
[ ] Mobile: Responsive, readable on mobile
[ ] SEO: Meta description, keywords, structure
[ ] Ready for: Publishing
```

---

## Production Status Reports

### Daily Status (To Leadership)

```
Date: [YYYY-MM-DD]

PROGRESS TODAY
├─ New submissions: [#] articles
├─ Reviews completed: [#] articles
├─ Published: [#] articles
└─ Current pace: On track / Slightly behind / Behind

PIPELINE STATUS
├─ In progress: [#]
├─ In review: [#]
├─ Ready to publish: [#]
└─ Published: [#]

BOTTLENECKS
├─ [Issue 1]: [Stage], [# affected], [Action]
└─ [Issue 2]: [Stage], [# affected], [Action]

FORECAST
├─ Week [target]: All Phase [X] published
└─ On track: Yes / No
```

### Weekly Summary (Friday)

```
Week [Number]: [Date Range]

SUMMARY
├─ Articles published: [#/target]
├─ Articles in progress: [#]
├─ Overall progress: [#%]
└─ Status: On track / At risk / Behind

BY PHASE
├─ Phase 1: [Status]
├─ Phase 2: [Status]
└─ Phase 3: [Status]

TEAM PRODUCTIVITY
├─ Writer 1: [# articles this week]
├─ Writer 2: [# articles this week]
├─ Writer 3: [# articles this week]
├─ Editor: [# reviewed this week]
└─ Copy editor: [# edited this week]

QUALITY METRICS
├─ Average quality score: [#/10]
├─ Expert issues found: [#]
├─ Editorial revisions required: [#]
└─ Copy issues found: [#]

WINS THIS WEEK
├─ [ ] [Achievement 1]
├─ [ ] [Achievement 2]
└─ [ ] [Achievement 3]

RISKS NEXT WEEK
├─ Risk 1: [Description, Mitigation]
└─ Risk 2: [Description, Mitigation]

FORECAST
├─ All content published by: Week [target]
├─ On track: Yes / No
└─ If behind: [Recovery plan]
```

---

## CRM Query Views

### View 1: This Week's Deadlines
```
Filter: Due Date = This Week AND Stage ≠ "Published"
Sort: Due Date (ascending)
Show: Title, Writer, Current Stage, Due Date
Action: Follow up on at-risk articles
```

### View 2: In Expert Review > 5 Days
```
Filter: Expert Review Status = "In Progress"
        Days in Expert Review ≥ 5
Sort: Days in Expert Review (descending)
Show: Title, Expert, Days in Review
Action: Prioritize these reviews
```

### View 3: Ready to Publish
```
Filter: Copy Edit Complete = [Date]
        Pipeline Stage = "Copy Editing"
Sort: Copy Edit Complete (oldest first)
Show: Title, SEO Slug, URL
Action: Publish these articles
```

### View 4: Phase Progress
```
Filter: By Topic (Phase 1, 2, 3)
Count: By Pipeline Stage
Show: Total in each phase by stage
Action: Track phase progress
```

### View 5: Quality Concerns
```
Filter: Quality Score < 7 OR Expert Issues > 0
Sort: Quality Score (lowest first)
Show: Title, Quality Score, Issues
Action: Review quality concerns
```

---

## Content Deadlines Reference

| Phase | Week | First Draft | Editorial | Expert Review | Copy Edit | Publish |
|-------|------|------------|-----------|---------------|-----------|---------|
| 1     | 3    | Fri EOD    | Mon-Wed   | Wed-Thu       | Thu-Fri   | Fri     |
| 2     | 4    | Fri EOD    | Mon-Wed   | Wed-Thu       | Thu-Fri   | Fri     |
| 3     | 5    | Tue EOD    | Tue-Wed   | Wed-Thu       | Thu-Fri   | Fri     |
| FAQs  | 5    | Mon EOD    | Mon-Tue   | Tue-Wed       | Wed-Fri   | Fri     |
| Disc  | 5    | Tue EOD    | Tue-Wed   | Wed       | Wed-Fri   | Fri     |

---

## Contingency Plans

### If Writer Missing Deadline
```
Trigger: Writer hasn't submitted draft by 24 hours before deadline
Action:
├─ Manager emails + calls writer
├─ Assess completion status
├─ If <50% done: Reassign to backup writer
├─ If >50% done: Give 24-hour extension, expedite review
└─ Document delay reason
```

### If Expert Review Taking Too Long
```
Trigger: Expert review >5 days without response
Action:
├─ Manager sends reminder
├─ If still no response: Assign to backup expert
├─ Continue editorial process while waiting
├─ Incorporate expert feedback when received
└─ Document delay
```

### If Copy Editor Overwhelmed
```
Trigger: >10 articles waiting for copy editing
Action:
├─ Prioritize articles scheduled to publish first
├─ Offer copy editing to second editor (if available)
├─ Simplify copy editing scope for non-critical articles
├─ Extend timeline by 1-2 days if needed
└─ Maintain quality standards
```

### If Behind Schedule
```
Trigger: <75% of phase complete by week target
Action:
├─ Assess which stage is bottleneck
├─ Fast-track reviews (increase resources)
├─ Reduce scope if necessary (higher priority articles first)
├─ Expedite publishing (reduce optimization if needed)
├─ Communicate revised timeline to leadership
└─ Maintain quality standards regardless
```

---

This content production tracker enables daily monitoring of 70+ pieces of content through a multi-stage production pipeline with clear visibility into bottlenecks, quality, and on-time completion.
