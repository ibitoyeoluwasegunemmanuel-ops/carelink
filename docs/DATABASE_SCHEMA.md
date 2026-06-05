# CareLink Africa - Database Schema

## Overview
This document outlines the complete database schema for CareLink Africa platform using PostgreSQL with Supabase.

## Core Tables

### 1. users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  country VARCHAR(100),
  user_type ENUM('parent', 'expert', 'donor', 'volunteer', 'admin'),
  profile_picture_url VARCHAR(500),
  bio TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
```

### 2. parent_profiles
```sql
CREATE TABLE parent_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  number_of_children INT,
  primary_condition VARCHAR(100),
  occupation VARCHAR(100),
  support_level ENUM('basic', 'premium', 'plus'),
  preferences JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. expert_profiles
```sql
CREATE TABLE expert_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  specialization VARCHAR(100) NOT NULL,
  license_number VARCHAR(100),
  years_experience INT,
  education JSONB,
  certifications JSONB,
  languages VARCHAR(500),
  hourly_rate DECIMAL(10,2),
  accepts_online BOOLEAN DEFAULT TRUE,
  accepts_physical BOOLEAN DEFAULT TRUE,
  location VARCHAR(255),
  bio TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  number_of_reviews INT DEFAULT 0,
  is_verified BOOLEAN DEFAULT FALSE,
  verification_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. child_profiles
```sql
CREATE TABLE child_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  parent_user_id UUID NOT NULL REFERENCES users(id),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  date_of_birth DATE,
  gender VARCHAR(20),
  conditions JSONB,
  medications JSONB,
  allergies JSONB,
  developmental_stage VARCHAR(100),
  school_type VARCHAR(100),
  special_accommodations TEXT,
  therapies_ongoing JSONB,
  milestones_achieved JSONB,
  profile_picture_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
```

### 5. conditions
```sql
CREATE TABLE conditions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) UNIQUE,
  description TEXT,
  symptoms TEXT,
  diagnosis_info TEXT,
  treatment_options JSONB,
  prognosis TEXT,
  support_resources JSONB,
  icon VARCHAR(50),
  order_by INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 6. appointments
```sql
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  parent_user_id UUID NOT NULL REFERENCES users(id),
  expert_user_id UUID NOT NULL REFERENCES expert_profiles(id),
  child_profile_id UUID REFERENCES child_profiles(id),
  appointment_date TIMESTAMP NOT NULL,
  duration_minutes INT DEFAULT 60,
  type ENUM('online', 'physical', 'phone') DEFAULT 'online',
  status ENUM('scheduled', 'completed', 'cancelled', 'no-show') DEFAULT 'scheduled',
  notes TEXT,
  price DECIMAL(10,2),
  payment_status ENUM('pending', 'completed', 'refunded') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
```

### 7. forum_threads
```sql
CREATE TABLE forum_threads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  category VARCHAR(100),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(300) UNIQUE,
  content TEXT,
  tags VARCHAR(500),
  views INT DEFAULT 0,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_locked BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
```

### 8. forum_posts
```sql
CREATE TABLE forum_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  thread_id UUID NOT NULL REFERENCES forum_threads(id),
  user_id UUID NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  likes INT DEFAULT 0,
  is_helpful BOOLEAN,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
```

### 9. support_groups
```sql
CREATE TABLE support_groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  condition VARCHAR(100),
  moderator_user_id UUID REFERENCES users(id),
  member_count INT DEFAULT 0,
  location VARCHAR(255),
  meeting_frequency VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 10. campaigns
```sql
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  child_profile_id UUID REFERENCES child_profiles(id),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(300) UNIQUE,
  description TEXT,
  goal_amount DECIMAL(12,2),
  current_amount DECIMAL(12,2) DEFAULT 0,
  campaign_type ENUM('therapy', 'medical', 'education', 'equipment', 'family-support') NOT NULL,
  status ENUM('active', 'completed', 'cancelled', 'paused') DEFAULT 'active',
  urgency_level ENUM('low', 'medium', 'high') DEFAULT 'medium',
  image_url VARCHAR(500),
  start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  end_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 11. donations
```sql
CREATE TABLE donations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_user_id UUID REFERENCES users(id),
  campaign_id UUID REFERENCES campaigns(id),
  amount DECIMAL(12,2),
  donation_type ENUM('financial', 'equipment', 'volunteer-hours') NOT NULL,
  payment_method VARCHAR(50),
  stripe_payment_id VARCHAR(255),
  status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  message TEXT,
  is_anonymous BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 12. progress_tracking
```sql
CREATE TABLE progress_tracking (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_profile_id UUID NOT NULL REFERENCES child_profiles(id),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  milestone VARCHAR(255),
  therapy_type VARCHAR(100),
  notes TEXT,
  progress_rating INT (1-10),
  attachments JSONB,
  created_by_user_id UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 13. articles
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(300) UNIQUE,
  content TEXT,
  author_user_id UUID REFERENCES users(id),
  category VARCHAR(100),
  tags VARCHAR(500),
  featured_image VARCHAR(500),
  views INT DEFAULT 0,
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 14. reviews_and_ratings
```sql
CREATE TABLE reviews_and_ratings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  expert_user_id UUID NOT NULL REFERENCES expert_profiles(id),
  parent_user_id UUID NOT NULL REFERENCES users(id),
  rating INT NOT NULL (1-5),
  title VARCHAR(255),
  content TEXT,
  is_verified_appointment BOOLEAN DEFAULT FALSE,
  helpful_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
```

### 15. notifications
```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  type VARCHAR(100),
  title VARCHAR(255),
  message TEXT,
  related_id UUID,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  read_at TIMESTAMP
);
```

### 16. transactions
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  transaction_type ENUM('donation', 'payment', 'refund') NOT NULL,
  amount DECIMAL(12,2),
  currency VARCHAR(3) DEFAULT 'USD',
  status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
  description TEXT,
  payment_method VARCHAR(50),
  receipt_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Indexes

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_user_type ON users(user_type);
CREATE INDEX idx_parent_profiles_user_id ON parent_profiles(user_id);
CREATE INDEX idx_expert_profiles_user_id ON expert_profiles(user_id);
CREATE INDEX idx_expert_profiles_specialization ON expert_profiles(specialization);
CREATE INDEX idx_child_profiles_parent_user_id ON child_profiles(parent_user_id);
CREATE INDEX idx_appointments_parent_user_id ON appointments(parent_user_id);
CREATE INDEX idx_appointments_expert_user_id ON appointments(expert_user_id);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_forum_threads_user_id ON forum_threads(user_id);
CREATE INDEX idx_forum_threads_category ON forum_threads(category);
CREATE INDEX idx_forum_posts_thread_id ON forum_posts(thread_id);
CREATE INDEX idx_campaigns_user_id ON campaigns(user_id);
CREATE INDEX idx_campaigns_status ON campaigns(status);
CREATE INDEX idx_donations_campaign_id ON donations(campaign_id);
CREATE INDEX idx_donations_donor_user_id ON donations(donor_user_id);
CREATE INDEX idx_progress_tracking_child_profile_id ON progress_tracking(child_profile_id);
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_reviews_expert_user_id ON reviews_and_ratings(expert_user_id);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
```

## Relationships

- Users → Parent Profiles (1:1)
- Users → Expert Profiles (1:1)
- Parents → Child Profiles (1:N)
- Child Profiles → Progress Tracking (1:N)
- Appointments → Users (N:1 for parent and expert)
- Appointments → Child Profiles (N:1)
- Campaigns → Users (N:1)
- Campaigns → Child Profiles (N:1)
- Donations → Campaigns (N:1)
- Forum Threads → Users (N:1)
- Forum Posts → Forum Threads (N:1)
- Reviews → Experts (N:1)

## Constraints

- Users.email is UNIQUE
- Parent profiles are 1:1 with users
- Expert profiles are 1:1 with users
- Child profiles require parent_user_id
- Campaigns require user_id
- All timestamps use UTC
- Soft deletes via deleted_at field
