'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function PartnershipInquiryForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    organization_name: '',
    contact_person: '',
    phone: '',
    organization_type: '',
    location: '',
    interest_areas: '',
    heard_from: 'search'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        .from('partnership_inquiries')
        .insert([formData]);

      if (supabaseError) {
        setError('Error submitting inquiry. Please try again.');
      } else {
        setSubmitted(true);
        setFormData({
          email: '',
          organization_name: '',
          contact_person: '',
          phone: '',
          organization_type: '',
          location: '',
          interest_areas: '',
          heard_from: 'search'
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
        <h3 className="text-lg font-semibold text-green-900 mb-2">✓ We received your inquiry!</h3>
        <p className="text-green-800">Our partnerships team will be in touch within 2-3 business days.</p>
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Organization Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="organization_name"
          value={formData.organization_name}
          onChange={handleChange}
          required
          placeholder="Your organization"
          className="input-field"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Person <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="contact_person"
            value={formData.contact_person}
            onChange={handleChange}
            required
            placeholder="Full name"
            className="input-field"
          />
        </div>

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
            placeholder="email@org.com"
            className="input-field"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234..."
            className="input-field"
          />
        </div>

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
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Organization Type <span className="text-red-500">*</span>
        </label>
        <select
          name="organization_type"
          value={formData.organization_type}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Select type...</option>
          <option value="ngo">NGO / Non-Profit</option>
          <option value="hospital">Hospital / Healthcare</option>
          <option value="association">Professional Association</option>
          <option value="university">University / School</option>
          <option value="therapy-center">Therapy / Service Center</option>
          <option value="media">Media / Publishing</option>
          <option value="government">Government / Policy</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Areas of Interest
        </label>
        <textarea
          name="interest_areas"
          value={formData.interest_areas}
          onChange={handleChange}
          placeholder="Expert network, content, referrals, visibility, etc."
          rows={3}
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
          <option value="search">Google search</option>
          <option value="referral">Referral</option>
          <option value="social">Social media</option>
          <option value="news">News / Press</option>
          <option value="network">Professional network</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary"
      >
        {loading ? 'Submitting...' : 'Explore Partnership'}
      </button>
    </form>
  );
}
