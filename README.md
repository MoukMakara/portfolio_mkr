# Mouk Makara — Portfolio

Personal portfolio built with Next.js (App Router), React, Tailwind CSS v4, Framer Motion, Lucide icons, and react-icons (technology logos). Written in JavaScript/JSX. Every page is statically generated.

## Run

Node 24 LTS is recommended (see `.nvmrc`). Node 27 nightlies also work through `scripts/node-compat.cjs`, a small shim that the npm scripts load; it does nothing on other Node versions and can be deleted once Next.js supports Node 27.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Theme

Dark and light themes are driven by CSS variables in `app/globals.css` (`:root` / `[data-theme="light"]`). The toggle in the navbar stores the choice in `localStorage`; first-time visitors get their system preference.

## Structure

```
app/
  layout.jsx               Root layout, SEO metadata, navbar/footer
  page.jsx                 Home page (composes the section components)
  projects/page.jsx        All projects
  projects/[slug]/page.jsx Project case study pages (generated from data/projects.js)
  projects/template.jsx    Page transition for project pages
  opengraph-image.jsx      Generated social preview image
  icon.svg                 Favicon
components/                One component per section plus small shared pieces
data/                      All content: site.js, skills.js, experience.js, education.js, projects.js
                           techIcons.js maps each technology name to its logo and brand color
public/images/             Profile photo (mouk-makara-portrait.webp is the background-removed hero version)
```

To change content, edit the files in `data/`. Components only render that data.

## Placeholders to replace

- `data/site.js`: `socials.linkedin` currently points to LinkedIn's Jobs page — replace it with your profile URL (`https://www.linkedin.com/in/<handle>/`)
- `data/projects.js`: `githubUrl` / `demoUrl` for each project; `role` / `challenges` set to `null` show "Details coming soon"
- Project screenshots: the detail pages show placeholder frames
- Set `NEXT_PUBLIC_SITE_URL` in production so Open Graph URLs point to your domain
