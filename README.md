# Premium Personal Portfolio

A dark-mode-first personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animation
- **Lucide Icons**

## Getting started locally

1. Make sure you have **Node.js 18.17+** installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — replace these placeholders

Everything editable is marked with `// PLACEHOLDER` or `// TODO` comments in the code. The main things to update:

| What | Where |
|---|---|
| Your name, headline, bio | `app/components/Hero.tsx`, `app/components/About.tsx` |
| Profile photo | Replace the placeholder blocks in `Hero.tsx` / `About.tsx` with an `<Image />`, and add your photo to `/public` |
| Projects | `app/data/projects.ts` |
| Skills & levels | `app/data/skills.ts` |
| Experience | `app/data/experience.ts` |
| Services | `app/data/services.ts` |
| Testimonials | `app/data/testimonials.ts` |
| Resume PDF | Add `resume.pdf` to `/public` |
| Favicon & OG image | Add `favicon.ico`, `apple-touch-icon.png`, `og-image.png` to `/public` (see `public/README.txt`) |
| Site metadata & domain | `app/layout.tsx` (`SITE_URL`, `SITE_NAME`, social links, JSON-LD) |
| Contact form submission | `app/components/Contact.tsx` — currently simulates a submit; wire it to a real API route, [Resend](https://resend.com), or [Formspree](https://formspree.io) |
| Social links | `Hero.tsx`, `Footer.tsx`, `layout.tsx` |
| Contact details (email/phone) | `app/components/Contact.tsx` |
| Map embed | `app/components/Contact.tsx` — swap the placeholder div for a Google Maps iframe |

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Once live, update `SITE_URL` in `app/layout.tsx` and `app/sitemap.ts` / `app/robots.ts` to your real domain, then redeploy.

## Notes

- Dark mode is the default; the toggle in the nav switches to light mode and remembers the choice via `localStorage`.
- All animations respect `prefers-reduced-motion`.
- Images use `next/image` — if you add your own project/photo images, either host them externally and add the domain to `next.config.mjs` under `images.remotePatterns`, or drop them in `/public` and reference them locally.
- Lighthouse: keep images optimized (WebP/AVIF where possible) and avoid adding heavy unused libraries to keep the 95+ target.
