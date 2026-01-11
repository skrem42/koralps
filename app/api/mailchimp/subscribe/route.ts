import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, instagram, phone, tags, leadMagnet } = body;

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!API_KEY || !AUDIENCE_ID || !SERVER_PREFIX) {
      console.warn('Mailchimp not configured - skipping subscription');
      return NextResponse.json(
        { success: true, skipped: true, message: 'Mailchimp not configured' },
        { status: 200 }
      );
    }

    // Add subscriber to Mailchimp
    const response = await fetch(
      `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName || '',
            LNAME: lastName || '',
            PHONE: phone || '',
            INSTAGRAM: instagram || '',
          },
          tags: tags || [leadMagnet || 'lead-magnet'],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Handle "already subscribed" as success
      if (data.title === 'Member Exists') {
        console.log('Subscriber already exists in Mailchimp:', email);
        return NextResponse.json({ 
          success: true, 
          alreadySubscribed: true,
          message: 'Already subscribed'
        });
      }
      
      console.error('Mailchimp API error:', data);
      throw new Error(data.detail || 'Failed to subscribe');
    }

    console.log('Successfully subscribed to Mailchimp:', email);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    // Don't fail the entire lead capture if Mailchimp fails
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe to Mailchimp' },
      { status: 200 } // Return 200 so lead capture continues
    );
  }
}




