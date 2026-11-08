# Crest Solutions Ltd

Premium corporate site for Crest Solutions Ltd, covering materials logistics and construction. Built with Next.js 16, React 19, Tailwind CSS 4 and self-hosted Archivo and IBM Plex Mono.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production check:

```bash
npm run build
npm run start
```

## Routes

- `/` home
- `/about` company and team
- `/divisions` division overview
- `/divisions/logistics`
- `/divisions/construction`
- `/projects` project record
- `/projects/[slug]` project detail
- `/profile` working profile page
- `/profile/print` print-ready profile used to generate the PDF
- `/contact`
- `/privacy`

## Content

All company, division, team and project copy lives in `src/content/`:

- `company.ts`: contact details, positioning, team, corridor, profile copy
- `divisions.ts`: services and capabilities
- `projects.ts`: project records
- `images.ts`: image imports

Project images are in `src/assets/images/`. The PDF is generated from `/profile/print` and saved to:

```text
public/crest-solutions-company-profile.pdf
```

To regenerate after content changes, run the dev server and use Playwright:

```bash
node -e "const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({channel:'chrome'});const p=await b.newPage({viewport:{width:1200,height:1600}});await p.goto('http://127.0.0.1:3000/profile/print',{waitUntil:'networkidle'});await p.waitForTimeout(2000);await p.pdf({path:'public/crest-solutions-company-profile.pdf',format:'A4',printBackground:true,preferCSSPageSize:true});await b.close()})()"
```

## Contact details in the site

- Email: info@crestsolutionsltd.com
- Phone: +250 787 849 403
- WhatsApp: +250 787 849 403
- Base: Kigali, Rwanda

## Before public launch

1. Confirm the registered office address and registration details.
2. Verify each project's client, scope, dates and outcome with the project team.
3. Confirm photography rights for the project and team images.
4. Review the privacy notice against the company's actual data handling.
5. Connect the production domain and update `NEXT_PUBLIC_SITE_URL` if it differs from `https://crestsolutionsltd.com`.

## Deploy

The project is Vercel-ready. Push to GitHub, import the repository into Vercel, or run:

```bash
vercel --prod
```
