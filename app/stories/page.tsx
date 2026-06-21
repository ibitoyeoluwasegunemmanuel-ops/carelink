import Link from 'next/link';
import { FiHeart, FiStar } from 'react-icons/fi';

export default function StoriesPage() {
  const stories = [
    {
      title: 'From Diagnosis to Confidence',
      author: 'Ngozi M.',
      condition: 'Autism Spectrum Disorder',
      excerpt: 'Finding the right experts changed everything for our family. Today, our son is thriving in school with proper support.',
    },
    {
      title: 'Speech Therapy Success',
      author: 'Chidiebere O.',
      condition: 'Speech & Language Delay',
      excerpt: 'What started as silence became conversation. Here\'s how we found the right speech therapist and saw incredible progress.',
    },
    {
      title: 'School Advocacy Win',
      author: 'Adeola L.',
      condition: 'ADHD',
      excerpt: 'We fought for our daughter\'s rights in school and won. Here\'s what we learned about IEPs and parent advocacy.',
    },
    {
      title: 'Finding Our Community',
      author: 'Chioma A.',
      condition: 'Down Syndrome',
      excerpt: 'I thought we were alone until we found our support group. The friendships and knowledge we\'ve gained is priceless.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-50 via-white to-rose-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
          <p className="text-xl text-gray-700">Real families, real progress. Read inspiring stories from parents who've navigated challenges and found hope.</p>
        </div>
      </div>

      {/* Stories */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-8 mb-16">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-lg transition hover:border-rose-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h2>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span className="font-semibold">{story.author}</span>
                    <span>•</span>
                    <span className="text-rose-600 font-semibold">{story.condition}</span>
                  </div>
                </div>
                <FiHeart className="text-rose-600 text-2xl flex-shrink-0" />
              </div>
              <p className="text-gray-700 mb-6 text-lg">{story.excerpt}</p>
              <button className="text-rose-600 font-semibold hover:text-rose-700">
                Read Full Story →
              </button>
            </div>
          ))}
        </div>

        {/* Share Your Story */}
        <div className="bg-rose-50 rounded-lg p-8 mb-12 text-center">
          <FiStar className="text-4xl text-rose-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Share Your Story</h2>
          <p className="text-gray-600 mb-6">Have a success story or milestone to share? Your experience could inspire and help other families on this journey.</p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition">
            Submit Your Story
          </button>
        </div>

        {/* Story Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
          <div>
            <p className="text-4xl font-bold text-rose-600 mb-2">500+</p>
            <p className="text-gray-600">Stories shared</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-rose-600 mb-2">10K+</p>
            <p className="text-gray-600">People inspired</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-rose-600 mb-2">100%</p>
            <p className="text-gray-600">Real families</p>
          </div>
        </div>

        <Link href="/community" className="text-rose-600 font-semibold hover:text-rose-700">
          ← Back to Community
        </Link>
      </div>
    </div>
  );
}
