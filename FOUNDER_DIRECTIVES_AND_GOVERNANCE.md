# CARELINK AFRICA - FOUNDER DIRECTIVES & EXECUTION GOVERNANCE

**Established**: June 21, 2026  
**Authority**: Founder/CEO  
**Scope**: All product, engineering, operations, partnerships  
**Binding**: Until explicitly rescinded by founder

---

## FOUNDER'S MISSION STATEMENT

```
CareLink exists to reduce the time between:

"A parent discovers their child needs help"

and

"A child receives help from a verified professional."

Every sprint, feature, partnership, and decision must shorten this gap.

If it doesn't, it's a distraction.
```

---

## THE FIVE SACRED METRICS

**Only these matter. Everything else is secondary.**

```
1. VERIFIED EXPERTS
   Definition: Expert who has created profile, submitted credentials, 
               passed verification, marked "active"
   
2. QUALIFIED PARENTS
   Definition: Parent who has created account, completed profile, 
               searched at least once, marked "active"
   
3. PARENT → EXPERT MATCHES
   Definition: Parent has viewed expert profile and expressed interest
               (clicked "book" or equivalent intent signal)
   
4. COMPLETED CONSULTATIONS
   Definition: Appointment happened, service was delivered, 
               both parties confirm completion
   
5. REVENUE
   Definition: Payment successfully processed and settled to expert account
               (CareLink commission collected)
```

### Supporting Metrics (Secondary)

These are OK to track but do NOT drive product decisions:
- User signups
- Platform visits
- Profile views
- Search queries
- Newsletter subscribers
- Social media followers

**Use these for diagnostics only. Not for decisions.**

---

## FOUNDER DIRECTIVE #1: THE FEATURE GATE

### Before ANY feature gets built:

```
┌─────────────────────────────────────────────────┐
│  QUESTION: "Will this directly improve one of  │
│  the five sacred metrics?"                      │
│                                                 │
│  YES  → Build it (or prioritize it)            │
│  NO   → Reject it (or backlog indefinitely)    │
│  MAYBE → Reject it (we can't afford "maybe")   │
└─────────────────────────────────────────────────┘
```

### Feature Gate Examples

**Request: "Add messaging between parent and expert"**
```
Impact on Metrics:
✅ Verified Experts: Higher quality matches → ↑ completion rate
✅ Qualified Parents: Can clarify needs → ↑ booking confidence
✅ Matches: Better context → ↑ match quality → ↑ booking rate
✅ Consultations: Fewer miscommunications → ↑ completion rate
✅ Revenue: More consultations → more transactions

DECISION: BUILD IT (but add to Week 2, not Week 1)
```

**Request: "Add mobile app"**
```
Impact on Metrics:
❓ Verified Experts: No impact
❓ Qualified Parents: Might help 20% of parents
❌ Matches: No impact
❌ Consultations: Minimal impact
❌ Revenue: No impact

DECISION: REJECT IT
(Build after we have 25 experts, 50 parents, proven model)
```

**Request: "Add AI therapist matching algorithm"**
```
Impact on Metrics:
❓ Verified Experts: No impact
❓ Qualified Parents: Might improve search
❓ Matches: Might improve match quality (uncertain)
❌ Consultations: Won't help until we have volume
❌ Revenue: Won't impact

DECISION: REJECT IT
(Add after 25/50/25/10 is proven. Manual matching is fine now.)
```

**Request: "Add appointment reminders"**
```
Impact on Metrics:
✅ Verified Experts: Reduces no-shows → more revenue per expert
✅ Qualified Parents: Doesn't impact them
❓ Matches: Helps fulfill existing matches
✅ Consultations: Fewer cancellations → ↑ completion rate
✅ Revenue: More consultations completed → ↑ revenue

DECISION: BUILD IT (Week 2 priority)
```

**Request: "Rebrand from CareLink to SpecialistHub"**
```
Impact on Metrics:
❌ Verified Experts: No impact
❌ Qualified Parents: No impact
❌ Matches: No impact
❌ Consultations: No impact
❌ Revenue: No impact

DECISION: REJECT IT (KILL IT)
Use these resources on things that matter.
```

### Feature Gate Decision Matrix

```
IMPACT ON        Low    Medium   High
SACRED METRICS?   ↓       ↓       ↓

EFFORT: 1-3 days  NO    MAYBE   YES → BUILD FIRST

EFFORT: 1-2 wks   NO     NO     YES → BUILD SECOND

EFFORT: 2+ wks    NO     NO     MAYBE → BUILD LAST
                                      (IF EVER)
```

**Golden Rule**: If a feature doesn't move the 5 metrics, it doesn't get built.

---

## FOUNDER DIRECTIVE #2: MANUAL BEFORE AUTOMATED

### For the first 10 consultations:

```
ACCEPTABLE:
✅ Manual matching (you hand-select which expert for parent)
✅ Manual scheduling (use calendar, email scheduling)
✅ Manual payment (stripe payment link, manual confirmation)
✅ Manual follow-up (WhatsApp, email from founder)
✅ Manual testimonial collection (personal calls/messages)

NOT ACCEPTABLE:
❌ Spending weeks building "matching algorithm" that hasn't been proven
❌ Building "automated scheduling" before we know scheduling patterns
❌ Building "payment automation" until we understand our flow

PRINCIPLE: Prove the model first. Automate after.
```

### Why Manual First?

1. **You learn the actual workflow** (not your theoretical workflow)
2. **You discover edge cases** before automating them wrong
3. **You move 10x faster** (manual doesn't have bugs)
4. **You can pivot quickly** (manual is flexible)
5. **You build trust** (founder involvement signals caring)

### Transition to Automated

```
After 10 Consultations:
├─ You understand the workflow
├─ You've discovered all edge cases
├─ You know what matters vs. what doesn't
└─ NOW automate the repetitive parts

After 25 Consultations:
├─ You have consistent patterns
├─ You understand failure modes
└─ NOW automate strategically

After 50 Consultations:
├─ Volume demands automation
├─ ROI on engineering time is clear
└─ NOW automate aggressively
```

**Corollary**: If something works manually at scale (100 consultations), 
it probably doesn't need automation. Just hire a VA for $300/month.

---

## FOUNDER DIRECTIVE #3: SUCCESS STORIES ARE PRODUCT FEATURES

### Every completed consultation must generate:

**MANDATORY COLLECTION:**

```
1. PARENT FEEDBACK
   Q: "How did this help your child?"
   Q: "Would you recommend to other parents?"
   Q: "What could improve?"

2. EXPERT FEEDBACK
   Q: "How did the parent communicate?"
   Q: "Was the platform helpful?"
   Q: "Would you book again?"

3. OUTCOME SUMMARY
   Q: "What was the main issue?"
   Q: "What did you work on?"
   Q: "What's next?"

4. TESTIMONIAL REQUEST
   Q: "Would you share your story (with permission)?"
   Q: "Can we use your name/photo?"
```

### Success Stories Become:

**GROWTH ASSETS:**
- Social media content
- Email marketing
- Website case studies
- Pitch deck proof points

**TRUST ASSETS:**
- Parent credibility (real outcomes)
- Expert credibility (real impact)
- Platform credibility (proof marketplace works)

**INVESTOR ASSETS:**
- Series A pitch deck substance
- Due diligence documentation
- Proof of product-market fit

### Success Story Template

```
STORY: [Child Name]'s Journey to Speech Clarity

CHILD: 3-year-old with speech delay
PARENT: [Parent Name]
EXPERT: [Expert Name], Speech Therapist
TIMELINE: 4 consultations over 6 weeks

THE PROBLEM:
"My son wasn't speaking clearly. I was worried but didn't know where to start."

THE SOLUTION:
"Found [Expert] on CareLink in 15 minutes. First consultation within 3 days."

THE OUTCOME:
"After 4 sessions, his speech improved dramatically. We're continuing next month."

THE QUOTE:
"CareLink saved us months of searching. This is exactly what families need."

METRICS:
✅ 4 consultations completed
✅ Child received ongoing support
✅ Parent confident in progress
✅ Expert gained returning client
✅ Revenue: $600 (4 × $100 × 15% commission = $90 to CareLink)
```

### Success Story Cadence

```
Week 1: Collect from first consultations
Week 2-4: Publish 1-2 stories per week
Month 2: Target 10-15 stories
Month 3: Target 30-40 stories
```

**Every success story is proof that CareLink works.**

---

## FOUNDER DIRECTIVE #4: WEEKLY FOUNDER DASHBOARD

### Every Sunday 11:59 PM, report only these 6 numbers:

```
┌──────────────────────────────────────────────────────┐
│        CARELINK AFRICA - WEEKLY FOUNDER REPORT       │
│                   Week of [DATE]                     │
├──────────────────────────────────────────────────────┤
│                                                      │
│ 1. VERIFIED EXPERTS:              [X]                │
│    (Week: 5 → 8 → 10 → 12 → 15...)                 │
│                                                      │
│ 2. QUALIFIED PARENTS:             [X]                │
│    (Week: 5 → 15 → 30 → 50 → 75...)                │
│                                                      │
│ 3. MATCHES GENERATED:             [X]                │
│    (Week: 0 → 10 → 25 → 50 → 80...)                │
│                                                      │
│ 4. CONSULTATIONS COMPLETED:       [X]                │
│    (Week: 0 → 1-2 → 5-8 → 15-20 → 25+...)         │
│                                                      │
│ 5. REVENUE (MONTHLY):             $[X]               │
│    (Week: $0 → $150-300 → $1,200 → $5,000+...)    │
│                                                      │
│ 6. PARTNERSHIPS SIGNED:           [X]                │
│    (Week: 0 → 1 → 3 → 5 → 8+...)                   │
│                                                      │
├──────────────────────────────────────────────────────┤
│ WEEKLY TREND:                                        │
│ 📈 On track / 📊 Slightly below / 📉 Well below   │
│                                                      │
│ BLOCKERS (if any):                                   │
│ • [Blocker 1]                                        │
│ • [Blocker 2]                                        │
│                                                      │
│ NEXT WEEK TARGETS:                                   │
│ 1. Experts: X → Y                                    │
│ 2. Parents: X → Y                                    │
│ 3. Matches: X → Y                                    │
│ 4. Consultations: X → Y                              │
│ 5. Revenue: $X → $Y                                  │
│ 6. Partnerships: X → Y                               │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Why These 6 Metrics Only?

```
VERIFIED EXPERTS:     Supply-side health
QUALIFIED PARENTS:    Demand-side health
MATCHES GENERATED:    Marketplace connection
CONSULTATIONS:        Proof of outcomes
REVENUE:             Business viability
PARTNERSHIPS:        Distribution moat
```

**Everything else is noise.**

### What This Replaces

```
❌ Burndown charts
❌ Feature checklists
❌ Engineering velocity
❌ Sprint retrospectives
❌ Vanity metrics
❌ Detailed status updates

✅ Only: Are the 6 metrics moving? YES/NO
```

---

## FOUNDER DIRECTIVE #3: THE FIRST 90 DAYS FOCUS

### DO NOT BUILD until we achieve:

```
✅ 25 Verified Experts (in database, active)
✅ 50 Qualified Parents (in database, active)
✅ 25 Matches (parents have viewed experts)
✅ 10 Completed Consultations (real service delivered)
✅ $500+ Monthly Revenue (transactions completed)
✅ First Success Stories (outcomes documented)
```

### DO NOT BUILD:

```
❌ Mobile apps (web works fine for MVP)
❌ AI assistants (manual support scales fine)
❌ Marketplace products (add after core works)
❌ Government integrations (partner layer)
❌ Advanced analytics (basic GA is enough)
❌ Marketing automation (manual campaigns work)
❌ Video consultations (phone/text is fine for now)
❌ Appointment reminders (manual follow-up works)
❌ Payment scheduling (one-time payments work)
❌ Referral bonuses (focus on organic first)
```

### DO BUILD:

```
✅ Expert profiles (mandatory for launch)
✅ Expert search (mandatory for matches)
✅ Appointment booking (mandatory for revenue)
✅ Payment processing (mandatory for revenue)
✅ Expert verification (mandatory for trust)
✅ Parent messaging (improve consultation quality)
✅ Success story collection (marketing asset)
✅ Expert earnings dashboard (keep experts happy)
✅ Parent feedback system (improve product)
```

### The Principle

```
Do the minimum viable actions to prove:
1. Parents will search
2. Experts will serve
3. Consultations happen
4. Revenue can be collected

Then add features to scale what's proven.
Not before.
```

---

## FOUNDER DIRECTIVE #5: MISSION ALIGNMENT FILTER

### Before any meeting, any sprint, any decision:

```
QUESTION: "Does this reduce the time between 
           'parent needs help' and 'child gets help'?"

YES  → Do it
NO   → Don't do it
MAYBE → Clarify until YES or NO
```

### Reducing the Gap

**Current Timeline (without CareLink):**
```
Week 1: Parent realizes child needs help
Week 2-4: Search for professionals (confusion, wrong matches)
Week 5-8: Wait for appointments (long queues)
Week 9-12: First appointment, evaluation
Week 13-20: Begin actual therapy/support
TOTAL: 13-20 weeks (3-5 months)
```

**Timeline with CareLink (mature):**
```
Day 1: Parent realizes child needs help
Day 1-2: Search on CareLink (15 minutes)
Day 2-3: Browse experts (find match, 1 hour)
Day 3: Book appointment (5 minutes)
Day 3-5: First appointment available
Day 5: First consultation happens
TOTAL: 4-5 days (versus 13-20 weeks)
```

**Target: Get from 13-20 weeks to 3-5 days**

Every feature, partnership, and workflow should move toward this.

---

## 30-DAY FOUNDER GOAL

**By July 21, 2026:**

```
✅ 10 Verified Experts
   └─ Recruited, verified, live on platform
   └─ All have at least 1 booking pending

✅ 25 Qualified Parents
   └─ Onboarded, searching, engaged
   └─ All understand how to book
   └─ All have at least 1 potential match

✅ 10 Matches Generated
   └─ Parents have viewed and shown interest
   └─ Both parties aware of connection
   └─ Ready to book

✅ 5 Completed Consultations
   └─ Service actually delivered
   └─ Feedback from both sides
   └─ Outcome documented

✅ $750+ Revenue Collected
   └─ Transactions processed
   └─ Experts paid out
   └─ Commission retained by platform

✅ First Success Stories
   └─ Parent testimonial: "This helped my child"
   └─ Expert testimonial: "This helped my practice"
   └─ Outcome documented: "Child made progress"
```

### Why These Numbers?

```
10 Experts: Large enough to show diversity
            Small enough to manage manually
            
25 Parents: Large enough to show demand
            Small enough to onboard personally
            
10 Matches: Proves supply meets demand
            Proves search works
            
5 Consultations: Proves end-to-end works
                 Proves revenue model works
                 Enough for 1-2 success stories
                 
$750 Revenue: Proof of concept
              Covers minimal infrastructure
              
Success Stories: Proof marketplace creates value
                 Marketing asset for scaling
                 Investor confidence
```

### If We Hit These:

```
✅ Marketplace is validated
✅ Product-market fit signals exist
✅ Revenue model is proven
✅ Team knows what works
✅ Series A conversations can begin
```

### If We Miss:

```
❌ Not ready to scale yet
❌ Need to iterate on product
❌ Need to improve messaging/positioning
❌ Need to deepen partnerships
❌ Continue executing until targets hit
```

---

## EXECUTION COMMITMENTS

### Week 1 (June 21-27)

```
MINIMUM VIABLE:
□ Platform live and tested
□ 5 experts verified
□ 5 parents onboarded
□ 5 possible matches identified
□ 0 consultations (but matches ready)
```

### Week 2 (June 28-July 4)

```
✅ Launch marketplace (June 30)
□ 7-8 experts active
□ 15-20 parents active
□ 30-50 possible matches
□ 1-2 consultations completed
□ $150-300 revenue
```

### Week 3-4 (July 5-18)

```
□ 12-15 experts active
□ 40-60 parents active
□ 100-150 possible matches
□ 5-8 consultations completed
□ $750-1,200 revenue
```

### Day 30 (July 21)

```
✅ 10 Verified Experts
✅ 25 Qualified Parents
✅ 10 Matches
✅ 5 Completed Consultations
✅ $750+ Revenue
✅ First Success Stories
```

---

## DECISION-MAKING FRAMEWORK

**When in doubt, ask these in order:**

```
1. Will this move the 5 metrics? (YES/NO)
   If NO → Reject it

2. Is it on the critical path to 25/50/25/10/$750? (YES/NO)
   If NO → Backlog it

3. Can we do it manually first? (YES/NO)
   If NO → Defer it (until volume requires automation)

4. Does it reduce time to consultation? (YES/NO)
   If NO → Kill it

5. Can we build it in one sprint? (YES/NO)
   If NO → Break it down or defer it
```

---

## WHAT SUCCESS LOOKS LIKE

**July 21, 2026 - 11:59 PM**

```
FOUNDER'S REPORT:

"We started with zero experts, zero parents, zero matches.

In 30 days, we built a marketplace that facilitated 5 real consultations.

5 families got connected with vetted professionals.

5 experts earned income while helping children.

5 success stories prove the model works.

$750 in revenue proves the business model works.

10 experts are ready to scale.

25 parents are searching for matches.

The marketplace is operational.

The mission is real.

Now we scale."
```

---

## FINAL FOUNDER PRINCIPLE

```
"We're not here to build a feature list.

We're here to reduce the time between 
'a parent needs help' and 'a child receives help.'

Every line of code.
Every partnership.
Every decision.
Every day.

Serves that mission.

If it doesn't, we don't do it.

That's how we win."
```

---

**Founder Directives Effective Immediately**

**Binding on:** All product, engineering, operations, partnerships, growth

**Review Date:** Every 2 weeks (first review: July 5)

**Change Authority:** Founder/CEO only

**This is the law of the land.**
