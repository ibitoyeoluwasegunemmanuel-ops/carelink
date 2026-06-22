'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateExpertProfileRequest } from '@/types/api';

export function ExpertSignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<CreateExpertProfileRequest>({
    user_id: '', // Will be set from auth
    specialization: '',
    license_number: '',
    hourly_rate: 0,
    bio: '',
    credentials: '',
    years_of_experience: 0,
    languages: ['English'],
    service_modality: ['virtual'],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'hourly_rate' || name === 'years_of_experience'
        ? parseFloat(value)
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.specialization || !formData.license_number || !formData.hourly_rate) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      // Get user ID from session/auth
      const response = await fetch('/api/experts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create expert profile');
      }

      // Redirect to dashboard or success page
      router.push('/dashboard/expert');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-900">Expert Profile Setup</h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
          Specialization *
        </label>
        <select
          id="specialization"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        >
          <option value="">Select your specialization</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Speech Therapist">Speech Therapist</option>
          <option value="Occupational Therapist">Occupational Therapist</option>
          <option value="Psychologist">Psychologist</option>
          <option value="Special Educator">Special Educator</option>
          <option value="Physiotherapist">Physiotherapist</option>
          <option value="Audiologist">Audiologist</option>
        </select>
      </div>

      <div>
        <label htmlFor="license_number" className="block text-sm font-medium text-gray-700">
          License Number *
        </label>
        <input
          type="text"
          id="license_number"
          name="license_number"
          value={formData.license_number}
          onChange={handleChange}
          required
          placeholder="e.g., LN/2024/001"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        />
      </div>

      <div>
        <label htmlFor="hourly_rate" className="block text-sm font-medium text-gray-700">
          Hourly Rate (USD) *
        </label>
        <input
          type="number"
          id="hourly_rate"
          name="hourly_rate"
          value={formData.hourly_rate}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          placeholder="50"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        />
      </div>

      <div>
        <label htmlFor="years_of_experience" className="block text-sm font-medium text-gray-700">
          Years of Experience
        </label>
        <input
          type="number"
          id="years_of_experience"
          name="years_of_experience"
          value={formData.years_of_experience}
          onChange={handleChange}
          min="0"
          max="70"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        />
      </div>

      <div>
        <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
          Credentials & Qualifications
        </label>
        <textarea
          id="credentials"
          name="credentials"
          value={formData.credentials}
          onChange={handleChange}
          rows={3}
          placeholder="List your relevant qualifications, certifications, and credentials"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        />
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Professional Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows={4}
          placeholder="Tell parents about your experience and approach to helping children with special needs"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded transition"
      >
        {loading ? 'Creating Profile...' : 'Create Expert Profile'}
      </button>
    </form>
  );
}
