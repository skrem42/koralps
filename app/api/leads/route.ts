import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, instagram, leadMagnet, source } = body;

    // Insert lead into database
    await sql`
      INSERT INTO leads (first_name, last_name, email, phone, instagram, lead_magnet, source, created_at)
      VALUES (${firstName || null}, ${lastName || null}, ${email}, ${phone || null}, ${instagram || null}, ${leadMagnet || null}, ${source || null}, NOW())
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

