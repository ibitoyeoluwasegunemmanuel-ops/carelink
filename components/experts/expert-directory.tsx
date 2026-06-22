'use client';

import { useEffect, useState } from 'react';
import { ExpertProfile, SearchExpertsParams } from '@/types/api';

export function ExpertDirectory() {
  const [experts, setExperts] = useState<ExpertProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState<SearchExpertsParams>({
    specialization: '',
    city: '',
    page: 1,
    limit: 20,
  });
  const [selectedExpert, setSelectedExpert] = useState<ExpertProfile | null>(null);

  useEffect(() => {
    fetchExperts();
  }, [filters]);

  const fetchExperts = async () => {
    setLoading(true);
    setError('');

    try {
      const params = new URLSearchParams();
      if (filters.specialization) params.append('specialization', filters.specialization);
      if (filters.city) params.append('city', filters.city);
      if (filters.page) params.append('page', filters.page.toString());
      if (filters.limit) params.append('limit', filters.limit.toString());

      const response = await fetch(`/api/experts?${params}`);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to fetch experts');
      }

      const data = await response.json();
      setExperts(data.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: 1, // Reset to page 1 on filter change
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Find an Expert</h2>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Search & Filter</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
              Specialization
            </label>
            <select
              id="specialization"
              value={filters.specialization}
              onChange={(e) => handleFilterChange('specialization', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
            >
              <option value="">All Specializations</option>
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
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              value={filters.city}
              onChange={(e) => handleFilterChange('city', e.target.value)}
              placeholder="Search by city"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Loading experts...</p>
        </div>
      ) : experts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No experts found. Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 cursor-pointer"
              onClick={() => setSelectedExpert(expert)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {expert.users?.full_name || 'Unnamed Expert'}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{expert.specialization}</p>
                </div>
                {expert.average_rating > 0 && (
                  <div className="text-right">
                    <p className="text-lg font-bold text-orange-500">{expert.average_rating}/5</p>
                    <p className="text-xs text-gray-500">
                      {expert.total_consultations} consultations
                    </p>
                  </div>
                )}
              </div>

              {expert.bio && (
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">{expert.bio}</p>
              )}

              <div className="space-y-2 text-sm">
                {expert.years_of_experience && (
                  <p className="text-gray-600">
                    <span className="font-medium">Experience:</span> {expert.years_of_experience} years
                  </p>
                )}

                <p className="text-gray-600">
                  <span className="font-medium">Rate:</span> ${expert.hourly_rate}/hour
                </p>

                {expert.city && (
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> {expert.city}
                  </p>
                )}

                {expert.languages && expert.languages.length > 0 && (
                  <p className="text-gray-600">
                    <span className="font-medium">Languages:</span> {expert.languages.join(', ')}
                  </p>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedExpert(expert);
                }}
                className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition"
              >
                View Profile & Book
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Expert Detail Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedExpert.users?.full_name}
                </h3>
                <p className="text-gray-600 mt-1">{selectedExpert.specialization}</p>
              </div>
              <button
                onClick={() => setSelectedExpert(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {selectedExpert.average_rating > 0 && (
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Rating</p>
                    <p className="text-2xl font-bold text-orange-500">{selectedExpert.average_rating}/5</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Consultations</p>
                    <p className="text-2xl font-bold">{selectedExpert.total_consultations}</p>
                  </div>
                </div>
              )}

              {selectedExpert.bio && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                  <p className="text-gray-700">{selectedExpert.bio}</p>
                </div>
              )}

              {selectedExpert.credentials && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Credentials</h4>
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedExpert.credentials}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Hourly Rate</p>
                  <p className="text-lg font-semibold">${selectedExpert.hourly_rate}/hour</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-lg font-semibold">
                    {selectedExpert.consultation_duration_minutes} minutes
                  </p>
                </div>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
