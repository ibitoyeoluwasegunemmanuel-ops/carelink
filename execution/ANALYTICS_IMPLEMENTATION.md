# Analytics Implementation Plan

**Purpose**: Track platform metrics, user behavior, and launch success  
**Timeline**: Week 1-2 setup, Week 3+ data collection  
**Owner**: Operations Lead / Analyst  
**Usage**: Weekly reporting, real-time monitoring, launch insights  

---

## Analytics Stack Recommendation

### Recommended Tools

**1. PostHog (Event Tracking & Product Analytics)**
```
Why PostHog:
├─ Open-source friendly (can self-host if needed)
├─ Event tracking at scale
├─ Session replay for debugging
├─ Feature flags for experiments
├─ Startup-friendly pricing ($0-500/month)

Use Cases:
├─ Track expert signup flow
├─ Monitor community engagement
├─ Follow user journeys
├─ Identify drop-off points
├─ Debug user issues (session replay)

Setup Time: 2-4 hours (add to Next.js)
Data Granularity: Event-level
Real-time Dashboards: Yes
```

**2. Google Analytics 4 (Acquisition & Sessions)**
```
Why GA4:
├─ Free, reliable, industry standard
├─ Website traffic insights
├─ User acquisition channels
├─ User demographics & geography
├─ Easy integration with Vercel

Use Cases:
├─ Track organic search traffic
├─ Monitor social media referrals
├─ See geographic distribution of users
├─ Understand traffic sources
├─ Page performance metrics

Setup Time: 1 hour (paste tag in Next.js)
Data Granularity: Session-level
Real-time Dashboards: Yes (limited free tier)
```

**3. Sentry (Error Monitoring & Performance)**
```
Why Sentry:
├─ Catch bugs before users report them
├─ Performance monitoring
├─ Alert on critical errors
├─ Integration with team chat
├─ Free tier adequate for startups

Use Cases:
├─ Monitor 99%+ uptime
├─ Catch API errors
├─ Track error frequency
├─ Performance monitoring
├─ Alert on failures

Setup Time: 1 hour
Data Granularity: Error/transaction level
Alerts: Automatic
```

**4. Supabase Analytics (Database & Auth)**
```
Why Supabase:
├─ Built into your database
├─ User authentication tracking
├─ API request monitoring
├─ Real-time metrics

Use Cases:
├─ Expert signup flow tracking
├─ Auth success/failure rates
├─ API performance
├─ Database query performance
├─ User retention metrics

Setup Time: Included with Supabase
Data Granularity: Transaction-level
Built-in: Yes
```

---

## Implementation Timeline

### Week 1-2: Setup Phase

**Monday (Week 1)**
```
[ ] Create PostHog account
[ ] Create Google Analytics 4 property
[ ] Create Sentry project
[ ] Create analytics dashboard (Google Sheets)
[ ] Assign analytics owner
```

**Tuesday-Wednesday (Week 1)**
```
[ ] Add PostHog SDK to Next.js app
[ ] Add Google Analytics tag to Next.js app
[ ] Add Sentry SDK to Next.js app
[ ] Configure event tracking in PostHog
[ ] Set up Supabase auth tracking
```

**Thursday-Friday (Week 1)**
```
[ ] Create PostHog dashboards
[ ] Create GA4 dashboards
[ ] Create Sentry alerts
[ ] Test all analytics collection
[ ] Train team on dashboards
[ ] Deploy to staging/production
```

**Week 2**
```
[ ] Monitor data collection
[ ] Fix any tracking gaps
[ ] Create weekly report template
[ ] Establish baseline metrics
[ ] Ready for Week 3 data collection
```

---

## Event Tracking Plan

### Events to Instrument

**User Authentication Events**

```
Event: user_signed_up
├─ Properties:
│  ├─ user_type: parent / expert / donor
│  ├─ signup_source: organic / social / partner / email
│  ├─ timestamp: [auto]
│  └─ user_id: [auto]
├─ Tracked in: Signup form submission
└─ Dashboard: Expert Recruitment + Parent Signups

Event: user_logged_in
├─ Properties:
│  ├─ user_type: [from profile]
│  ├─ login_source: email / social
│  └─ user_id: [auto]
├─ Tracked in: Auth service
└─ Dashboard: Daily Active Users

Event: email_verified
├─ Properties:
│  ├─ user_type: [from profile]
│  ├─ verification_method: email link / code
│  └─ user_id: [auto]
├─ Tracked in: Auth service
└─ Dashboard: Verification funnel
```

**Expert Directory Events**

```
Event: expert_profile_created
├─ Properties:
│  ├─ specialization: [selected]
│  ├─ location: [entered]
│  ├─ completion_status: [% complete]
│  └─ expert_id: [auto]
├─ Tracked in: Expert profile form
└─ Dashboard: Expert onboarding

Event: expert_profile_completed
├─ Properties:
│  ├─ specialization: [selected]
│  ├─ profile_quality_score: [calculated]
│  └─ expert_id: [auto]
├─ Tracked in: Profile submission
└─ Dashboard: Expert completion rate

Event: expert_profile_viewed
├─ Properties:
│  ├─ expert_id: [expert being viewed]
│  ├─ viewer_type: parent / expert / guest
│  ├─ referrer: search / directory / link
│  └─ viewer_id: [auto]
├─ Tracked in: Page load
└─ Dashboard: Expert profile engagement

Event: expert_consulted
├─ Properties:
│  ├─ expert_id: [consulted]
│  ├─ consultation_type: phone / video / in-person
│  ├─ duration: [minutes]
│  └─ parent_id: [auto]
├─ Tracked in: Consultation booking/completion
└─ Dashboard: Expert utilization
```

**Community Forum Events**

```
Event: discussion_created
├─ Properties:
│  ├─ discussion_id: [auto]
│  ├─ topic: [category selected]
│  ├─ creator_type: parent / expert / admin
│  ├─ starter_type: organic / seeded
│  └─ creator_id: [auto]
├─ Tracked in: Forum new topic
└─ Dashboard: Community activity

Event: post_created
├─ Properties:
│  ├─ discussion_id: [parent discussion]
│  ├─ post_id: [auto]
│  ├─ author_type: parent / expert
│  ├─ content_length: [character count]
│  └─ author_id: [auto]
├─ Tracked in: Forum post submission
└─ Dashboard: Engagement metrics

Event: discussion_active
├─ Properties:
│  ├─ discussion_id: [discussion]
│  ├─ activity_level: low / medium / high
│  ├─ days_since_first_post: [calculated]
│  └─ total_posts: [count]
├─ Tracked in: Daily aggregation
└─ Dashboard: Discussion health
```

**Content Consumption Events**

```
Event: article_viewed
├─ Properties:
│  ├─ article_id: [article]
│  ├─ article_title: [title]
│  ├─ article_specialization: [category]
│  ├─ time_on_page: [seconds]
│  ├─ scroll_depth: [percentage]
│  └─ user_id: [auto, or null for guests]
├─ Tracked in: Page view + scroll tracking
└─ Dashboard: Content engagement

Event: article_shared
├─ Properties:
│  ├─ article_id: [article]
│  ├─ share_method: email / social / link
│  ├─ shared_by: parent / expert
│  └─ sharer_id: [auto]
├─ Tracked in: Share button click
└─ Dashboard: Content reach

Event: faq_viewed
├─ Properties:
│  ├─ faq_id: [faq]
│  ├─ faq_category: [category]
│  ├─ time_on_page: [seconds]
│  └─ user_id: [auto or null]
├─ Tracked in: Page view
└─ Dashboard: Resource engagement
```

**Partnership & Referral Events**

```
Event: referred_by_partner
├─ Properties:
│  ├─ partner_id: [partner]
│  ├─ referral_source: email / social / link / offline
│  ├─ referred_user_type: parent / expert
│  ├─ utm_source: [tracking]
│  ├─ utm_campaign: [partner name]
│  └─ user_id: [auto]
├─ Tracked in: Sign-up source tracking
└─ Dashboard: Partnership ROI

Event: partner_link_clicked
├─ Properties:
│  ├─ partner_id: [partner]
│  ├─ link_type: expert directory / article / community
│  ├─ referrer: partner website / social / email
│  └─ user_id: [auto or null]
├─ Tracked in: Link click (UTM)
└─ Dashboard: Partner engagement
```

**Expert Moderator Events**

```
Event: expert_moderation_action
├─ Properties:
│  ├─ moderator_id: [moderator]
│  ├─ action_type: flag / approve / delete
│  ├─ content_type: discussion / post / comment
│  ├─ reason: [provided]
│  └─ timestamp: [auto]
├─ Tracked in: Moderation system
└─ Dashboard: Community health

Event: expert_response_given
├─ Properties:
│  ├─ expert_id: [expert]
│  ├─ response_type: discussion post / direct message
│  ├─ response_quality: [auto-scored]
│  ├─ time_to_respond: [hours]
│  └─ expert_id: [auto]
├─ Tracked in: Forum system
└─ Dashboard: Expert engagement
```

---

## Dashboard Structure

### PostHog Main Dashboard (Daily/Weekly Review)

```
Real-Time Metrics (Top of Page)
├─ Active users (last 24h): [#]
├─ New signups (last 24h): [#]
├─ Forum posts (last 24h): [#]
├─ Page views (last 24h): [#]
└─ Error rate (last 24h): [%]

Expert Recruitment Funnel
├─ Signups: [#]
├─ Email verified: [#]
├─ Profile started: [#]
├─ Profile completed: [#]
├─ Conversion rate: [%]

Community Activity
├─ Active discussions: [#]
├─ Posts today: [#]
├─ Average posts/discussion: [#]
├─ Moderator actions: [#]
└─ Expert responses: [#]

User Engagement
├─ Daily active users: [#]
├─ Return user rate: [%]
├─ Average session length: [# min]
├─ Pages per session: [#]
└─ Bounce rate: [%]

Traffic Sources
├─ Organic: [#] users, [% of total]
├─ Social: [#] users, [% of total]
├─ Partner referral: [#] users, [% of total]
├─ Direct: [#] users, [% of total]
└─ Email: [#] users, [% of total]
```

### Google Analytics 4 Dashboard (Weekly/Monthly Review)

```
User Acquisition
├─ New users (this week): [#]
├─ New users (last 28 days): [#]
├─ Growth rate: [#/week]
├─ By source:
│  ├─ Organic search: [#]
│  ├─ Social: [#]
│  ├─ Direct: [#]
│  ├─ Referral: [#]
│  └─ Email: [#]

Geographic Reach
├─ Top 10 countries: [List]
├─ Nigeria: [#] users
└─ Other Africa: [#] users

Page Performance
├─ Top 10 pages by views: [List]
├─ Landing pages: [# views each]
├─ Expert directory: [# views]
├─ Forum: [# views]
└─ Articles: [# views by article]

Conversion Funnels
├─ Homepage → Signup: [% conversion]
├─ Article view → Expert profile view: [% conversion]
├─ Expert profile view → Consultation: [% conversion]
└─ Guest → Login: [% conversion]
```

### Sentry Monitoring Dashboard (Real-Time)

```
Critical Metrics
├─ Site uptime: [%]
├─ Error count (last 24h): [#]
├─ Critical errors: [#]
├─ Affected users: [#]
├─ Average response time: [ms]

Top Issues
├─ Issue 1: [Error], [Frequency], [Users affected]
├─ Issue 2: [Error], [Frequency], [Users affected]
└─ Issue 3: [Error], [Frequency], [Users affected]

Performance Metrics
├─ Slowest endpoints: [List]
├─ Database query times: [Average ms]
├─ API response times: [Average ms]
└─ Frontend performance: [Lighthouse score]

Alerts Active
├─ Alert 1: [Threshold exceeded]
├─ Alert 2: [Threshold exceeded]
└─ Alert 3: [Threshold exceeded]
```

### KPI Dashboard (Google Sheets - Daily Update)

```
Core Metrics (Update Daily)
├─ Verified Experts: [#/100] [Green/Yellow/Red]
├─ Parent Signups: [#/100] [Green/Yellow/Red]
├─ Active Discussions: [#/50] [Green/Yellow/Red]
├─ Partnerships: [#/15] [Green/Yellow/Red]

Supporting Metrics
├─ Content Published: [#/70]
├─ Daily Active Users: [#]
├─ Community Engagement: [#/1000 posts]
└─ Partner Referrals: [#]
```

---

## Data Collection Checklist

### Week 3-8 Data to Collect

**Daily (Auto-collected via Events)**
```
From PostHog:
├─ New expert signups
├─ New parent signups
├─ Forum posts created
├─ Active discussions count
├─ Daily active users
├─ Expert profile completions
├─ Moderator actions

From Google Analytics:
├─ Page views
├─ New sessions
├─ Traffic sources
├─ Geographic distribution

From Sentry:
├─ Error count
├─ Error rate
├─ Critical issues
├─ Site uptime
```

**Weekly (Manual Compilation)**
```
From Event Data:
├─ Conversion rates (funnel analysis)
├─ Traffic source quality (return rate by source)
├─ Content performance (top articles, shares)
├─ Expert engagement (response rates, quality)
├─ Community health (active discussions, moderation)

From KPI Dashboard:
├─ Progress toward 4 core metrics
├─ Status color for each metric
├─ Risks and bottlenecks
├─ Next week forecast
```

**Monthly (Aggregate & Analyze)**
```
User Cohorts:
├─ Retention by signup week
├─ Retention by traffic source
├─ Expert retention (profile to active)
├─ Parent engagement trends

Content Performance:
├─ Top 10 articles
├─ Search keywords driving traffic
├─ Organic vs. promoted traffic
├─ Link/share patterns

Partnership Impact:
├─ Users by partner
├─ Referral quality (retention %)
├─ Referral conversion rate
├─ Cost per referral (if applicable)

User Behavior:
├─ Common user journeys
├─ Drop-off points
├─ Time on site trends
├─ Device/platform breakdown
```

---

## Alert Configuration

### Critical Alerts (Immediate Notification)

```
Alert: Site Uptime < 95%
├─ Trigger: 5+ minutes downtime
├─ Notification: Slack + Email
├─ Action: Immediate investigation
└─ Escalate to: Founder

Alert: Error Rate > 5%
├─ Trigger: >5% of requests failing
├─ Notification: Slack + Email
├─ Action: Immediate debugging
└─ Escalate to: Tech lead

Alert: Expert Signup Rate Drops >50%
├─ Trigger: Expert signups <5/day (if pace >10/day before)
├─ Notification: Slack
├─ Action: Investigate reason
└─ Escalate to: Expert lead
```

### Warning Alerts (Daily Review)

```
Alert: Community Activity Low
├─ Trigger: <10 posts today
├─ Notification: Slack (morning report)
├─ Action: Promote discussions, seed if needed
└─ Owner: Community lead

Alert: Expert Profile Abandonment
├─ Trigger: >20% of started profiles not completed
├─ Notification: Email daily
├─ Action: Send reminder emails
└─ Owner: Expert lead

Alert: Slow Page Load
├─ Trigger: Page load >5 seconds
├─ Notification: Slack (weekly)
├─ Action: Optimize performance
└─ Owner: Technical lead
```

---

## Privacy & Compliance

### GDPR/Privacy Considerations

```
Data Collection:
├─ Get explicit consent for analytics
├─ Anonymize where possible
├─ Don't track sensitive health info
├─ Clear privacy policy
└─ Comply with local data laws

User Rights:
├─ Right to opt-out of analytics
├─ Right to access data
├─ Right to delete account (+ analytics)
├─ Right to data portability

Implementation:
├─ Update privacy policy
├─ Add opt-out option
├─ Configure consent management
└─ Train team on data handling
```

---

## Analytics Ownership & Reporting

### Roles & Responsibilities

```
Analytics Owner (Operations Lead)
├─ Daily dashboard monitoring
├─ Daily KPI updates
├─ Weekly analysis & report
├─ Monthly deep dive
├─ Alert response
└─ Tool configuration & maintenance

Expert Acquisition Lead
├─ Daily expert signup tracking
├─ Weekly expert metrics reporting
├─ Conversion rate analysis
└─ Bottleneck identification

Community Manager
├─ Daily discussion tracking
├─ Weekly community analytics
├─ Engagement metrics
└─ Moderation impact analysis

Partnership Lead
├─ Weekly partner referral tracking
├─ Partner ROI analysis
└─ Attribution by partner

Content Manager
├─ Article performance tracking
├─ Content engagement metrics
├─ Search traffic analysis
└─ Content optimization recommendations
```

### Reporting Schedule

```
Daily (9 AM)
├─ KPI Dashboard update (4 core metrics)
├─ Alert review (any critical issues?)
├─ Status color check (Green/Yellow/Red)
└─ Owner: Operations lead

Weekly (Friday 3 PM)
├─ Full analytics review
├─ Dashboard summary
├─ Wins, risks, blockers
├─ Forecast to Week 8
└─ Owner: Analytics owner + team leads

Monthly (End of month)
├─ Comprehensive analytics report
├─ Trend analysis
├─ Cohort analysis
├─ Recommendations for Phase 2
└─ Owner: Analytics owner
```

---

## Startup Costs (Week 1-2)

```
PostHog (Event Tracking)
├─ Setup: Free
├─ Hosting: Free tier (10K events/month) or $100-200/month
├─ Cost for launch: $0 (free tier sufficient)

Google Analytics 4 (Traffic)
├─ Setup: Free
├─ Cost: $0

Sentry (Error Monitoring)
├─ Setup: Free
├─ Free tier: 50 errors/month
├─ Cost for launch: $0 (free tier sufficient)

Supabase Analytics (Built-in)
├─ Cost: Included with Supabase

Google Sheets (Dashboard)
├─ Cost: $0 (free tier, or $10/month for Drive)

Total Cost: $0-200/month
Status: Very startup-friendly
```

---

## Success Criteria

### By Week 3 (Launch of Data Collection)

```
✅ All events instrumenting properly
✅ Dashboards loading and updating
✅ Daily metrics flowing into KPI sheet
✅ Team trained on dashboards
✅ Alerts configured and responding
✅ Baseline data collection verified
```

### By Week 8 (Launch Week)

```
✅ 4 core metrics tracked accurately
✅ Real-time dashboards available
✅ Alert system active
✅ Leadership has visibility
✅ Decision-making data flowing
✅ Ready for post-launch analysis
```

---

**Analytics stack is ready to measure what matters: expert recruitment, parent engagement, community activity, and partnership success.**
