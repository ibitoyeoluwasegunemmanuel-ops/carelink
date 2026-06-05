import Link from 'next/link';
import { FiMessageCircle, FiUsers } from 'react-icons/fi';

export default function ForumsPage() {
  const forums = [
    { name: 'Autism Spectrum Disorder', posts: 342, members: 1205 },
    { name: 'ADHD Support', posts: 218, members: 890 },
    { name: 'Speech & Language Delays', posts: 156, members: 654 },
    { name: 'Cerebral Palsy', posts: 89, members: 412 },
    { name: 'Down Syndrome', posts: 124, members: 523 },
    { name: 'Parenting Strategies', posts: 267, members: 1450 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Discussion Forums</h1>
          <p className="text-xl text-gray-700">Join conversations with parents navigating similar challenges. Share experiences, ask questions, and support each other.</p>
        </div>
      </div>

      {/* Forums List */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Search & Filter */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search forums..."
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Forums Grid */}
        <div className="space-y-4 mb-16">
          {forums.map((forum, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:shadow-lg transition hover:border-blue-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{forum.name}</h3>
                  <div className="flex space-x-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FiMessageCircle className="text-blue-600" />
                      <span>{forum.posts} discussions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiUsers className="text-blue-600" />
                      <span>{forum.members} members</span>
                    </div>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Forum */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Want to start your own forum?</h2>
          <p className="text-gray-600 mb-6">Create a space for conversations about a specific condition or topic that matters to you.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Create New Forum
          </button>
        </div>

        {/* Forum Rules */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Forum Guidelines</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Be respectful and supportive of all members</li>
            <li>✓ Share personal experiences and advice, not medical recommendations</li>
            <li>✓ Keep discussions on topic for the specific forum</li>
            <li>✓ No spam, promotional content, or self-promotion</li>
            <li>✓ Report inappropriate posts to moderators</li>
          </ul>
        </div>

        <Link href="/community" className="text-blue-600 font-semibold hover:text-blue-700">
          ← Back to Community
        </Link>
      </div>
    </div>
  );
}
