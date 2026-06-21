import Link from 'next/link';
import { FiTarget, FiUsers, FiHeart } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About CareLink Africa</h1>
          <p className="text-xl text-gray-700">Empowering families with special needs children through connection, knowledge, and support.</p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Mission */}
        <div className="mb-16">
          <div className="flex items-start space-x-6 mb-12">
            <FiTarget className="text-4xl text-indigo-600 flex-shrink-0 mt-2" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                To connect families of children with special needs across Africa with verified experts, quality resources, and supportive communities.
              </p>
              <p className="text-gray-600">
                We believe that every family deserves access to trustworthy professionals, honest information, and genuine community support. Geography, resources, or uncertainty shouldn't stand in the way.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex items-start space-x-6 mb-12">
            <FiUsers className="text-4xl text-indigo-600 flex-shrink-0 mt-2" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                A continent where special needs parenting is supported by verified experts, quality information, and thriving communities.
              </p>
              <p className="text-gray-600">
                Imagine a place where a parent in Lagos, Abuja, or Port Harcourt can instantly connect with the right specialist, read trustworthy information, and find others who understand their journey.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex items-start space-x-6">
            <FiHeart className="text-4xl text-indigo-600 flex-shrink-0 mt-2" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Trust:</strong> Verified experts, quality-checked content, transparent practices</li>
                <li><strong>Empowerment:</strong> Families make informed decisions with reliable information</li>
                <li><strong>Community:</strong> Connection reduces isolation and builds mutual support</li>
                <li><strong>Accessibility:</strong> Available to all families regardless of location or resources</li>
                <li><strong>Excellence:</strong> Everything we do is held to the highest standard</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-indigo-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Team</h2>
          <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            We're a diverse team of parents, healthcare professionals, technologists, and community advocates dedicated to making special needs parenting less isolating and more supported.
          </p>
          <p className="text-gray-600 text-center">
            We're currently a lean team building something meaningful. We're always looking for passionate people to join us. If you care about this mission, reach out.
          </p>
        </div>

        {/* Why We Started */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why We Started</h2>
          <p className="text-lg text-gray-700 mb-6">
            Too many families with special needs children face the same challenges: How do you find a trusted specialist? How do you know if the information you're reading is accurate? How do you connect with parents who truly understand?
          </p>
          <p className="text-lg text-gray-700 mb-6">
            These are real questions that deserve real answers. We started CareLink Africa because we believed no family should have to figure this out alone.
          </p>
          <p className="text-gray-600">
            Every expert on our platform is verified. Every article is expert-reviewed. Every community conversation is moderated. We're building something families can actually trust.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">Be part of the movement to support families across Africa</p>
          <Link href="/waitlist" className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
            Get Early Access
          </Link>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-indigo-600 font-semibold hover:text-indigo-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
