import Link from 'next/link';
import { FiMapPin, FiUsers, FiCalendar } from 'react-icons/fi';

export default function SupportGroupsPage() {
  const groups = [
    { name: 'Lagos Autism Parents Network', city: 'Lagos', members: 245, meetup: 'Weekly on Sundays' },
    { name: 'Abuja Special Needs Parents', city: 'Abuja', members: 156, meetup: 'Bi-weekly' },
    { name: 'Port Harcourt Support Circle', city: 'Port Harcourt', members: 89, meetup: 'Monthly' },
    { name: 'Online Parent Community', city: 'Online', members: 1240, meetup: 'Daily discussions' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Support Groups</h1>
          <p className="text-xl text-gray-700">Connect with parents in your area or online. Share experiences, find resources, and build friendships with people who understand your journey.</p>
        </div>
      </div>

      {/* Support Groups List */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search groups..."
              className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
            />
            <select className="px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500">
              <option>All Locations</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Port Harcourt</option>
              <option>Online</option>
            </select>
          </div>
        </div>

        {/* Groups List */}
        <div className="space-y-4 mb-16">
          {groups.map((group, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:shadow-lg transition hover:border-green-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{group.name}</h3>
                  <div className="grid grid-cols-3 gap-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="text-green-600" />
                      <span>{group.city}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiUsers className="text-green-600" />
                      <span>{group.members} members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="text-green-600" />
                      <span>{group.meetup}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition whitespace-nowrap">
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Group */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Don't see a group in your area?</h2>
          <p className="text-gray-600 mb-6">Start your own support group and connect with local parents. We'll help you get organized.</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Start a Group
          </button>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Emotional Support</h3>
            <p className="text-gray-600">Find people who truly understand what you're going through.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Share Resources</h3>
            <p className="text-gray-600">Learn from others' experiences and discover helpful resources.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Build Friendships</h3>
            <p className="text-gray-600">Connect with people who become real friends and allies.</p>
          </div>
        </div>

        <Link href="/community" className="text-green-600 font-semibold hover:text-green-700">
          ← Back to Community
        </Link>
      </div>
    </div>
  );
}
