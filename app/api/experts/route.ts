import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// GET /api/experts - List experts with search and filtering
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const specialization = searchParams.get('specialization');
    const city = searchParams.get('city');
    const status = searchParams.get('status') || 'approved';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    let query = supabase
      .from('expert_profiles')
      .select(`
        id,
        user_id,
        specialization,
        bio,
        credentials,
        hourly_rate,
        years_of_experience,
        languages,
        service_modality,
        avatar_url,
        average_rating,
        total_consultations,
        city,
        users:user_id (
          full_name,
          phone_number
        )
      `)
      .eq('approval_status', status)
      .eq('is_active', true);

    if (specialization) {
      query = query.ilike('specialization', `%${specialization}%`);
    }

    if (city) {
      query = query.ilike('city', `%${city}%`);
    }

    const { data, error, count } = await query
      .range(offset, offset + limit - 1)
      .order('average_rating', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      data,
      pagination: {
        page,
        limit,
        total: count,
        pages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/experts - Create expert profile
export async function POST(request: NextRequest) {
  try {
    const {
      user_id,
      specialization,
      bio,
      credentials,
      license_number,
      hourly_rate,
      consultation_duration_minutes,
      years_of_experience,
      languages,
      service_modality,
      city,
    } = await request.json();

    // Validate required fields
    if (!user_id || !specialization || !license_number || !hourly_rate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if expert profile already exists
    const { data: existing } = await supabase
      .from('expert_profiles')
      .select('id')
      .eq('user_id', user_id)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'Expert profile already exists' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('expert_profiles')
      .insert([
        {
          user_id,
          specialization,
          bio,
          credentials,
          license_number,
          hourly_rate: parseFloat(hourly_rate),
          consultation_duration_minutes: consultation_duration_minutes || 60,
          years_of_experience: years_of_experience || 0,
          languages: languages || ['English'],
          service_modality: service_modality || ['virtual'],
          city,
          approval_status: 'pending',
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
