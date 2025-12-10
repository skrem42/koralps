import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      // Lead magnet fields
      firstName, 
      lastName, 
      email, 
      phone, 
      instagram, 
      leadMagnet, 
      // Application form fields
      name,
      socialHandle,
      revenue,
      challenge,
      avatar,
      // Common fields
      source,
      leadType  // 'lead_magnet' or 'application'
    } = body;

    // Insert lead into database
    await sql`
      INSERT INTO leads (
        first_name, last_name, name, email, phone, instagram, 
        social_handle, revenue, challenge, lead_magnet, avatar, 
        source, lead_type, created_at
      )
      VALUES (
        ${firstName || null}, 
        ${lastName || null}, 
        ${name || null},
        ${email}, 
        ${phone || null}, 
        ${instagram || null},
        ${socialHandle || null},
        ${revenue || null},
        ${challenge || null},
        ${leadMagnet || null}, 
        ${avatar || null},
        ${source || null}, 
        ${leadType || null},
        NOW()
      )
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to save lead:', error);
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM leads ORDER BY created_at DESC LIMIT 100`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Failed to fetch leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

