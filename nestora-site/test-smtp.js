import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

async function run() {
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
  const TO_EMAIL = process.env.TO_EMAIL || SMTP_USER;

  if (!SMTP_HOST || !SMTP_USER) {
    console.error('Please set SMTP_HOST and SMTP_USER in .env before running this test.');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT || (SMTP_SECURE ? 465 : 587),
    secure: !!SMTP_SECURE,
    auth: SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });

  try {
    await transporter.verify();
    console.log('SMTP verify: OK');
  } catch (err) {
    console.error('SMTP verify failed:', err && err.message ? err.message : err);
  }

  const from = process.env.FROM_EMAIL || SMTP_USER;
  const to = TO_EMAIL;
  const subject = 'SMTP test from Nestora site';
  const text = `This is a test email sent at ${new Date().toISOString()} from ${SMTP_USER}`;

  try {
    const info = await transporter.sendMail({ from, to, subject, text });
    console.log('Message sent:', info.messageId || info.response || info);
  } catch (err) {
    console.error('Failed to send test email:', err && err.message ? err.message : err);
    process.exit(2);
  }
}

run().catch(err => { console.error(err); process.exit(3); });
