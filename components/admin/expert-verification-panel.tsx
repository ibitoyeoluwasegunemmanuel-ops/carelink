'use client';

import { useEffect, useState } from 'react';
import { ExpertProfile } from '@/types/api';

export function ExpertVerificationPanel() {
  const [experts, setExperts] = useState<ExpertProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedExpert, setSelectedExpert] = useState<ExpertProfile | null>(null);
  const [verificationAction, setVerificationAction] = useState<'approve' | 'reject'>('approve');
  const [approvalNotes, setApprovalNotes] = useState('');
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    fetchPendingExperts();
  }, []);

  const fetchPendingExperts = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/experts?status=pending');

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to fetch pending experts');
      }

      const data = await response.json();
      setExperts(data.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!selectedExpert) return;

    setVerifying(true);
    setError('');

    try {
      const response = await fetch(`/api/experts/${selectedExpert.id}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': 'admin-user-id', // Will be set from auth in real implementation
        },
        body: JSON.stringify({
          action: verificationAction,
          approval_notes: approvalNotes,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to verify expert');
      }

      // Refresh list
      await fetchPendingExperts();
      setSelectedExpert(null);
      setApprovalNotes('');
      setVerificationAction('approve');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <h2 className="text-3xl font-bold text-gray-900">Expert Verification</h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <p className="text-sm text-gray-600">
            {loading ? 'Loading...' : `${experts.length} pending verification${experts.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading pending experts...</p>
          </div>
        ) : experts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No pending experts to verify</p>
          </div>
        ) : (
          <div className="divide-y">
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition"
                onClick={() => setSelectedExpert(expert)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {expert.users?.full_name || 'Unnamed Expert'}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {expert.specialization} • {expert.years_of_experience || 0} years experience
                    </p>
                    {expert.city && (
                      <p className="text-sm text-gray-500 mt-1">{expert.city}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                      {expert.approval_status === 'pending' ? 'Pending' : expert.approval_status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Verification Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Verify Expert</h3>
                <p className="text-gray-600 mt-1">{selectedExpert.users?.full_name}</p>
              </div>
              <button
                onClick={() => setSelectedExpert(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Expert Details */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Expert Information</h4>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Specialization</p>
                    <p className="font-medium">{selectedExpert.specialization}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Years of Experience</p>
                    <p className="font-medium">{selectedExpert.years_of_experience || 0}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">License Number</p>
                    <p className="font-medium">{selectedExpert.license_number}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Hourly Rate</p>
                    <p className="font-medium">${selectedExpert.hourly_rate}</p>
                  </div>
                </div>

                {selectedExpert.city && (
                  <div>
                    <p className="text-sm text-gray-600">City</p>
                    <p className="font-medium">{selectedExpert.city}</p>
                  </div>
                )}

                {selectedExpert.credentials && (
                  <div>
                    <p className="text-sm text-gray-600">Credentials</p>
                    <p className="font-medium whitespace-pre-wrap">{selectedExpert.credentials}</p>
                  </div>
                )}

                {selectedExpert.bio && (
                  <div>
                    <p className="text-sm text-gray-600">Bio</p>
                    <p className="font-medium">{selectedExpert.bio}</p>
                  </div>
                )}

                {selectedExpert.users?.email && (
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">{selectedExpert.users.email}</p>
                  </div>
                )}
              </div>

              <div className="border-t pt-6 space-y-4">
                <h4 className="font-semibold text-gray-900">Verification Decision</h4>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Action
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="approve"
                        checked={verificationAction === 'approve'}
                        onChange={(e) => setVerificationAction(e.target.value as 'approve' | 'reject')}
                        className="rounded-full"
                      />
                      <span className="ml-2 text-gray-700">Approve & Activate</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="reject"
                        checked={verificationAction === 'reject'}
                        onChange={(e) => setVerificationAction(e.target.value as 'approve' | 'reject')}
                        className="rounded-full"
                      />
                      <span className="ml-2 text-gray-700">Reject</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    value={approvalNotes}
                    onChange={(e) => setApprovalNotes(e.target.value)}
                    rows={3}
                    placeholder="Add any notes about your decision..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedExpert(null)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleVerify}
                    disabled={verifying}
                    className={`flex-1 px-4 py-2 rounded-lg text-white font-medium transition ${
                      verificationAction === 'approve'
                        ? 'bg-green-500 hover:bg-green-600 disabled:bg-gray-300'
                        : 'bg-red-500 hover:bg-red-600 disabled:bg-gray-300'
                    }`}
                  >
                    {verifying ? 'Processing...' : verificationAction === 'approve' ? 'Approve' : 'Reject'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
