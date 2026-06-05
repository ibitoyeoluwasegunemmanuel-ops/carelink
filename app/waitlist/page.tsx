import { Metadata } from 'next';
import ParentWaitlistForm from '@/components/waitlist/ParentWaitlistForm';
import ExpertWaitlistForm from '@/components/waitlist/ExpertWaitlistForm';
import PartnershipInquiryForm from '@/components/waitlist/PartnershipInquiryForm';
import { FiCheckCircle, FiUsers, FiBook, FiTrendingUp } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Join CareLink Africa - Launch Early Access',
  description: 'Get early access to CareLink Africa. Connect families with verified experts and trusted resources.',
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero Section */}
      <div className="section-container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Early Access to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">CareLink Africa</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Africa's trusted platform connecting families with verified special needs experts, quality resources, and supportive communities.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <FiUsers className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-900">100+ Verified Experts</p>
            </div>
            <div className="text-center">
              <FiBook className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-900">70+ Resources</p>
            </div>
            <div className="text-center">
              <FiTrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-900">Real Community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why CareLink Section */}
      <div className="bg-white border-t border-gray-100">
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Join CareLink?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Find Verified Experts</h3>
                  <p className="text-gray-600">Licensed professionals, verified credentials, trusted by families across Africa.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Access Quality Resources</h3>
                  <p className="text-gray-600">Articles, guides, and tools written by experts and reviewed by parents.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Join a Real Community</h3>
                  <p className="text-gray-600">Connect with other parents, share experiences, celebrate wins together.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Trusted & Moderated</h3>
                  <p className="text-gray-600">Safe space designed by parents and experts. Active moderation, clear guidelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Forms Section */}
      <div className="section-container py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Join the CareLink Community</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Parents */}
          <div className="card">
            <div className="mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Parents</h3>
              <p className="text-gray-600 text-sm mt-1">Access experts and support</p>
            </div>

            <ParentWaitlistForm />
          </div>

          {/* Experts */}
          <div className="card">
            <div className="mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <FiCheckCircle className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Experts</h3>
              <p className="text-gray-600 text-sm mt-1">Reach families, build reputation</p>
            </div>

            <ExpertWaitlistForm />
          </div>

          {/* Partners */}
          <div className="card">
            <div className="mb-6">
              <div className="w-12 h-12 bg-golden-100 rounded-lg flex items-center justify-center mb-4">
                <FiTrendingUp className="w-6 h-6 text-golden-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Partners</h3>
              <p className="text-gray-600 text-sm mt-1">Collaborate & expand reach</p>
            </div>

            <PartnershipInquiryForm />
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-orange-50 border-t border-orange-100">
        <div className="section-container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Trust & Traction</h2>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-orange-600">100+</p>
                <p className="text-gray-600 text-sm mt-2">Verified Experts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600">1000+</p>
                <p className="text-gray-600 text-sm mt-2">Community Posts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600">15+</p>
                <p className="text-gray-600 text-sm mt-2">Strategic Partners</p>
              </div>
            </div>

            <p className="text-gray-600 mt-8 text-sm">
              Launching in June 2026 with substance, trust, and real community.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="section-container py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Early access members get: exclusive updates, founding member status, and priority expert matching.
          </p>
          <p className="text-xs text-gray-500">
            We respect your privacy. Your information is secure and will never be sold.
          </p>
        </div>
      </div>
    </div>
  );
}
