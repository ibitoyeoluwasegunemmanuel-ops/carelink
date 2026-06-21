import Link from 'next/link';
import { FiBook, FiVideo, FiHelpCircle } from 'react-icons/fi';

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Learning Center</h1>
          <p className="text-xl text-gray-700">Expert-written resources to help you understand conditions, treatment options, and support strategies.</p>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Articles */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-lg transition">
            <FiBook className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Articles & Guides</h2>
            <p className="text-gray-600 mb-6">In-depth articles covering diagnosis, treatment, therapy, education, and daily life strategies for families.</p>
            <button className="text-orange-600 font-semibold hover:text-orange-700">
              Browse Articles →
            </button>
          </div>

          {/* Video Resources */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-lg transition">
            <FiVideo className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Video Lessons</h2>
            <p className="text-gray-600 mb-6">Watch expert-led videos about therapies, parenting strategies, and how to navigate the healthcare system.</p>
            <button className="text-orange-600 font-semibold hover:text-orange-700">
              Watch Videos →
            </button>
          </div>

          {/* FAQs */}
          <div className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-lg transition">
            <FiHelpCircle className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">FAQs</h2>
            <p className="text-gray-600 mb-6">Find quick answers to common questions about diagnoses, treatments, schools, therapy, and daily challenges.</p>
            <button className="text-orange-600 font-semibold hover:text-orange-700">
              Read FAQs →
            </button>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-orange-600 font-bold">→</span>
              <div>
                <h3 className="font-semibold text-gray-900">Understanding Your Child's Diagnosis</h3>
                <p className="text-sm text-gray-600">What you need to know after diagnosis</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-orange-600 font-bold">→</span>
              <div>
                <h3 className="font-semibold text-gray-900">Finding and Working with Therapists</h3>
                <p className="text-sm text-gray-600">Speech, occupational, and behavioral therapy</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-orange-600 font-bold">→</span>
              <div>
                <h3 className="font-semibold text-gray-900">School and Education Rights</h3>
                <p className="text-sm text-gray-600">IEPs, accommodations, and advocacy</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-orange-600 font-bold">→</span>
              <div>
                <h3 className="font-semibold text-gray-900">Daily Life & Parenting Strategies</h3>
                <p className="text-sm text-gray-600">Practical tips for home and community</p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/" className="text-orange-600 font-semibold hover:text-orange-700">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
