# CareLink Africa - Project Documentation

## Project Overview

CareLink Africa is a comprehensive platform supporting families and caregivers of children with special needs across Africa. The platform connects families, healthcare professionals, educational resources, and community support systems.

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Backend**: Node.js API (Vercel Functions)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payment**: Stripe
- **Storage**: Supabase Storage
- **Email**: SendGrid

## Project Structure

```
carelink/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── [feature]/           # Feature-specific pages
├── components/              # React components
│   ├── layout/              # Layout components
│   ├── home/                # Home page components
│   ├── experts/             # Expert directory components
│   ├── dashboard/           # Dashboard components
│   ├── forms/               # Form components
│   └── common/              # Reusable components
├── lib/                     # Utility libraries
│   ├── api.ts              # API client
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Helper functions
├── types/                   # TypeScript types
├── hooks/                   # Custom React hooks
├── public/                  # Static assets
├── styles/                  # Additional CSS
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Key Features

### 1. Expert Directory
- Search and filter healthcare professionals
- Book appointments
- View ratings and reviews
- Expert verification system

### 2. Community Forums
- Discussion groups
- Support forums
- Question and answer sections
- Moderation system

### 3. Conditions Directory
- Comprehensive guides for 12+ conditions
- Symptoms, diagnosis, treatment options
- Expert recommendations

### 4. Learning Center
- Articles and guides
- Video resources
- Parenting tips
- Diagnosis information

### 5. Child Profile & Progress Tracking
- Child information management
- Therapy records
- Milestone tracking
- Progress reports
- Appointment history

### 6. Donation & Support System
- Financial donations
- Equipment donations
- Volunteer registration
- Campaign management

### 7. Campaign System
- Families can create support campaigns
- Accept multiple donation types
- Track campaign progress

### 8. AI Care Assistant
- Answer common questions
- Personalized guidance
- Resource recommendations

## Database Schema

### Core Tables
- users (authentication & profiles)
- child_profiles (child information)
- experts (healthcare professionals)
- conditions (condition database)
- appointments (booking system)
- forums (discussion system)
- campaigns (support campaigns)
- donations (donation records)
- progress_tracking (milestones & therapy records)

## Development Workflow

1. **Setup**: Install dependencies with `npm install`
2. **Environment**: Copy `.env.example` to `.env.local` and add credentials
3. **Development**: Run `npm run dev` to start development server
4. **Database**: Use Supabase dashboard or migrations for database changes
5. **Testing**: Run `npm run test` for test suite
6. **Build**: Run `npm run build` for production build

## Authentication Flow

1. User signs up with email
2. Email verification via Supabase
3. JWT token issued
4. User redirected to onboarding
5. Complete profile (parent/expert)
6. Access to platform features

## Color Scheme

- **Primary**: Orange/Coral (#ff8070) - Warm, welcoming
- **Secondary**: Teal/Green (#5a9687) - Calming, trustworthy
- **Accent**: Golden (#f79454) - Highlight, energy
- **Neutral**: Grays - Clean, professional

## Important Notes

- All components use TypeScript for type safety
- CSS-in-JS via Tailwind for consistent styling
- Responsive design mobile-first approach
- Accessibility (a11y) is prioritized
- Components are modular and reusable

## Deployment

- Deployed on Vercel
- Database on Supabase
- Storage on Supabase Storage
- CDN for static assets
- Environment variables managed securely

## Contributing Guidelines

1. Create feature branches from main
2. Follow TypeScript and React best practices
3. Use meaningful commit messages
4. Create pull requests for review
5. Ensure tests pass before merging

## Support & Contact

- Email: support@carelinkafrica.com
- Emergency: +234 (0) XXX XXXX XXX
- Website: https://carelinkafrica.com
