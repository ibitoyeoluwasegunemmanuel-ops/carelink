'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function ParentWaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    location: '',
    child_condition: '',
    heard_from: 'word-of-mouth'
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
        .from('parent_waitlist')
        .insert([formData]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('This email is already on our waitlist.');
        } else {
          setError('Error signing up. Please try again.');
        }
      } else {
        setSubmitted(true);
        setFormData({
          email: '',
          name: '',
          phone: '',
          location: '',
          child_condition: '',
          heard_from: 'word-of-mouth'
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
        <h3 className="text-lg font-semibold text-green-900 mb-2">✓ You're on the waitlist!</h3>
        <p className="text-green-800">We'll be in touch with early access details very soon.</p>
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
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="input-field"
        />
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
          Child's Condition <span className="text-red-500">*</span>
        </label>
        <select
          name="child_condition"
          value={formData.child_condition}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Select condition...</option>
          <option value="autism">Autism Spectrum Disorder</option>
          <option value="adhd">ADHD</option>
          <option value="down-syndrome">Down Syndrome</option>
          <option value="cerebral-palsy">Cerebral Palsy</option>
          <option value="speech-disorder">Speech Disorder</option>
          <option value="other">Other / Not Sure</option>
        </select>
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
          <option value="word-of-mouth">Word of mouth</option>
          <option value="social-media">Social media</option>
          <option value="google">Google search</option>
          <option value="ngo">NGO / Organization</option>
          <option value="partner">Partner referral</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary"
      >
        {loading ? 'Signing up...' : 'Get Early Access'}
      </button>
    </form>
  );
}
