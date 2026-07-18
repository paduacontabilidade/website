# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page institucional para a Pádua Contabilidade (Cuiabá-MT). Site de página única (`src/App.tsx`) composto por seções de marketing (hero, serviços, sobre) com header/footer fixos. Copy de referência em `docs/copy.md`, layout de referência em `docs/layout.jpeg`.

## Commands

- Package manager: **pnpm** (always use pnpm, not npm/yarn).
- `pnpm dev` — start Vite dev server with HMR.
- `pnpm build` — typecheck (`tsc -b`) then build with Vite.
- `pnpm lint` — run Oxlint.
- `pnpm preview` — preview the production build.

There is no test suite configured in this repo.

## Architecture

- **Stack**: Vite + React 19 + TypeScript, Tailwind CSS v4, shadcn/ui (style `base-nova`), React Compiler (via `babel-plugin-react-compiler`, wired in `vite.config.ts`).
- **Path alias**: `@/*` → `src/*` (configured in both `tsconfig.app.json` and `vite.config.ts`).
- **Page composition**: `src/App.tsx` renders `SiteHeader`, `main` (ordered sections from `src/components/sections/*`), and `SiteFooter`. To add/reorder a section of the page, edit `App.tsx` and add a file under `src/components/sections/`.
- **UI primitives**: `src/components/ui/` holds shadcn-managed primitives (`button.tsx`, `card.tsx`) plus adapted third-party components — notably `resizable-navbar.tsx` (Aceternity navbar, heavily adapted: tabler icons swapped for lucide, recolored to the gold theme, `NavbarLogo`/`NavbarButton` exports removed in favor of the project's own `BrandLockup`) and `glowing-effect.tsx` (recolored to the gold palette, used as the visual signature on service cards).
- **shadcn config** (`components.json`): base color `neutral`, CSS variables enabled, icon library `lucide`, and a custom Aceternity registry (`@aceternity`) for pulling in components from `ui.aceternity.com`.
- **Styling**: Tailwind v4 config lives inline in `src/index.css` via `@theme` (no `tailwind.config.js`). Custom design tokens: gold palette (`--color-gold-300/500/600/700`, primary `#c9a24b`), `--color-ink` for the dark sections. Font is Georgia (serif) via `--font-sans` — the project deliberately uses a single font family across the whole page; hierarchy comes from font-weight and tracking, not a second typeface.
- **Class merging**: use the `cn()` helper from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional/merged class names, consistent with shadcn conventions.
- **Lint**: Oxlint config (`.oxlintrc.json`) enables `react`, `typescript`, `oxc` plugins with `react/rules-of-hooks` as an error.

## Working conventions

- Visual/design changes should be validated by the user directly (running `pnpm dev` and looking at it) rather than via automated screenshots/Playwright — don't add browser automation to verify styling changes.
