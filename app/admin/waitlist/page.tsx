'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import { FiDownload, FiRefreshCw, FiUsers, FiCheckCircle, FiMessageSquare } from 'react-icons/fi';

interface WaitlistStats {
  parents: number;
  experts: number;
  partnerships: number;
}

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  location?: string;
  phone?: string;
  created_at: string;
  status?: string;
  [key: string]: any;
}

export default function WaitlistAdminPage() {
  const [stats, setStats] = useState<WaitlistStats>({ parents: 0, experts: 0, partnerships: 0 });
  const [parents, setParents] = useState<WaitlistEntry[]>([]);
  const [experts, setExperts] = useState<WaitlistEntry[]>([]);
  const [partnerships, setPartnerships] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'parents' | 'experts' | 'partnerships'>('overview');

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  const fetchWaitlistData = async () => {
    setLoading(true);
    try {
      const supabase = createClient();

      const [parentsRes, expertsRes, partnershipsRes] = await Promise.all([
        supabase.from('parent_waitlist').select('*').order('created_at', { ascending: false }),
        supabase.from('expert_waitlist').select('*').order('created_at', { ascending: false }),
        supabase.from('partnership_inquiries').select('*').order('created_at', { ascending: false })
      ]);

      setParents(parentsRes.data || []);
      setExperts(expertsRes.data || []);
      setPartnerships(partnershipsRes.data || []);

      setStats({
        parents: parentsRes.data?.length || 0,
        experts: expertsRes.data?.length || 0,
        partnerships: partnershipsRes.data?.length || 0
      });
    } catch (err) {
      console.error('Error fetching waitlist data:', err);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = (data: WaitlistEntry[], filename: string) => {
    if (data.length === 0) {
      alert('No data to export');
      return;
    }

    const headers = Object.keys(data[0]);
    const csv = [
      headers.join(','),
      ...data.map(row =>
        headers.map(header => {
          const value = row[header];
          if (typeof value === 'string' && value.includes(',')) {
            return `"${value}"`;
          }
          return value;
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const StatCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: number }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <Icon className="w-10 h-10 text-orange-500 opacity-20" />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="section-container py-12">
        <p className="text-gray-600">Loading waitlist data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="section-container py-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Waitlist Dashboard</h1>
          <button
            onClick={fetchWaitlistData}
            className="flex items-center gap-2 btn-primary text-sm"
          >
            <FiRefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatCard icon={FiUsers} label="Parent Waitlist" value={stats.parents} />
          <StatCard icon={FiCheckCircle} label="Expert Registrations" value={stats.experts} />
          <StatCard icon={FiMessageSquare} label="Partnership Inquiries" value={stats.partnerships} />
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border border-gray-200 mb-8">
          <div className="flex border-b border-gray-200">
            {(['overview', 'parents', 'experts', 'partnerships'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-4 font-medium text-sm border-b-2 transition ${
                  activeTab === tab
                    ? 'text-orange-600 border-orange-600'
                    : 'text-gray-600 border-transparent'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Summary</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• <strong>{stats.parents}</strong> parents are waiting for early access</p>
                  <p>• <strong>{stats.experts}</strong> experts have registered</p>
                  <p>• <strong>{stats.partnerships}</strong> organizations are interested in partnerships</p>
                  <p>• <strong>{stats.parents + stats.experts + stats.partnerships}</strong> total signups</p>
                </div>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={() => exportToCSV(parents, 'parents-waitlist')}
                    className="w-full flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition"
                  >
                    <FiDownload className="w-4 h-4" />
                    Export Parents
                  </button>
                  <button
                    onClick={() => exportToCSV(experts, 'experts-waitlist')}
                    className="w-full flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded hover:bg-teal-200 transition"
                  >
                    <FiDownload className="w-4 h-4" />
                    Export Experts
                  </button>
                  <button
                    onClick={() => exportToCSV(partnerships, 'partnerships-inquiries')}
                    className="w-full flex items-center gap-2 px-4 py-2 bg-golden-100 text-golden-700 rounded hover:bg-golden-200 transition"
                  >
                    <FiDownload className="w-4 h-4" />
                    Export Partnerships
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'parents' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Parent Waitlist ({parents.length})</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Phone</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Condition</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parents.map(parent => (
                        <tr key={parent.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">{parent.name}</td>
                          <td className="py-3 px-4">{parent.email}</td>
                          <td className="py-3 px-4">{parent.phone || '-'}</td>
                          <td className="py-3 px-4">{parent.location || '-'}</td>
                          <td className="py-3 px-4">{parent.child_condition || '-'}</td>
                          <td className="py-3 px-4 text-gray-500">
                            {new Date(parent.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'experts' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Expert Registrations ({experts.length})</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Phone</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Specialization</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {experts.map(expert => (
                        <tr key={expert.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">{expert.name}</td>
                          <td className="py-3 px-4">{expert.email}</td>
                          <td className="py-3 px-4">{expert.phone}</td>
                          <td className="py-3 px-4">{expert.specialization}</td>
                          <td className="py-3 px-4">{expert.location}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                              {expert.status || 'pending'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-500">
                            {new Date(expert.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'partnerships' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Partnership Inquiries ({partnerships.length})</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Organization</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Contact</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partnerships.map(partner => (
                        <tr key={partner.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">{partner.organization_name}</td>
                          <td className="py-3 px-4">{partner.contact_person}</td>
                          <td className="py-3 px-4">{partner.email}</td>
                          <td className="py-3 px-4">{partner.organization_type}</td>
                          <td className="py-3 px-4">{partner.location}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                              {partner.status || 'pending'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-500">
                            {new Date(partner.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
