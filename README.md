# CareLink Africa 🌍

> Connecting families and caregivers of children with special needs across Africa with expert support, resources, and community.

![Status](https://img.shields.io/badge/status-in_development-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 Mission

CareLink Africa is a comprehensive platform designed to support families and caregivers of children with autism, disabilities, special needs, and developmental disorders across Africa. We connect families with verified healthcare professionals, provide evidence-based resources, and foster a supportive community.

## 🌟 Key Features

### For Families
- **Expert Directory** - Search and book appointments with verified healthcare professionals
- **Progress Tracking** - Monitor your child's milestones, therapy records, and development
- **Learning Center** - Access comprehensive guides, articles, and video resources
- **Community Forums** - Connect with other families and share experiences
- **Support Campaigns** - Create campaigns for therapy, medical, or equipment support
- **AI Care Assistant** - Get instant answers to common questions

### For Healthcare Professionals
- **Professional Profile** - Showcase qualifications, specializations, and availability
- **Appointment Management** - Manage bookings and consultations
- **Patient Management** - Maintain secure patient records and notes
- **Earnings Dashboard** - Track income and manage withdrawals

### For Donors & Volunteers
- **Campaign Support** - Fund therapy, education, and equipment for families
- **Volunteer Opportunities** - Connect your skills with families in need
- **Impact Tracking** - See the real difference your support makes

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **State Management**: Zustand
- **Email**: SendGrid

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account
- Stripe account (for payments)
- SendGrid account (for emails)

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/ibitoyeoluwasegunemmanuel-ops/carelink.git
cd carelink
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
cp .env.example .env.local
```

Add your credentials to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### 4. Database Setup
```bash
npm run db:push
```

### 5. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000 to see your app.

## 📁 Project Structure

```
carelink/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── [feature]/         # Feature pages
├── components/            # React components
│   ├── layout/            # Navbar, Footer
│   ├── home/              # Home page sections
│   ├── experts/           # Expert directory
│   ├── dashboard/         # User dashboards
│   └── common/            # Reusable components
├── lib/                   # Utilities and helpers
├── types/                 # TypeScript definitions
├── hooks/                 # Custom React hooks
├── docs/                  # Documentation
│   ├── DATABASE_SCHEMA.md
│   ├── DESIGN_SYSTEM.md
│   ├── SITEMAP.md
│   └── USER_FLOWS.md
└── public/                # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Orange/Coral (#ff8070) - Warm, welcoming
- **Secondary**: Teal (#5a9687) - Calm, trustworthy
- **Accent**: Golden (#f79454) - Highlight, energy

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (text content)

See [DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) for complete design specifications.

## 📚 Documentation

- [Database Schema](./docs/DATABASE_SCHEMA.md) - Complete database structure
- [Design System](./docs/DESIGN_SYSTEM.md) - UI/UX specifications
- [Sitemap](./docs/SITEMAP.md) - Application navigation and pages
- [User Flows](./docs/USER_FLOWS.md) - User journey maps and interactions
- [Project Guide](./CLAUDE.md) - Development guidelines

## 🔐 Authentication Flow

1. User signs up with email
2. Email verification required
3. JWT token issued
4. User completes onboarding
5. Profile type (parent/expert/donor)
6. Access to platform features

## 💳 Payment Integration

- **Stripe** for appointment payments and donations
- Webhook handling for payment updates
- Secure payment processing
- Receipt generation

## 📧 Email Integration

- **SendGrid** for transactional emails
- Welcome emails
- Appointment confirmations
- Password resets
- Campaign updates
- Donation receipts

## 🌐 Supported Languages (Future)

- English
- French
- Portuguese
- Swahili
- Yoruba
- Igbo

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Platform foundation
- ✅ Expert directory
- ✅ Appointment booking
- ✅ Community forums
- ✅ Progress tracking
- ✅ Learning resources

### Phase 2
- Mobile app (React Native)
- Video consultations
- Advanced analytics
- NGO partnerships
- Sponsorship programs

### Phase 3
- AI-powered recommendations
- Nationwide support network
- Government partnerships
- Expanded expert verification
- International expansion

## 🐛 Bug Reports

Found a bug? Please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details

## 💬 Support

- Email: support@carelinkafrica.com
- Emergency: +234 (0) XXX XXXX XXX
- Community Forums: https://carelinkafrica.com/forums

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👥 Team

- **Founder & Lead**: Emmanuel Segun Ibitoyeoluwase
- **Contributors**: [List will be updated]

## 🙏 Acknowledgments

- Families and caregivers who share their stories
- Healthcare professionals who volunteer their expertise
- Donors and volunteers supporting our mission
- Open source community for amazing tools

## 📞 Contact

- Website: https://carelinkafrica.com
- Email: support@carelinkafrica.com
- Twitter: [@CareLinkafrica](https://twitter.com/carelinkafrica)
- LinkedIn: [@CareLink Africa](https://linkedin.com/company/carelink-africa)

---

**CareLink Africa** - Supporting Families, Empowering Children, Building Community

Built with ❤️ for families across Africa
