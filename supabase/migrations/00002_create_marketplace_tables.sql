-- CareLink Marketplace Tables
-- Core tables for experts, parents, and appointment booking

-- Users extension (extends Supabase Auth)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  user_type TEXT NOT NULL CHECK (user_type IN ('parent', 'expert', 'admin')),
  full_name TEXT NOT NULL,
  phone_number TEXT,
  country TEXT,
  city TEXT,
  profile_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Expert Profiles (Main supply side)
CREATE TABLE IF NOT EXISTS expert_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  specialization TEXT NOT NULL,
  bio TEXT,
  credentials TEXT,
  license_number TEXT NOT NULL,
  license_verified BOOLEAN DEFAULT false,
  license_verified_at TIMESTAMP,
  verified_by_admin UUID REFERENCES users(id),
  hourly_rate DECIMAL(10, 2) NOT NULL,
  consultation_duration_minutes INTEGER DEFAULT 60,
  available_hours JSONB,
  years_of_experience INTEGER,
  languages TEXT[] DEFAULT ARRAY['English'],
  service_modality TEXT[] DEFAULT ARRAY['virtual', 'in-person'],
  avatar_url TEXT,
  approval_status TEXT DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected', 'suspended')),
  approval_notes TEXT,
  total_consultations INTEGER DEFAULT 0,
  average_rating DECIMAL(3, 2) DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Parent/Guardian Profiles (Main demand side)
CREATE TABLE IF NOT EXISTS parent_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  relationship_to_child TEXT NOT NULL,
  children_count INTEGER DEFAULT 1,
  household_adults INTEGER DEFAULT 1,
  is_primary_caregiver BOOLEAN DEFAULT true,
  primary_concern TEXT,
  secondary_concerns TEXT[] DEFAULT ARRAY[]::TEXT[],
  preferred_expert_type TEXT,
  budget_per_consultation DECIMAL(10, 2),
  availability_timezone TEXT,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Child Profiles (Information about children needing support)
CREATE TABLE IF NOT EXISTS child_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID NOT NULL REFERENCES parent_profiles(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  diagnosis TEXT[],
  diagnosis_date DATE,
  current_therapies TEXT[] DEFAULT ARRAY[]::TEXT[],
  medical_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Appointments/Bookings
CREATE TABLE IF NOT EXISTS appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID NOT NULL REFERENCES parent_profiles(id) ON DELETE CASCADE,
  expert_id UUID NOT NULL REFERENCES expert_profiles(id) ON DELETE CASCADE,
  child_id UUID REFERENCES child_profiles(id) ON DELETE SET NULL,
  scheduled_at TIMESTAMP NOT NULL,
  duration_minutes INTEGER NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled', 'no_show', 'rescheduled')),
  consultation_type TEXT DEFAULT 'initial',
  notes TEXT,
  parent_confirmed_at TIMESTAMP,
  expert_confirmed_at TIMESTAMP,
  completed_at TIMESTAMP,
  cancellation_reason TEXT,
  cancellation_by TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Consultations (Records of completed appointments)
CREATE TABLE IF NOT EXISTS consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appointment_id UUID NOT NULL UNIQUE REFERENCES appointments(id) ON DELETE CASCADE,
  expert_id UUID NOT NULL REFERENCES expert_profiles(id) ON DELETE CASCADE,
  parent_id UUID NOT NULL REFERENCES parent_profiles(id) ON DELETE CASCADE,
  notes_by_expert TEXT,
  recommendations TEXT,
  follow_up_needed BOOLEAN DEFAULT false,
  follow_up_notes TEXT,
  parent_feedback TEXT,
  parent_rating INTEGER CHECK (parent_rating >= 1 AND parent_rating <= 5),
  expert_feedback TEXT,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'refunded')),
  payment_amount DECIMAL(10, 2),
  platform_fee DECIMAL(10, 2),
  expert_payout DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create Indexes for Performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_user_type ON users(user_type);
CREATE INDEX idx_expert_profiles_user_id ON expert_profiles(user_id);
CREATE INDEX idx_expert_profiles_approval_status ON expert_profiles(approval_status);
CREATE INDEX idx_expert_profiles_specialization ON expert_profiles(specialization);
CREATE INDEX idx_expert_profiles_city ON expert_profiles(city);
CREATE INDEX idx_expert_profiles_is_active ON expert_profiles(is_active);
CREATE INDEX idx_parent_profiles_user_id ON parent_profiles(user_id);
CREATE INDEX idx_child_profiles_parent_id ON child_profiles(parent_id);
CREATE INDEX idx_appointments_parent_id ON appointments(parent_id);
CREATE INDEX idx_appointments_expert_id ON appointments(expert_id);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_scheduled_at ON appointments(scheduled_at);
CREATE INDEX idx_consultations_expert_id ON consultations(expert_id);
CREATE INDEX idx_consultations_parent_id ON consultations(parent_id);
CREATE INDEX idx_consultations_payment_status ON consultations(payment_status);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE expert_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE parent_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE child_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "users_read_own" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "users_update_own" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "users_insert_own" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for expert_profiles
CREATE POLICY "expert_profiles_read_approved" ON expert_profiles
  FOR SELECT USING (approval_status = 'approved' OR auth.uid() IN (SELECT id FROM users WHERE id = user_id));

CREATE POLICY "expert_profiles_update_own" ON expert_profiles
  FOR UPDATE USING (auth.uid() IN (SELECT user_id FROM expert_profiles WHERE id = expert_profiles.id));

CREATE POLICY "expert_profiles_insert_own" ON expert_profiles
  FOR INSERT WITH CHECK (auth.uid() IN (SELECT user_id FROM expert_profiles WHERE id = expert_profiles.id));

-- RLS Policies for parent_profiles
CREATE POLICY "parent_profiles_read_own" ON parent_profiles
  FOR SELECT USING (auth.uid() IN (SELECT user_id FROM parent_profiles WHERE id = parent_profiles.id));

CREATE POLICY "parent_profiles_update_own" ON parent_profiles
  FOR UPDATE USING (auth.uid() IN (SELECT user_id FROM parent_profiles WHERE id = parent_profiles.id));

CREATE POLICY "parent_profiles_insert_own" ON parent_profiles
  FOR INSERT WITH CHECK (auth.uid() IN (SELECT user_id FROM parent_profiles WHERE id = parent_profiles.id));

-- RLS Policies for child_profiles
CREATE POLICY "child_profiles_read_own" ON child_profiles
  FOR SELECT USING (
    auth.uid() IN (
      SELECT user_id FROM parent_profiles WHERE id = child_profiles.parent_id
    )
  );

-- RLS Policies for appointments
CREATE POLICY "appointments_read_own" ON appointments
  FOR SELECT USING (
    auth.uid() IN (
      SELECT user_id FROM parent_profiles WHERE id = appointments.parent_id
    )
    OR auth.uid() IN (
      SELECT user_id FROM expert_profiles WHERE id = appointments.expert_id
    )
  );

CREATE POLICY "appointments_create_parent" ON appointments
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT user_id FROM parent_profiles WHERE id = appointments.parent_id
    )
  );

-- RLS Policies for consultations
CREATE POLICY "consultations_read_own" ON consultations
  FOR SELECT USING (
    auth.uid() IN (
      SELECT user_id FROM parent_profiles WHERE id = consultations.parent_id
    )
    OR auth.uid() IN (
      SELECT user_id FROM expert_profiles WHERE id = consultations.expert_id
    )
  );

-- Add city column to expert_profiles from referencing users.city
ALTER TABLE expert_profiles ADD COLUMN IF NOT EXISTS city TEXT;
ALTER TABLE parent_profiles ADD COLUMN IF NOT EXISTS city TEXT;
