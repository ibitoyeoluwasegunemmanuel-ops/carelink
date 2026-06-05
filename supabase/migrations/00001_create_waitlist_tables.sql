-- CareLink Waitlist Tables

-- Parent Waitlist
CREATE TABLE parent_waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  child_condition TEXT,
  heard_from TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  status TEXT DEFAULT 'pending' -- pending, invited, active
);

-- Expert Waitlist
CREATE TABLE expert_waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  specialization TEXT NOT NULL,
  license_number TEXT,
  organization TEXT,
  heard_from TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  status TEXT DEFAULT 'pending' -- pending, contacted, verified, active
);

-- Partnership Interest
CREATE TABLE partnership_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  organization_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  phone TEXT,
  organization_type TEXT NOT NULL,
  location TEXT,
  interest_areas TEXT,
  heard_from TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  status TEXT DEFAULT 'pending' -- pending, contacted, agreed, active
);

-- Create indexes for faster queries
CREATE INDEX idx_parent_waitlist_email ON parent_waitlist(email);
CREATE INDEX idx_parent_waitlist_status ON parent_waitlist(status);
CREATE INDEX idx_parent_waitlist_created ON parent_waitlist(created_at DESC);

CREATE INDEX idx_expert_waitlist_email ON expert_waitlist(email);
CREATE INDEX idx_expert_waitlist_status ON expert_waitlist(status);
CREATE INDEX idx_expert_waitlist_location ON expert_waitlist(location);
CREATE INDEX idx_expert_waitlist_created ON expert_waitlist(created_at DESC);

CREATE INDEX idx_partnership_inquiries_email ON partnership_inquiries(email);
CREATE INDEX idx_partnership_inquiries_status ON partnership_inquiries(status);
CREATE INDEX idx_partnership_inquiries_created ON partnership_inquiries(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE parent_waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE expert_waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE partnership_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Allow public inserts, admin reads
CREATE POLICY "public_insert_parent_waitlist" ON parent_waitlist
  FOR INSERT WITH CHECK (true);

CREATE POLICY "public_insert_expert_waitlist" ON expert_waitlist
  FOR INSERT WITH CHECK (true);

CREATE POLICY "public_insert_partnership" ON partnership_inquiries
  FOR INSERT WITH CHECK (true);
