import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Send Pushover notification
async function sendPushoverNotification(lead: {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  instagram?: string;
  socialHandle?: string;
  revenue?: string;
  leadType?: string;
  leadMagnet?: string;
  avatar?: string;
  source?: string;
}) {
  const userKey = process.env.PUSHOVER_USER_KEY;
  const appToken = process.env.PUSHOVER_APP_TOKEN;

  if (!userKey || !appToken) {
    console.warn('Pushover credentials not configured');
    return;
  }

  // Build lead name from available fields
  const leadName = lead.name || 
    [lead.firstName, lead.lastName].filter(Boolean).join(' ') || 
    'Unknown';

  // Build notification message
  const lines = [
    `👤 ${leadName}`,
    lead.phone ? `📞 ${lead.phone}` : null,
    lead.email ? `📧 ${lead.email}` : null,
    lead.instagram || lead.socialHandle ? `📱 ${lead.instagram || lead.socialHandle}` : null,
    lead.revenue ? `💰 ${lead.revenue}` : null,
    '',
    `Type: ${lead.leadType || 'direct'}`,
    lead.leadMagnet ? `Lead Magnet: ${lead.leadMagnet}` : null,
    lead.avatar ? `Avatar: ${lead.avatar}` : null,
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
    sendPushoverNotification({
      name,
      firstName,
      lastName,
      email,
      phone,
      instagram,
      socialHandle,
      revenue,
      leadType,
      leadMagnet,
      avatar,
      source,
    });

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

