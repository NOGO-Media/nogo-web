# nogo-web

Source for [nogomedia.se](https://nogomedia.se). Next.js 16 (App Router, Turbopack) on Vercel.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY for /api/kontakt
npm run dev
```

Open http://localhost:3000.

## Production

`main` auto-deploys to Vercel via the GitHub integration. Any push to
`main` triggers a production build; other branches get preview URLs.

Required env vars in the Vercel project:
- `RESEND_API_KEY` — see `.env.example`.

## Useful commands

```bash
npm run build   # production build (catches type + build errors)
npm run lint    # ESLint
```

## Notes

- `src/app/favicon.ico` and `src/app/apple-icon.png` use the Next.js
  file convention and are auto-served. Do not add `icons` to the
  layout metadata — it shadows the auto-generated link tags.
- The contact route lazy-instantiates Resend, so a missing
  `RESEND_API_KEY` no longer crashes the build — the endpoint just
  returns a 500 at runtime until it is set.
