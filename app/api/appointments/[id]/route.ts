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

// PUT /api/appointments/[id] - Update appointment (confirm, cancel, reschedule)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = request.headers.get('x-user-id');
    const userType = request.headers.get('x-user-type');

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { action, cancellation_reason } = await request.json();

    if (!['confirm', 'cancel'].includes(action)) {
      return NextResponse.json(
        { error: 'Invalid action' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    // Get appointment
    const { data: appointment, error: appointmentError } = await supabase
      .from('appointments')
      .select(`
        id,
        parent_id,
        expert_id,
        status
      `)
      .eq('id', params.id)
      .single();

    if (appointmentError || !appointment) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      );
    }

    // Verify authorization
    let isAuthorized = false;
    if (userType === 'parent') {
      const { data: parent } = await supabase
        .from('parent_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();
      isAuthorized = parent?.id === appointment.parent_id;
    } else if (userType === 'expert') {
      const { data: expert } = await supabase
        .from('expert_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();
      isAuthorized = expert?.id === appointment.expert_id;
    }

    if (!isAuthorized) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    let updates: any = {
      updated_at: new Date().toISOString(),
    };

    if (action === 'confirm') {
      if (userType === 'parent') {
        updates.parent_confirmed_at = new Date().toISOString();
        updates.status = 'confirmed';
      } else if (userType === 'expert') {
        updates.expert_confirmed_at = new Date().toISOString();
        updates.status = 'confirmed';
      }
    } else if (action === 'cancel') {
      updates.status = 'cancelled';
      updates.cancellation_reason = cancellation_reason || null;
      updates.cancellation_by = userType;
    }

    const { data, error } = await supabase
      .from('appointments')
      .update(updates)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET /api/appointments/[id] - Get appointment details
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = request.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('appointments')
      .select(`
        id,
        parent_id,
        expert_id,
        child_id,
        scheduled_at,
        duration_minutes,
        status,
        consultation_type,
        notes,
        parent_confirmed_at,
        expert_confirmed_at,
        created_at,
        expert_profiles:expert_id (
          id,
          specialization,
          hourly_rate,
          users:user_id (
            full_name
          )
        ),
        parent_profiles:parent_id (
          id,
          relationship_to_child
        )
      `)
      .eq('id', params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Appointment not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    // Verify authorization
    const userType = request.headers.get('x-user-type');
    let isAuthorized = false;

    if (userType === 'parent') {
      const { data: parent } = await supabase
        .from('parent_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();
      isAuthorized = parent?.id === data.parent_id;
    } else if (userType === 'expert') {
      const { data: expert } = await supabase
        .from('expert_profiles')
        .select('id')
        .eq('user_id', userId)
        .single();
      isAuthorized = expert?.id === data.expert_id;
    }

    if (!isAuthorized) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
