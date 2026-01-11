import { NextRequest, NextResponse } from 'next/server';
import { sendFacebookEvent, UserData, CustomData } from '@/lib/facebook-capi';

// ============================================
// FACEBOOK CONVERSIONS API ENDPOINT
// ============================================
// Server-side endpoint to send events to Facebook

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      eventName,
      userData,
      customData,
      eventSourceUrl,
      eventId,
    }: {
      eventName: string;
      userData: UserData;
      customData?: CustomData;
      eventSourceUrl?: string;
      eventId?: string;
    } = body;

    // Validate required fields
    if (!eventName) {
      return NextResponse.json(
        { error: 'Missing eventName' },
        { status: 400 }
      );
    }

    if (!userData) {
      return NextResponse.json(
        { error: 'Missing userData' },
        { status: 400 }
      );
    }

    // Extract client IP and User Agent automatically
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    const clientUserAgent = request.headers.get('user-agent') || 'unknown';

    // Merge client data with provided user data
    const enrichedUserData: UserData = {
      ...userData,
      clientIpAddress: clientIp,
      clientUserAgent: clientUserAgent,
    };

    // Send event to Facebook
    const result = await sendFacebookEvent(
      eventName,
      enrichedUserData,
      customData,
      eventSourceUrl,
      eventId
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to send event' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Event sent to Facebook CAPI',
      eventId,
    });
  } catch (error) {
    console.error('Facebook CAPI API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optionally support GET for health checks
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Facebook Conversions API',
    configured: !!process.env.FACEBOOK_CONVERSION_API_ACCESS_TOKEN,
  });
}



