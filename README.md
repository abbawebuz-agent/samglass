# SamGlass

Samarqand shisha ishlab chiqarish kompaniyasi sayti. Tilda'dan toza koddaga ko'chirildi (kichik redesign, kontent + UX saqlangan).

**Stack:** React + Vite + Tailwind + react-router + i18n (ru/uz/en). Server: Bun (statik build + forma → Telegram).

## Buyruqlar
```bash
bun install
bun run dev      # ishlab chiqish (http://localhost:5180)
bun run build    # production build -> dist/
bun run start    # dist/ ni servis + forma API (PORT, default 8080)
bun run serve    # build + start
```

## Sahifalar
`/` `/uz` `/en` + `/{lang}/{about|projects|news|contacts}`. Eski Tilda URL'lari (`/aboutusuz` va h.k.) redirect qilinadi.

## Forma → Telegram
`.env` (yoki Railway Variables) ga qo'shing:
```
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```
Forma `POST /api/lead` ga yuboradi → server Telegram'ga xabar tashlaydi.

## Deploy (Railway)
`railway.json`: build = `bun run build`, start = `bun server.js`. Variables: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.

## Kontent
Manba: samglass.uz (RU kanonik). UZ/ENG to'g'ri tarjima. Tilda'dagi buzilgan joylar (lorem yangiliklar, garbled statistika) real kontent bilan tuzatilgan. Rasmlar `public/assets/`.
