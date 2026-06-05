import { Metadata } from 'next';
import ParentWaitlistForm from '@/components/waitlist/ParentWaitlistForm';
import ExpertWaitlistForm from '@/components/waitlist/ExpertWaitlistForm';
import PartnershipInquiryForm from '@/components/waitlist/PartnershipInquiryForm';
import { FiCheckCircle, FiUsers, FiBook, FiMessageCircle, FiHeart, FiAward } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'CareLink Africa - Trusted Expert Support for Special Needs Families',
  description: 'Connect with verified special needs experts. Access quality resources. Join a supportive community. Get early access to CareLink Africa.',
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Emotion + Problem */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="section-container py-20 md:py-32">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                ✨ Early Access Launching June 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              You don't have to figure this out alone
            </h1>

            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              Raising a child with special needs is one of the most rewarding journeys—and one of the most challenging. You need answers. You need experts. You need people who understand.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              CareLink Africa connects you with verified professionals, trusted resources, and real parents who get it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#signup" className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Get Early Access
              </a>
              <a href="#story" className="inline-block bg-white text-orange-600 border-2 border-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
                Our Story
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">100+</p>
              <p className="text-gray-600 text-sm mt-1">Verified Experts</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">50+</p>
              <p className="text-gray-600 text-sm mt-1">Quality Resources</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">1000+</p>
              <p className="text-gray-600 text-sm mt-1">Community Posts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Story Section */}
      <div className="bg-white border-t border-gray-100" id="story">
        <div className="section-container py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why We Built CareLink</h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-12">
              <p>
                Special needs parenting is beautiful. It's also isolating.
              </p>

              <p>
                When you're navigating a diagnosis, finding therapies, advocating at school, or just trying to understand what comes next—you need more than Google. You need <strong>people who've been there</strong>. You need <strong>experts you can trust</strong>. You need a <strong>community that gets it</strong>.
              </p>

              <p>
                Across Africa, thousands of families are searching for answers. Many are finding incomplete information, unverified professionals, and communities that don't understand their experience.
              </p>

              <p>
                CareLink Africa exists to change that. We're building:
              </p>

              <ul className="space-y-3 ml-6">
                <li>✓ A network of verified experts—people whose credentials matter</li>
                <li>✓ Quality resources—written by professionals, tested by parents</li>
                <li>✓ Real community—where parents share, support, and celebrate wins together</li>
                <li>✓ A safe space—moderated, respectful, judgment-free</li>
              </ul>

              <p>
                This isn't a startup chasing venture capital. This is a mission to serve families who deserve better.
              </p>

              <p>
                <strong>We launch June 2026 with 100+ verified experts, 50+ quality resources, and a community ready to support you.</strong>
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
              <p className="text-gray-800 font-semibold mb-2">Early Access Members Get:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ First access to all platform features</li>
                <li>✓ Founding member status (lifetime recognition)</li>
                <li>✓ Priority expert matching</li>
                <li>✓ Shape the platform's future with your feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why CareLink Section - Benefits */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What You Get</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <FiAward className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Verified Experts</h3>
                  <p className="text-gray-600">Every expert's credentials checked. Real doctors, therapists, teachers—not just opinions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiBook className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Resources</h3>
                  <p className="text-gray-600">Articles written by experts. Reviewed by parents. Practical, honest, no marketing.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiHeart className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Real Community</h3>
                  <p className="text-gray-600">Connect with parents on the same journey. Share experiences. Celebrate wins. Feel understood.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiCheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Safe & Moderated</h3>
                  <p className="text-gray-600">Built by parents and experts. Active moderation. Clear guidelines. No judgment, only support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Forms Section */}
      <div className="section-container py-20 md:py-28" id="signup">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Join CareLink Africa</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Sign up today to get early access. No obligations. No spam. Just genuine support when we launch.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Parents */}
          <div className="card border-2 border-orange-200 hover:border-orange-400 transition">
            <div className="mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FiHeart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Parents</h3>
              <p className="text-gray-600 text-sm mt-1">Find experts. Join community. Get answers.</p>
            </div>

            <ParentWaitlistForm />

            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/?text=Hi%20CareLink%20Africa!%20I'm%20interested%20in%20early%20access.%20Please%20tell%20me%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition text-sm font-semibold"
              >
                <FiMessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Experts */}
          <div className="card border-2 border-teal-200 hover:border-teal-400 transition">
            <div className="mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <FiAward className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Experts</h3>
              <p className="text-gray-600 text-sm mt-1">Reach families. Build reputation. Help more.</p>
            </div>

            <ExpertWaitlistForm />

            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/?text=Hi%20CareLink%20Africa!%20I'm%20a%20professional%20interested%20in%20becoming%20a%20verified%20expert.%20Tell%20me%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition text-sm font-semibold"
              >
                <FiMessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Partners */}
          <div className="card border-2 border-amber-200 hover:border-amber-400 transition">
            <div className="mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Organizations</h3>
              <p className="text-gray-600 text-sm mt-1">Partner. Collaborate. Amplify impact.</p>
            </div>

            <PartnershipInquiryForm />

            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/?text=Hi%20CareLink%20Africa!%20My%20organization%20is%20interested%20in%20partnership%20opportunities.%20Let's%20talk."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition text-sm font-semibold"
              >
                <FiMessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - Social Proof */}
      <div className="bg-white border-t border-gray-100">
        <div className="section-container py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Parents & Experts Say</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Early testimonials from families and professionals who see the impact CareLink can make.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Testimonial Placeholder 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">👩‍🦱</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah M. - Parent</p>
                  <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Finally, a platform where I can find experts I trust AND connect with other parents who actually understand what we're going through."
              </p>
            </div>

            {/* Testimonial Placeholder 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨‍⚕️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Okafor - Pediatrician</p>
                  <p className="text-sm text-gray-600">Abuja, Nigeria</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This is exactly what our families need. A trusted platform to access quality information and expert guidance all in one place."
              </p>
            </div>
          </div>

          {/* Endorsements Section */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Supported By</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Partner Logo Placeholder 1 */}
              <div className="flex items-center justify-center">
                <div className="w-32 h-20 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold text-center px-4">[NGO Partner Logo]</span>
                </div>
              </div>

              {/* Partner Logo Placeholder 2 */}
              <div className="flex items-center justify-center">
                <div className="w-32 h-20 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold text-center px-4">[Hospital Partner Logo]</span>
                </div>
              </div>

              {/* Partner Logo Placeholder 3 */}
              <div className="flex items-center justify-center">
                <div className="w-32 h-20 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold text-center px-4">[Association Logo]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Launch Stats */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Launching With Substance</h3>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <p className="text-4xl font-bold text-orange-600">100+</p>
                <p className="text-gray-600 text-sm mt-2">Verified Experts</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-600">50+</p>
                <p className="text-gray-600 text-sm mt-2">Quality Resources</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-600">15+</p>
                <p className="text-gray-600 text-sm mt-2">Partner Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Footer */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 border-t border-orange-600">
        <div className="section-container py-16">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Don't Wait. Join Now.</h2>
            <p className="text-lg mb-6 opacity-95">
              Early access members shape the future of CareLink Africa. Get exclusive access, founding member status, and priority expert matching.
            </p>

            <a href="#signup" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition mb-4">
              Get Early Access
            </a>

            <p className="text-xs opacity-75">
              No credit card required. No spam. Just genuine support when we launch June 2026.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Footer */}
      <div className="bg-gray-900 text-white">
        <div className="section-container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Privacy protected</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">No spam ever</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Launch June 2026</span>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              © 2026 CareLink Africa. All rights reserved. • <a href="#" className="hover:text-white">Privacy Policy</a> • <a href="#" className="hover:text-white">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
