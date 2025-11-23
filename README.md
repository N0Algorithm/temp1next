# revgroupstemp

A small Next.js app (app directory) with a handful of UI components. This README documents how to run the project, where to find the main files, and the available scripts.

## Contents

- Framework: Next.js (app router)
- React version: 19
- Tailwind CSS: configured (project depends on `tailwindcss`)
- Key folders:
	- `src/app/` — top-level app files: `page.js`, `layout.js`, and global styles
	- `src/components/` — React components used by the app (Hero, Navbar, About, Features, Products, OurTeam)
	- `src/utils/` — utility modules (animations, etc.)

## Project structure (high level)

```
.
├─ eslint.config.mjs
├─ next.config.mjs
├─ package.json
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.js
│  │  └─ page.js
│  ├─ components/
│  │  ├─ About.jsx
│  │  ├─ Features.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ OurTeam.jsx
│  │  └─ Products.jsx
│  └─ utils/
│     └─ animations.js
└─ README.md
```

## Quick start

Prerequisites: Node.js (recommended v18+), npm.

Install dependencies:

```powershell
npm install
```

Run the development server:

```powershell
npm run dev
```

Open http://localhost:3000 in your browser. The entry page is `src/app/page.js`.

Available npm scripts (from `package.json`):

- `dev` — start Next.js in development mode (`next dev`)
- `build` — build the production app (`next build`)
- `start` — run the production server after a build (`next start`)
- `lint` — run ESLint (`eslint`)

Run a production build and start locally:

```powershell
npm run build; npm run start
```

## Components

The UI is split into presentational components under `src/components/`:

- `Hero.jsx` — hero/landing section
- `Navbar.jsx` — navigation bar
- `About.jsx` — about section
- `Features.jsx` — feature highlights
- `Products.jsx` — products listing
- `OurTeam.jsx` — team section

Edit or extend these components to modify the site's content.

## Notes and tips

- The app uses the app-router (files under `src/app/`). Edit `page.js` to change the main route.
- Tailwind, Framer Motion and some icon libraries (Heroicons, react-icons, lucide-react) are included as dependencies — see `package.json`.
- This project lists Next.js 16 and React 19 in `package.json`; ensure your local Node.js and toolchain are compatible.

## Deploy

Deploy to Vercel for the simplest workflow (Next.js is first-class on Vercel). Other platforms that support Node/Next.js will also work.

## Troubleshooting

- If you encounter issues building or running, check the exact Node.js version and reinstall dependencies:

```powershell
rm -r node_modules package-lock.json; npm install
```

If you need more help updating this README or adding scripts, tell me what you'd like included (CI, tests, env-vars, deployment presets) and I can add it.
