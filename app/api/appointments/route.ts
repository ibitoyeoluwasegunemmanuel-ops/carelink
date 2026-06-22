import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseKey);
}

// POST /api/appointments - Create appointment booking
export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const {
      expert_id,
      scheduled_at,
      duration_minutes,
      child_id,
      consultation_type,
      notes,
    } = await request.json();

    if (!expert_id || !scheduled_at) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    // Get parent profile
    const { data: parent, error: parentError } = await supabase
      .from('parent_profiles')
      .select('id')
      .eq('user_id', userId)
      .single();

    if (parentError || !parent) {
      return NextResponse.json(
        { error: 'Parent profile not found' },
        { status: 404 }
      );
    }

    // Verify expert exists and is approved
    const { data: expert, error: expertError } = await supabase
      .from('expert_profiles')
      .select('id, consultation_duration_minutes, approval_status')
      .eq('id', expert_id)
      .single();

    if (expertError || !expert || expert.approval_status !== 'approved') {
      return NextResponse.json(
        { error: 'Expert not available' },
        { status: 404 }
      );
    }

    // Check for scheduling conflicts
    const { data: conflicts } = await supabase
      .from('appointments')
      .select('id')
      .eq('expert_id', expert_id)
      .in('status', ['confirmed', 'pending'])
      .gte('scheduled_at', scheduled_at)
      .lt('scheduled_at', new Date(new Date(scheduled_at).getTime() + (duration_minutes || expert.consultation_duration_minutes) * 60000).toISOString());

    if (conflicts && conflicts.length > 0) {
      return NextResponse.json(
        { error: 'Time slot not available' },
        { status: 409 }
      );
    }

    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          parent_id: parent.id,
          expert_id,
          child_id: child_id || null,
          scheduled_at,
          duration_minutes: duration_minutes || expert.consultation_duration_minutes,
          consultation_type: consultation_type || 'initial',
          notes: notes || null,
          status: 'pending',
        },
      ])
      .select(`
        id,
        parent_id,
        expert_id,
        scheduled_at,
        duration_minutes,
        status,
        created_at
      `)
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/appointments - List user's appointments
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userType = request.headers.get('x-user-type');
    const status = request.nextUrl.searchParams.get('status');

    const supabase = getSupabaseClient();
    let query = supabase
      .from('appointments')
      .select(`
        id,
        parent_id,
        expert_id,
        scheduled_at,
        duration_minutes,
        status,
        consultation_type,
        parent_confirmed_at,
        expert_confirmed_at,
        created_at
      `);

    // Filter based on user type
    if (userType === 'parent') {
      const { data: parent } = await supabase
        .from('parent_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (!parent) {
        return NextResponse.json(
          { error: 'Parent profile not found' },
          { status: 404 }
        );
      }

      query = query.eq('parent_id', parent.id);
    } else if (userType === 'expert') {
      const { data: expert } = await supabase
        .from('expert_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (!expert) {
        return NextResponse.json(
          { error: 'Expert profile not found' },
          { status: 404 }
        );
      }

      query = query.eq('expert_id', expert.id);
    }

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query
      .order('scheduled_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
