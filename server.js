// SamGlass — Bun server: statik build (dist/) + forma -> Telegram.
// Railway: `bun run start`. Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, PORT.
import { join, extname } from 'path'

const DIST = join(import.meta.dir, 'dist')
const PORT = process.env.PORT || 8080
const BOT = process.env.TELEGRAM_BOT_TOKEN
const CHAT = process.env.TELEGRAM_CHAT_ID

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.gif': 'image/gif', '.ico': 'image/x-icon', '.json': 'application/json',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
}

async function sendLead(data) {
  if (!BOT || !CHAT) {
    console.warn('[lead] TELEGRAM_BOT_TOKEN/CHAT_ID sozlanmagan — xabar yuborilmadi')
    return false
  }
  const text =
    `🪟 *SamGlass — yangi murojaat*\n\n` +
    `👤 *Ism:* ${data.name || '-'}\n` +
    `📞 *Telefon:* ${data.phone || '-'}\n` +
    `💬 *Xabar:* ${data.message || '-'}\n` +
    `🌐 *Til:* ${data.lang || '-'}`
  const r = await fetch(`https://api.telegram.org/bot${BOT}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT, text, parse_mode: 'Markdown' }),
  })
  return r.ok
}

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url)

    // API: forma
    if (url.pathname === '/api/lead' && req.method === 'POST') {
      try {
        const data = await req.json()
        if (!data.name || !data.phone) {
          return Response.json({ ok: false, error: 'name/phone required' }, { status: 400 })
        }
        const ok = await sendLead(data)
        return Response.json({ ok })
      } catch (e) {
        return Response.json({ ok: false, error: String(e) }, { status: 500 })
      }
    }

    // Statik fayllar
    let path = decodeURIComponent(url.pathname)
    if (path === '/') path = '/index.html'
    let file = Bun.file(join(DIST, path))
    if (await file.exists()) {
      const type = MIME[extname(path)] || 'application/octet-stream'
      return new Response(file, { headers: { 'Content-Type': type } })
    }

    // SPA fallback -> index.html
    return new Response(Bun.file(join(DIST, 'index.html')), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  },
})

console.log(`SamGlass server: http://localhost:${PORT}  (telegram: ${BOT && CHAT ? 'on' : 'off'})`)
