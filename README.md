# Aron Design System

Docs website (`/`) + Storybook (`/storybook/`) on one domain, built from your Figma file.

## Run it on your computer
```bash
npm install
npm run dev          # docs site  -> http://localhost:3000
npm run storybook    # Storybook  -> http://localhost:6006
```

## Build exactly like Vercel does
```bash
npm run build        # tokens -> Storybook (into public/storybook) -> Next.js
npm start            # http://localhost:3000  and  http://localhost:3000/storybook/
```

## Publish on Vercel
1. Put this folder on GitHub (new repository).
2. vercel.com -> Add New -> Project -> import the repository -> Deploy. No settings to change
   (Framework: Next.js, build command: `npm run build`).

## Where things live
| What | Where |
|---|---|
| Tokens exported from Figma | `tokens/data.mjs` (edit, then `npm run tokens`) |
| Generated CSS variables | `styles/tokens.css`, `styles/states.generated.css` |
| Components (React) | `components/ui/*` |
| Component styles | `styles/components.css` |
| Per-component docs data (props, states, usage, a11y) | `lib/registry.tsx` |
| Docs pages | `app/**` |
| Storybook stories | `stories/**` |

Add a new component: write it in `components/ui`, add one entry to `lib/registry.tsx`, add a 5-line stories file.
