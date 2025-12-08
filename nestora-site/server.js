import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// load .env early
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(process.cwd(), 'server-contacts.json');

// SMTP configuration via env vars
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const TO_EMAIL = process.env.TO_EMAIL || 'nestora.privatelimited@gmail.com';

let transporter = null;
if (SMTP_HOST && SMTP_USER) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT || 587,
    secure: !!SMTP_SECURE,
    auth: SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });
  transporter.verify()
    .then(()=>console.log('SMTP transporter ready'))
    .catch(err=>console.warn('SMTP verify failed:', err && err.message ? err.message : err));
} else {
  console.log('SMTP not configured - emails will not be sent (set SMTP_HOST and SMTP_USER).');
}

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, org, message } = req.body || {};
    if (!name || !email) return res.status(400).json({ error: 'name and email are required' });
    const entry = { id: Date.now(), name, email, org: org || '', message: message || '', createdAt: new Date().toISOString() };
    let existing = [];
    try { existing = JSON.parse(await fs.readFile(DATA_FILE, 'utf8') || '[]'); } catch (_err) { existing = []; }
    existing.push(entry);
    await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2), 'utf8');
    console.log('Saved contact', entry);

    let emailed = false;
    if (transporter) {
      try {
        const mailOptions = {
          from: process.env.FROM_EMAIL || SMTP_USER,
          to: TO_EMAIL,
          subject: `Nestora Deck Request: ${entry.name}`,
          text: `Name: ${entry.name}\nEmail: ${entry.email}\nOrg: ${entry.org}\n\nMessage:\n${entry.message}`,
          html: `<p><strong>Name:</strong> ${entry.name}</p><p><strong>Email:</strong> ${entry.email}</p><p><strong>Org:</strong> ${entry.org}</p><p><strong>Message:</strong><br/>${entry.message.replace(/\n/g,'<br/>')}</p>`
        };
        await transporter.sendMail(mailOptions);
        emailed = true;
        console.log('Contact email sent');
      } catch (err) {
        console.error('Failed to send contact email:', err && err.message ? err.message : err);
      }
    }

    return res.json({ ok: true, emailed });
  } catch (err) {
    console.error('Contact API error', err);
    return res.status(500).json({ error: 'server error' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Contact API listening on http://localhost:${PORT}`));
