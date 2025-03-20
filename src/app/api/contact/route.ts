import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 检查环境变量是否存在
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.RECIPIENT_EMAIL) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // 创建邮件传输器
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        // service: 'outlo', // 或使用其他服务如 'outlook', 'yahoo' 等
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
        // 禁用TLS验证，仅用于测试！
        tls: {
          rejectUnauthorized: false // 生产环境应移除此项
        }
      });
    } catch (error) {
      console.error('Failed to create transport:', error);
      return NextResponse.json(
        { success: false, message: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // 发送邮件
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Contact Form: ${subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      return NextResponse.json(
        { success: false, message: `Email sending failed: ${error instanceof Error ? error.message : 'Unknown error'}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}