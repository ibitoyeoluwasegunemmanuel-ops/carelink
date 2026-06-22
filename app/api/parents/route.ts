import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// POST /api/parents - Create parent profile
export async function POST(request: NextRequest) {
  try {
    const {
      user_id,
      relationship_to_child,
      children_count,
      household_adults,
      is_primary_caregiver,
      primary_concern,
      secondary_concerns,
      budget_per_consultation,
      availability_timezone,
    } = await request.json();

    // Validate required fields
    if (!user_id || !relationship_to_child) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if parent profile already exists
    const { data: existing } = await supabase
      .from('parent_profiles')
      .select('id')
      .eq('user_id', user_id)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'Parent profile already exists' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('parent_profiles')
      .insert([
        {
          user_id,
          relationship_to_child,
          children_count: children_count || 1,
          household_adults: household_adults || 1,
          is_primary_caregiver: is_primary_caregiver ?? true,
          primary_concern,
          secondary_concerns: secondary_concerns || [],
          budget_per_consultation,
          availability_timezone,
        },
      ])
      .select()
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

// GET /api/parents/me - Get current user's parent profile
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { data, error } = await supabase
      .from('parent_profiles')
      .select(`
        id,
        user_id,
        relationship_to_child,
        children_count,
        household_adults,
        is_primary_caregiver,
        primary_concern,
        secondary_concerns,
        budget_per_consultation,
        availability_timezone,
        is_active
      `)
      .eq('user_id', userId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Parent profile not found' },
          { status: 404 }
        );
      }
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
