# KRÓ Design website

The website for KRÓ Design, a souvenir brand based in Akureyri, Iceland (keychains and fridge magnets featuring Akureyri's heart-shaped traffic lights). The site is informational and catalog only, it directs visitors to buy in person at Kista, inside Menningarhúsið Hof.

Built with Next.js (Pages Router), TypeScript, and Tailwind CSS, with bilingual support (Icelandic default at `/`, English at `/en`).

## Quick start

```bash
npm install
npm run dev
```

Visit http://localhost:3000 (Icelandic). Use `/en` for English.

## Scripts

- `npm run dev`: local development server
- `npm run build`: production build
- `npm run start`: run the production build locally
- `npm run lint`: ESLint

## Deployment

Deploys to Netlify from the `main` branch of this repository (automatic deploy on every push, preview deploys on pull requests). Netlify's Next.js Runtime auto-detects this project, no `netlify.toml` is required. Requires Node.js >=20.9.0 (see `engines` in package.json).
