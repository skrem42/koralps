import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Send Pushover notification - accepts the full request body
async function sendPushoverNotification(body: Record<string, unknown>) {
  const userKey = process.env.PUSHOVER_USER_KEY;
  const appToken = process.env.PUSHOVER_APP_TOKEN;

  if (!userKey || !appToken) {
    console.warn('Pushover credentials not configured');
    return;
  }

  // Extract fields - handle all variations from different forms
  const {
    name,
    firstName,
    lastName,
    email,
    phone,
    instagram,
    socialHandle,
    revenue,
    currentRevenue, // CreatorApplication uses this
    about,
    challenge,
    leadType,
    leadMagnet,
    avatar,
    source,
  } = body as Record<string, string | undefined>;

  // Build lead name from available fields
  const leadName = name || 
    [firstName, lastName].filter(Boolean).join(' ') || 
    'Unknown';

  // Get earnings from either field
  const earnings = revenue || currentRevenue;

  // Determine lead type label
  let typeLabel = 'Agency Application';
  if (leadType === 'lead_magnet') {
    typeLabel = `Lead Magnet: ${leadMagnet || 'unknown'}`;
  } else if (leadType === 'application') {
    typeLabel = `Application: ${avatar || 'direct'}`;
  }

  // Build notification message
  const lines = [
    `👤 ${leadName}`,
    phone ? `📞 ${phone}` : null,
    email ? `📧 ${email}` : null,
    instagram || socialHandle ? `📱 ${instagram || socialHandle}` : null,
    earnings ? `💰 ${earnings}` : null,
    about ? `📝 ${about.slice(0, 100)}${about.length > 100 ? '...' : ''}` : null,
    challenge ? `🎯 ${challenge.slice(0, 100)}${challenge.length > 100 ? '...' : ''}` : null,
    '',
    typeLabel,
    source ? `🔗 ${source}` : null,
  ].filter(Boolean).join('\n');

  try {
    await fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: appToken,
        user: userKey,
        title: '🔥 New Lead!',
        message: lines,
        priority: 1, // High priority - bypasses quiet hours
        sound: 'cashregister',
      }),
    });
  } catch (error) {
    console.error('Failed to send Pushover notification:', error);
  }
}

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

    // Send instant mobile notification (don't await to avoid slowing down response)
    sendPushoverNotification(body);

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

