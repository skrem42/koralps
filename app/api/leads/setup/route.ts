import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Visit /api/leads/setup once to create/update the table
export async function GET() {
  try {
    // Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        instagram VARCHAR(255),
        lead_magnet VARCHAR(255),
        source TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Add columns if they don't exist (for existing tables)
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS first_name VARCHAR(255)`;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS last_name VARCHAR(255)`;
    await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS instagram VARCHAR(255)`;

    return NextResponse.json({ message: 'Table created/updated successfully' });
  } catch (error) {
    console.error('Failed to create table:', error);
    return NextResponse.json({ error: 'Failed to create table' }, { status: 500 });
  }
}

