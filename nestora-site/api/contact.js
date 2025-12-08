import fs from 'node:fs/promises';
import path from 'node:path';
import nodemailer from 'nodemailer';

// Allow writing to /tmp inside serverless, but keep local fallback for dev/testing.
const DATA_FILE = process.env.CONTACTS_FILE
  ? path.resolve(process.env.CONTACTS_FILE)
  : (process.env.VERCEL ? path.join('/tmp', 'server-contacts.json') : path.join(process.cwd(), 'server-contacts.json'));

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const TO_EMAIL = process.env.TO_EMAIL || 'nestora.privatelimited@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL;

let transporter = null;
let transporterInitError = null;

const initTransporter = () => {
  if (transporter || transporterInitError) return transporter;
  if (!SMTP_HOST || !SMTP_USER) {
    transporterInitError = new Error('Missing SMTP_HOST or SMTP_USER');
    return null;
  }
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT || 587,
    secure: Boolean(SMTP_SECURE),
    auth: SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });
  transporter.verify().then(() => {
    console.log('SMTP transporter ready');
  }).catch((err) => {
    transporterInitError = err;
    console.warn('SMTP verify failed:', err && err.message ? err.message : err);
  });
  return transporter;
};

const readEntries = async () => {
  try {
    const payload = await fs.readFile(DATA_FILE, 'utf8');
    return payload ? JSON.parse(payload) : [];
  } catch (_err) {
    return [];
  }
};

const persistEntry = async (entry) => {
  try {
    const items = await readEntries();
    items.push(entry);
    await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), 'utf8');
  } catch (err) {
    console.warn('Failed to persist contact locally:', err && err.message ? err.message : err);
  }
};

const sendEmail = async (entry) => {
  const activeTransporter = initTransporter();
  if (!activeTransporter) return false;
  try {
    await activeTransporter.sendMail({
      from: FROM_EMAIL || SMTP_USER,
      to: TO_EMAIL,
      subject: `Nestora Deck Request: ${entry.name}`,
      text: `Name: ${entry.name}\nEmail: ${entry.email}\nOrg: ${entry.org || ''}\n\nMessage:\n${entry.message || ''}`,
      html: `<p><strong>Name:</strong> ${entry.name}</p><p><strong>Email:</strong> ${entry.email}</p><p><strong>Org:</strong> ${entry.org || ''}</p><p><strong>Message:</strong><br/>${(entry.message || '').replace(/\n/g, '<br/>')}</p>`
    });
    console.log('Contact email sent');
    return true;
  } catch (err) {
    console.error('Failed to send contact email:', err && err.message ? err.message : err);
    return false;
  }
};

const parseBody = async (req) => {
  if (req.body) return typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
  } catch (_err) {
    return {};
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = await parseBody(req);
    const { name, email, org = '', message = '' } = payload || {};
    if (!name || !email) {
      return res.status(400).json({ error: 'name and email are required' });
    }

    const entry = {
      id: Date.now(),
      name,
      email,
      org,
      message,
      source: payload?.source || 'team-contact',
      createdAt: new Date().toISOString()
    };

    await persistEntry(entry);
    const emailed = await sendEmail(entry);

    return res.status(200).json({ ok: true, emailed });
  } catch (err) {
    console.error('Contact API error', err && err.message ? err.message : err);
    return res.status(500).json({ error: 'server error' });
  }
}
