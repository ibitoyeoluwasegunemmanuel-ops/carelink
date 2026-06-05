'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-8">Please log in to access your dashboard.</p>
          <Link href="/auth/login" className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
            Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, {user.email}</h1>
        <p className="text-gray-600 mb-12">Your personal dashboard</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile</h2>
            <p className="text-gray-600 mb-4">Manage your profile information and preferences.</p>
            <button className="text-orange-600 font-semibold hover:text-orange-700">Edit Profile →</button>
          </div>

          {/* Bookmarks */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Bookmarks</h2>
            <p className="text-gray-600 mb-4">Save and organize resources you find helpful.</p>
            <button className="text-orange-600 font-semibold hover:text-orange-700">View Bookmarks →</button>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Messages</h2>
            <p className="text-gray-600 mb-4">Connect with experts and community members.</p>
            <button className="text-orange-600 font-semibold hover:text-orange-700">View Messages →</button>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-orange-600 font-semibold hover:text-orange-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
