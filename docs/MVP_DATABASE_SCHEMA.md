# CareLink Africa MVP - Database Schema

## MVP Strategy
**Goal**: Launch within 6-8 weeks with minimum viable features  
**Focus**: Validate demand, build parent + expert base, establish trust  
**Scope**: 8 core tables only

## Core Tables (MVP Only)

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
  user_type ENUM('parent', 'expert', 'admin'),
  profile_picture_url VARCHAR(500),
  bio TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
```

### 2. expert_profiles
```sql
CREATE TABLE expert_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id),
  specialization VARCHAR(100) NOT NULL,
  license_number VARCHAR(100),
  years_experience INT,
  education TEXT,
  certifications TEXT,
  languages VARCHAR(500),
  country VARCHAR(100),
  city VARCHAR(100),
  bio TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  number_of_reviews INT DEFAULT 0,
  is_verified BOOLEAN DEFAULT FALSE,
  verification_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. conditions
```sql
CREATE TABLE conditions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) UNIQUE,
  description TEXT,
  symptoms TEXT,
  diagnosis_info TEXT,
  treatment_options TEXT,
  icon VARCHAR(50),
  order_by INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. articles
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(300) UNIQUE,
  content TEXT,
  author_user_id UUID REFERENCES users(id),
  category VARCHAR(100),
  featured_image VARCHAR(500),
  views INT DEFAULT 0,
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. videos
```sql
CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(300) UNIQUE,
  description TEXT,
  youtube_id VARCHAR(100),
  thumbnail_url VARCHAR(500),
  category VARCHAR(100),
  duration_seconds INT,
  views INT DEFAULT 0,
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 6. forum_threads
```sql
CREATE TABLE forum_threads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  category VARCHAR(100),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(300) UNIQUE,
  content TEXT,
  views INT DEFAULT 0,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_locked BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
```

### 7. forum_posts
```sql
CREATE TABLE forum_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  thread_id UUID NOT NULL REFERENCES forum_threads(id),
  user_id UUID NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  likes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
```

### 8. nearby_services
```sql
CREATE TABLE nearby_services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  service_type ENUM('hospital', 'therapy-center', 'school', 'ngo'),
  description TEXT,
  address VARCHAR(500),
  city VARCHAR(100),
  country VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(500),
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Supporting Tables (Optional for Admin)

### 9. admin_logs (optional)
```sql
CREATE TABLE admin_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_user_id UUID NOT NULL REFERENCES users(id),
  action VARCHAR(100),
  entity_type VARCHAR(50),
  entity_id UUID,
  details TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Indexes

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_user_type ON users(user_type);
CREATE INDEX idx_expert_profiles_user_id ON expert_profiles(user_id);
CREATE INDEX idx_expert_profiles_country ON expert_profiles(country);
CREATE INDEX idx_expert_profiles_specialization ON expert_profiles(specialization);
CREATE INDEX idx_expert_profiles_is_verified ON expert_profiles(is_verified);
CREATE INDEX idx_conditions_slug ON conditions(slug);
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_is_published ON articles(is_published);
CREATE INDEX idx_videos_slug ON videos(slug);
CREATE INDEX idx_videos_is_published ON videos(is_published);
CREATE INDEX idx_forum_threads_user_id ON forum_threads(user_id);
CREATE INDEX idx_forum_threads_category ON forum_threads(category);
CREATE INDEX idx_forum_posts_thread_id ON forum_posts(thread_id);
CREATE INDEX idx_forum_posts_user_id ON forum_posts(user_id);
CREATE INDEX idx_nearby_services_country ON nearby_services(country);
CREATE INDEX idx_nearby_services_city ON nearby_services(city);
CREATE INDEX idx_nearby_services_type ON nearby_services(service_type);
```

## Data Model Summary

### User Relationships
- Users → Expert Profiles (1:1, optional)
- Users → Forum Threads (1:N)
- Users → Forum Posts (1:N)
- Users → Articles (1:N, authors)

### Content Relationships
- Conditions → Articles (M:N via content tagging)
- Conditions → Videos (M:N via content tagging)
- Forum Threads → Forum Posts (1:N)

### Standalone
- Nearby Services (standalone directory)

## Migration Path to Full Platform

**Phase 2 will add:**
- child_profiles (for progress tracking)
- appointments (for booking)
- progress_tracking (for milestones)
- campaigns (for support)
- donations (for funding)

**Phase 3 will add:**
- reviews_and_ratings
- notifications
- transactions
- volunteer_opportunities
- support_groups

## Size & Performance Estimates

| Table | Est. Records (Year 1) | Storage |
|-------|----------------------|---------|
| users | 50,000 | ~10 MB |
| expert_profiles | 5,000 | ~5 MB |
| conditions | 15 | <1 MB |
| articles | 500 | ~20 MB |
| videos | 100 | ~5 MB |
| forum_threads | 10,000 | ~50 MB |
| forum_posts | 50,000 | ~100 MB |
| nearby_services | 10,000 | ~30 MB |
| **Total** | **~125K** | **~220 MB** |

This minimal schema will keep database queries fast and simple for MVP launch.

## Key Decisions

### What's Removed for MVP
- Donations & campaigns (Phase 2)
- Appointment booking (Phase 2)
- Progress tracking (Phase 2)
- Reviews & ratings (Phase 3)
- Transactions (Phase 2)
- Volunteer management (Phase 3)
- Notifications (Phase 2)
- Child profiles (Phase 2)
- Support groups (Phase 3)
- AI assistant (Phase 3)
- Telemedicine (Phase 3+)

### Why This Approach
1. **Faster Launch** - 6-8 weeks vs 6+ months
2. **Easier Integration** - 8 tables vs 16+
3. **Lower Risk** - Validate core assumptions first
4. **Team Scaling** - Smaller codebase for 3-5 person team
5. **Clear Focus** - Parents + Experts + Content first

## SQL Initialization

```sql
-- Create all tables
-- ... (run all CREATE TABLE statements above)

-- Insert conditions
INSERT INTO conditions (name, slug, description, icon) VALUES
('Autism Spectrum Disorder', 'autism', 'Developmental disability...', '🧠'),
('ADHD', 'adhd', 'Attention-deficit/hyperactivity...', '⚡'),
('Down Syndrome', 'down-syndrome', 'Genetic condition...', '❤️'),
('Cerebral Palsy', 'cerebral-palsy', 'Movement disorder...', '🏃'),
('Speech Disorders', 'speech-disorders', 'Language development...', '🗣️');

-- Create admin user
INSERT INTO users (email, password_hash, first_name, user_type, is_verified)
VALUES ('admin@carelinkafrica.com', 'hashed_password', 'Admin', 'admin', TRUE);
```

This is your lean, launch-ready database schema. Ready to build on this foundation?
