# Portfolio — Improvement TODO

Tracking fixes/refactors from the code review. Work top-down; each item is independent unless noted.

## 🔴 Pass 1 — Bugs & quick wins (low risk, high value) ✅ DONE

- [x] **Fix project links** — `card-hover-effect.tsx`: replaced react-router `<Link>` with `<a href target="_blank" rel="noopener noreferrer">`; added missing `image` field to the items type.
- [x] **Fix nested interactive elements** — made `BorderMagicButton` polymorphic (renders `<a>` when given `href`); updated both `NavbarMenu.tsx` usages.
- [x] **Fix `FooterSection`** — deleted the unused folder (returned nothing).
- [x] **Fix avatar fallback** — `"CN"` → `"DP"` (all 3 spots).
- [x] **gitignore `.idea/`** — already in `.gitignore` and never tracked; no action needed.

### Delete dead code (confirmed never imported)
- [x] `src/components/CardDemo.tsx` (Stripe/Netflix placeholder template)
- [x] `src/components/cards/HoverCardEffect.tsx` (empty file)
- [x] `src/components/ui/navigation-menu.tsx` (unused shadcn component)
- [x] Pruned unused deps: `@radix-ui/react-navigation-menu`, `@radix-ui/react-icons`, `lucide-react`, `class-variance-authority` (all 0 usages in src).

## 🟡 Pass 2 — Refactor & consolidate ✅ DONE

- [x] **Fix Rules of Hooks violation** — extracted a `TimelineItem` component in `timeline.tsx`; hooks now run at component top level (also dropped the unused `useMotionValueEvent` import).
- [x] **One source of truth for Card components** — the inline copies were the correct ones (the `cards/*` files were unused and `cards/CardImage` ignored its `src`). Promoted the correct versions into `cards/*`, fixed `CardImage`, and `HoverEffect` now imports them; inline copies removed.
- [x] **Decide on theme system** — stripped the dead layer: removed the `.dark` HSL block from `index.css`, `darkMode` from the tailwind config, and all no-op `dark:` utility classes. Zero visual change (no `dark` class ever existed). Kept dark-only via explicit colors.
- [x] **Fix global CSS selector misuse** — moved `scroll-behavior` / `color-scheme` from `*` to `html`.
- [x] **Rename typo folder** — `ExpierenceSection/` → `ExperienceSection/`; updated `App.tsx` import.
- [x] **Unify section elements** — `ProjectsSection` now uses `<section>`.
- [x] **Clean constants** — stripped leading spaces in classNames. (Left experience as JSX `content`; the plain-fields refactor was optional and more invasive — deferred.)

## 🟡 Pass 3 — Accessibility & SEO

- [ ] **Add a single `<h1>`** — hero name/role in `HeroSection.tsx:7` is a `<span>`; demote section headings from `<h1>` to `<h2>`.
- [ ] **Add meta tags** — `index.html`: meta description, favicon, Open Graph + Twitter card tags (for link previews).
- [ ] **Image perf** — project images: add `width`/`height` + `loading="lazy"` to prevent CLS and eager loading.

## 🟢 Pass 4 — Tooling & repo hygiene

- [ ] **Remove duplicate deploy path** — keep the GitHub Actions workflow; drop the `gh-pages` dep + `predeploy`/`deploy` scripts in `package.json`.
- [ ] **Drop React Router** — only used for the (broken) project links; single scrolling page already uses `react-scroll`. Simplify `main.tsx`, remove `react-router-dom`.
- [ ] **Fix config module mismatch** — `tailwind.config.js` / `postcss.config.js` use `module.exports` under `"type": "module"`. Rename to `.cjs` or convert to `export default`.
- [ ] **Add CI checks before deploy** — run `type-check` + `lint` in the workflow so hook/type errors fail the build.