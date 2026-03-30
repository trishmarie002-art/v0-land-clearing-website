import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: 'Jay\'s Land Clearing <onboarding@resend.dev>',
      to: ['jayslandclearingservices@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #EAB308; padding: 20px; text-align: center;">
            <h1 style="color: #000; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #EAB308; padding-bottom: 10px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 10px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 10px 0; color: #333;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Service Interested In:</td>
                <td style="padding: 10px 0; color: #333;">${service || 'Not specified'}</td>
              </tr>
            </table>
            
            <h2 style="color: #333; border-bottom: 2px solid #EAB308; padding-bottom: 10px; margin-top: 30px;">Message</h2>
            <p style="color: #333; line-height: 1.6; background-color: #fff; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
            
            <div style="margin-top: 30px; padding: 15px; background-color: #EAB308; border-radius: 5px;">
              <p style="margin: 0; color: #000; font-weight: bold;">
                Quick Actions:
              </p>
              <p style="margin: 10px 0 0 0; color: #000;">
                <a href="tel:${phone}" style="color: #000; margin-right: 20px;">Call Customer</a>
                <a href="mailto:${email}" style="color: #000;">Reply via Email</a>
              </p>
            </div>
          </div>
          <div style="background-color: #1a1a1a; padding: 15px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">
              This email was sent from the contact form on your website.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
