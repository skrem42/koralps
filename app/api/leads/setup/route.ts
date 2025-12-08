import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Visit /api/leads/setup once to create the table
export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        lead_magnet VARCHAR(255),
        source TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    return NextResponse.json({ message: 'Table created successfully' });
  } catch (error) {
    console.error('Failed to create table:', error);
    return NextResponse.json({ error: 'Failed to create table' }, { status: 500 });
  }
}

