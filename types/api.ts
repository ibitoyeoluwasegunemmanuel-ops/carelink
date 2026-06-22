// API Types for CareLink Marketplace

// Expert Profile
export interface ExpertProfile {
  id: string;
  user_id: string;
  specialization: string;
  bio?: string;
  credentials?: string;
  license_number: string;
  license_verified: boolean;
  license_verified_at?: string;
  verified_by_admin?: string;
  hourly_rate: number;
  consultation_duration_minutes: number;
  available_hours?: Record<string, unknown>;
  years_of_experience?: number;
  languages: string[];
  service_modality: string[];
  avatar_url?: string;
  approval_status: 'pending' | 'approved' | 'rejected' | 'suspended';
  approval_notes?: string;
  total_consultations: number;
  average_rating: number;
  is_active: boolean;
  city?: string;
  created_at: string;
  updated_at: string;
  users?: {
    full_name: string;
    phone_number?: string;
    email?: string;
  };
}

// Parent Profile
export interface ParentProfile {
  id: string;
  user_id: string;
  relationship_to_child: string;
  children_count: number;
  household_adults: number;
  is_primary_caregiver: boolean;
  primary_concern?: string;
  secondary_concerns: string[];
  preferred_expert_type?: string;
  budget_per_consultation?: number;
  availability_timezone?: string;
  avatar_url?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Child Profile
export interface ChildProfile {
  id: string;
  parent_id: string;
  first_name: string;
  date_of_birth: string;
  diagnosis: string[];
  diagnosis_date?: string;
  current_therapies: string[];
  medical_notes?: string;
  created_at: string;
  updated_at: string;
}

// Appointment
export interface Appointment {
  id: string;
  parent_id: string;
  expert_id: string;
  child_id?: string;
  scheduled_at: string;
  duration_minutes: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show' | 'rescheduled';
  consultation_type: string;
  notes?: string;
  parent_confirmed_at?: string;
  expert_confirmed_at?: string;
  completed_at?: string;
  cancellation_reason?: string;
  cancellation_by?: string;
  created_at: string;
  updated_at: string;
  expert_profiles?: ExpertProfile;
  parent_profiles?: ParentProfile;
}

// Consultation
export interface Consultation {
  id: string;
  appointment_id: string;
  expert_id: string;
  parent_id: string;
  notes_by_expert?: string;
  recommendations?: string;
  follow_up_needed: boolean;
  follow_up_notes?: string;
  parent_feedback?: string;
  parent_rating?: number;
  expert_feedback?: string;
  payment_status: 'pending' | 'completed' | 'refunded';
  payment_amount?: number;
  platform_fee?: number;
  expert_payout?: number;
  created_at: string;
  updated_at: string;
}

// API Request/Response types
export interface CreateExpertProfileRequest {
  user_id: string;
  specialization: string;
  bio?: string;
  credentials?: string;
  license_number: string;
  hourly_rate: number;
  consultation_duration_minutes?: number;
  years_of_experience?: number;
  languages?: string[];
  service_modality?: string[];
  city?: string;
}

export interface CreateParentProfileRequest {
  user_id: string;
  relationship_to_child: string;
  children_count?: number;
  household_adults?: number;
  is_primary_caregiver?: boolean;
  primary_concern?: string;
  secondary_concerns?: string[];
  budget_per_consultation?: number;
  availability_timezone?: string;
}

export interface CreateAppointmentRequest {
  expert_id: string;
  scheduled_at: string;
  duration_minutes?: number;
  child_id?: string;
  consultation_type?: string;
  notes?: string;
}

export interface UpdateAppointmentRequest {
  action: 'confirm' | 'cancel';
  cancellation_reason?: string;
}

export interface VerifyExpertRequest {
  action: 'approve' | 'reject';
  approval_notes?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface SearchExpertsParams {
  specialization?: string;
  city?: string;
  status?: string;
  page?: number;
  limit?: number;
}
