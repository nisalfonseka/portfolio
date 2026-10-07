# Nisal Fonseka — Engineering Portfolio

A full Next.js portfolio and content admin for `nisalfonseka.com`. The public site presents selected work, case studies, services, experience, research, recognition, engineering notes and a client contact flow. The private admin manages projects, achievement images and incoming inquiries.

## Stack

- Next.js 16 App Router, React 19 and TypeScript
- Tailwind CSS and Montserrat throughout
- Paper Shaders + Framer Motion for the hero
- Neon Postgres for editable content and inquiries
- Neon Object Storage for private admin image uploads
- Brevo transactional SMS for new-inquiry alerts
- Vercel for hosting

## Local setup

```bash
npm install
cp .env.example .env
npm run db:migrate
npm run dev
```

Open `http://localhost:3000`. The content admin is at `http://localhost:3000/admin`.

This workspace is already linked to Neon project `dawn-flower-12549551`, branch `production`. To refresh Neon-managed environment variables:

```bash
neon env pull
```

## Required environment variables

Copy `.env.example` and provide:

- `ADMIN_PASSWORD` and `AUTH_SECRET` for the admin login.
- `DATABASE_URL` and `DATABASE_URL_UNPOOLED` from Neon.
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ENDPOINT_URL_S3`, and `AWS_REGION` from Neon Object Storage.
- `BREVO_API_KEY`, `BREVO_SMS_RECIPIENT`, and `BREVO_SMS_SENDER` if SMS alerts are wanted.
- `NEXT_PUBLIC_SITE_URL=https://nisalfonseka.com`.

Never commit `.env`; it is ignored by Git.

## Neon infrastructure

[`neon.ts`](./neon.ts) declares a private `uploads` bucket. Reconcile it with the linked branch using:

```bash
neon config plan
neon deploy
```

Database migrations are stored in `db/migrations` and run through `npm run db:migrate`. Use the unpooled Neon URL for migration work; normal application requests use the pooled `DATABASE_URL`.

## Vercel deployment

1. Import this repository into Vercel.
2. Add every required environment variable to the Production environment.
3. Run `npm run db:migrate` once against the production Neon branch.
4. Deploy with the standard Next.js build command, `npm run build`.
5. Add `nisalfonseka.com` in Vercel Domains and point the domain DNS to Vercel.

The contact form always stores successful inquiries in Neon. If Brevo is configured, it also sends a short transactional SMS alert; the full message remains available in the admin inbox.

## Content management

The admin panel can:

- add, edit, reorder and delete project case studies;
- add, edit, reorder and delete recognition entries;
- upload achievement and project images into the private Neon bucket;
- read the latest 100 contact inquiries.

Private bucket keys are stored in Postgres. Public pages receive time-limited signed image URLs at render time, so storage credentials never reach the browser.
