'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateParentProfileRequest } from '@/types/api';

export function ParentSignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<CreateParentProfileRequest>({
    user_id: '', // Will be set from auth
    relationship_to_child: '',
    children_count: 1,
    household_adults: 1,
    is_primary_caregiver: true,
    primary_concern: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: name.includes('_count') || name.includes('adults')
          ? parseInt(value)
          : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.relationship_to_child || !formData.primary_concern) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      const response = await fetch('/api/parents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create parent profile');
      }

      // Redirect to parent dashboard
      router.push('/dashboard/parent');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-900">Parent/Guardian Profile</h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="relationship_to_child" className="block text-sm font-medium text-gray-700">
          Your Relationship to the Child *
        </label>
        <select
          id="relationship_to_child"
          name="relationship_to_child"
          value={formData.relationship_to_child}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        >
          <option value="">Select relationship</option>
          <option value="Parent">Parent</option>
          <option value="Guardian">Guardian</option>
          <option value="Grandparent">Grandparent</option>
          <option value="Other Caregiver">Other Caregiver</option>
        </select>
      </div>

      <div>
        <label htmlFor="primary_concern" className="block text-sm font-medium text-gray-700">
          Primary Concern/Diagnosis *
        </label>
        <input
          type="text"
          id="primary_concern"
          name="primary_concern"
          value={formData.primary_concern}
          onChange={handleChange}
          required
          placeholder="e.g., Autism, Speech Delay, ADHD"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="children_count" className="block text-sm font-medium text-gray-700">
            Number of Children
          </label>
          <input
            type="number"
            id="children_count"
            name="children_count"
            value={formData.children_count}
            onChange={handleChange}
            min="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
          />
        </div>

        <div>
          <label htmlFor="household_adults" className="block text-sm font-medium text-gray-700">
            Number of Adults in Household
          </label>
          <input
            type="number"
            id="household_adults"
            name="household_adults"
            value={formData.household_adults}
            onChange={handleChange}
            min="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="is_primary_caregiver"
          name="is_primary_caregiver"
          checked={formData.is_primary_caregiver}
          onChange={handleChange}
          className="rounded"
        />
        <label htmlFor="is_primary_caregiver" className="ml-2 text-sm text-gray-700">
          I am the primary caregiver
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded transition"
      >
        {loading ? 'Creating Profile...' : 'Create Parent Profile'}
      </button>
    </form>
  );
}
