'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function ExpertWaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    location: '',
    specialization: '',
    license_number: '',
    organization: '',
    heard_from: 'association'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const supabase = createClient();
      const { error: supabaseError } = await supabase
        .from('expert_waitlist')
        .insert([formData]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('This email is already registered.');
        } else {
          setError('Error registering. Please try again.');
        }
      } else {
        setSubmitted(true);
        setFormData({
          email: '',
          name: '',
          phone: '',
          location: '',
          specialization: '',
          license_number: '',
          organization: '',
          heard_from: 'association'
        });
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-900 mb-2">✓ You're registered!</h3>
        <p className="text-green-800">We'll verify your credentials and invite you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+234..."
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="input-field"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="City, State"
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Specialization <span className="text-red-500">*</span>
          </label>
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select...</option>
            <option value="speech">Speech Therapist</option>
            <option value="ot">Occupational Therapist</option>
            <option value="psychology">Psychologist</option>
            <option value="pediatrics">Pediatrician</option>
            <option value="special-ed">Special Education</option>
            <option value="pt">Physical Therapist</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Organization / Clinic
        </label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder="Where you work"
          className="input-field"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          License / Certification Number
        </label>
        <input
          type="text"
          name="license_number"
          value={formData.license_number}
          onChange={handleChange}
          placeholder="Your license number"
          className="input-field"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          How did you hear about us?
        </label>
        <select
          name="heard_from"
          value={formData.heard_from}
          onChange={handleChange}
          className="input-field"
        >
          <option value="association">Professional association</option>
          <option value="referral">Colleague referral</option>
          <option value="social-media">Social media</option>
          <option value="google">Google search</option>
          <option value="hospital">Hospital/Organization</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary"
      >
        {loading ? 'Registering...' : 'Become an Expert Partner'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Your information is secure. We'll verify your credentials before approval.
      </p>
    </form>
  );
}
