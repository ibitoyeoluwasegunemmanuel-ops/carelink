import Link from 'next/link';
import { FiMessageCircle, FiUsers, FiHeart } from 'react-icons/fi';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-50 via-white to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Community</h1>
          <p className="text-xl text-gray-700">Connect with other parents, share experiences, and support each other on this journey.</p>
        </div>
      </div>

      {/* Community Sections */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Discussion Forums */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-lg transition">
            <FiMessageCircle className="text-4xl text-teal-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Discussion Forums</h2>
            <p className="text-gray-600 mb-6">Join conversations with other parents about specific conditions, treatments, and day-to-day challenges.</p>
            <Link href="/forums" className="text-teal-600 font-semibold hover:text-teal-700">
              Browse Forums →
            </Link>
          </div>

          {/* Support Groups */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-lg transition">
            <FiUsers className="text-4xl text-teal-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Support Groups</h2>
            <p className="text-gray-600 mb-6">Find and join support groups for families with similar experiences. Meet others who understand your journey.</p>
            <Link href="/support-groups" className="text-teal-600 font-semibold hover:text-teal-700">
              Find Groups →
            </Link>
          </div>

          {/* Success Stories */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-lg transition">
            <FiHeart className="text-4xl text-teal-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Success Stories</h2>
            <p className="text-gray-600 mb-6">Read inspiring stories from families who've navigated special needs parenting and found hope and progress.</p>
            <Link href="/stories" className="text-teal-600 font-semibold hover:text-teal-700">
              Read Stories →
            </Link>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-teal-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Guidelines</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Be respectful and kind to all members</li>
            <li>✓ Share experiences, not medical advice (unless you're a verified professional)</li>
            <li>✓ Protect privacy - don't share others' personal information</li>
            <li>✓ Keep discussions focused on supporting families</li>
            <li>✓ Report inappropriate content to moderators</li>
          </ul>
        </div>

        <Link href="/" className="text-teal-600 font-semibold hover:text-teal-700">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
