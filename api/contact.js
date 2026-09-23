export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email) return res.status(400).json({ ok: false, error: 'Jméno a e-mail jsou povinné.' });
    if (!process.env.CONTACT_FORM_WEBHOOK_URL) return res.status(503).json({ ok: false, error: 'Formulář ještě není nakonfigurován.' });
    const response = await fetch(process.env.CONTACT_FORM_WEBHOOK_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: process.env.CONTACT_TO_EMAIL, subject: `Nová poptávka z webu — ${name}`, name, email, message: message || '' })
    });
    if (!response.ok) throw new Error('Webhook failed');
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ ok: false, error: 'Odeslání se nepodařilo. Zkuste to prosím znovu.' });
  }
}
