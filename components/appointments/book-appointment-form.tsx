'use client';

import { useState } from 'react';
import { ExpertProfile } from '@/types/api';

interface BookAppointmentFormProps {
  expert: ExpertProfile;
  onSuccess?: () => void;
  onClose?: () => void;
}

export function BookAppointmentForm({
  expert,
  onSuccess,
  onClose,
}: BookAppointmentFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    scheduled_at: '',
    consultation_type: 'initial',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!formData.scheduled_at) {
        setError('Please select a date and time');
        setLoading(false);
        return;
      }

      // Check that selected time is in the future
      const selectedDate = new Date(formData.scheduled_at);
      if (selectedDate < new Date()) {
        setError('Please select a future date and time');
        setLoading(false);
        return;
      }

      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          expert_id: expert.id,
          scheduled_at: formData.scheduled_at,
          duration_minutes: expert.consultation_duration_minutes,
          consultation_type: formData.consultation_type,
          notes: formData.notes,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to book appointment');
      }

      // Success - call callback
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Generate time slots for next 30 days
  const generateTimeSlots = () => {
    const slots = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);

      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue;

      // Generate 8 AM to 5 PM slots in 1-hour intervals
      for (let hour = 8; hour < 17; hour++) {
        const slotDate = new Date(date);
        slotDate.setHours(hour, 0, 0, 0);

        slots.push({
          label: slotDate.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          }),
          value: slotDate.toISOString(),
        });
      }
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Book Appointment with {expert.users?.full_name}
        </h3>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Specialization</p>
              <p className="font-medium">{expert.specialization}</p>
            </div>
            <div>
              <p className="text-gray-600">Rate</p>
              <p className="font-medium">${expert.hourly_rate}/hour</p>
            </div>
            <div>
              <p className="text-gray-600">Duration</p>
              <p className="font-medium">{expert.consultation_duration_minutes} minutes</p>
            </div>
            <div>
              <p className="text-gray-600">Estimated Cost</p>
              <p className="font-medium">
                ${(expert.hourly_rate * (expert.consultation_duration_minutes / 60)).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="scheduled_at" className="block text-sm font-medium text-gray-700">
          Select Date & Time *
        </label>
        <select
          id="scheduled_at"
          name="scheduled_at"
          value={formData.scheduled_at}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        >
          <option value="">Choose a time slot...</option>
          {timeSlots.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="consultation_type" className="block text-sm font-medium text-gray-700">
          Consultation Type
        </label>
        <select
          id="consultation_type"
          name="consultation_type"
          value={formData.consultation_type}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        >
          <option value="initial">Initial Consultation</option>
          <option value="follow-up">Follow-up Consultation</option>
          <option value="assessment">Assessment</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Tell the expert anything they should know before the consultation..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-3 py-2 border"
        />
      </div>

      <div className="space-y-3">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded transition"
        >
          {loading ? 'Booking...' : 'Confirm Booking'}
        </button>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded transition"
          >
            Cancel
          </button>
        )}
      </div>

      <p className="text-xs text-gray-500">
        By confirming, you agree to our terms. A confirmation email will be sent to both you and
        the expert.
      </p>
    </form>
  );
}
