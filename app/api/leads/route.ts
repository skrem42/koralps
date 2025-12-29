import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const DEBUG_ENDPOINT = 'http://127.0.0.1:7242/ingest/9774472e-7695-4b7b-9ec5-379b9c2149af';

// Send Pushover notification - accepts the full request body
async function sendPushoverNotification(body: Record<string, unknown>) {
  const userKey = process.env.PUSHOVER_USER_KEY;
  const appToken = process.env.PUSHOVER_APP_TOKEN;

  // #region agent log
  fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:sendPushoverNotification',message:'Entered sendPushoverNotification',data:{hasUserKey:!!userKey,hasAppToken:!!appToken,bodyKeys:Object.keys(body)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B'})}).catch(()=>{});
  // #endregion

  if (!userKey || !appToken) {
    // #region agent log
    fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:sendPushoverNotification',message:'Missing Pushover credentials',data:{hasUserKey:!!userKey,hasAppToken:!!appToken},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
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
    // #region agent log
    fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:sendPushoverNotification',message:'About to call Pushover API',data:{messagePreview:lines.slice(0,200)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
    // #endregion

    const pushoverResponse = await fetch('https://api.pushover.net/1/messages.json', {
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

    const pushoverResult = await pushoverResponse.text();
    // #region agent log
    fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:sendPushoverNotification',message:'Pushover API response',data:{status:pushoverResponse.status,ok:pushoverResponse.ok,result:pushoverResult},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
  } catch (error) {
    // #region agent log
    fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:sendPushoverNotification',message:'Pushover API error',data:{error:String(error)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    console.error('Failed to send Pushover notification:', error);
  }
}

export async function POST(request: Request) {
  // #region agent log
  fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:POST',message:'POST handler entered',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
  // #endregion

  try {
    const body = await request.json();

    // #region agent log
    fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:POST',message:'Request body received',data:{leadType:body.leadType,leadMagnet:body.leadMagnet,avatar:body.avatar,source:body.source,bodyKeys:Object.keys(body)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B,E'})}).catch(()=>{});
    // #endregion

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
      currentRevenue,
      challenge,
      about,
      avatar,
      // Common fields
      source,
      leadType  // 'lead_magnet' or 'application'
    } = body;

    // Send instant mobile notification FIRST - speed to lead is critical!
    // This ensures you get notified even if DB has issues
    // #region agent log
    await fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:POST',message:'Sending notification BEFORE db insert',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    await sendPushoverNotification(body);

    // Then save to database (only if database is configured)
    if (process.env.POSTGRES_URL) {
      try {
        await sql`
          INSERT INTO leads (
            first_name, last_name, name, email, phone, instagram, 
            social_handle, revenue, challenge, about, lead_magnet, avatar, 
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
            ${revenue || currentRevenue || null},
            ${challenge || null},
            ${about || null},
            ${leadMagnet || null}, 
            ${avatar || null},
            ${source || null}, 
            ${leadType || null},
            NOW()
          )
        `;
        // #region agent log
        await fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:POST',message:'DB insert succeeded',data:{},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
        // #endregion
      } catch (dbError) {
        // Log DB error but don't fail the request - notification already sent
        // #region agent log
        fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:POST',message:'DB insert failed (notification already sent)',data:{error:String(dbError)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
        // #endregion
        console.error('Failed to save lead to DB:', dbError);
      }
    } else {
      console.log('Database not configured - skipping DB insert (notification sent successfully)');
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    // #region agent log
    fetch(DEBUG_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:POST',message:'Caught error in POST handler',data:{error:String(error)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
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

