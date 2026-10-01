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

## 🟡 Pass 3 — Accessibility & SEO ✅ DONE

- [x] **Add a single `<h1>`** — hero pitch is now the `<h1>`; "Work Experience" and "Projects" demoted to `<h2>`.
- [x] **Add meta tags** — `index.html`: title, meta description, favicon (avatar.jpg), Open Graph + Twitter card tags (OG/Twitter images use absolute GH Pages URLs).
- [x] **Image perf** — project images get `loading="lazy"` + `decoding="async"`. (Height is already fixed via CSS `h-48`, so CLS was already controlled — skipped width/height attrs to avoid a misleading aspect hint.)

## 🟢 Pass 4 — Tooling & repo hygiene ✅ DONE

- [x] **Remove duplicate deploy path** — dropped `gh-pages` dep + `predeploy`/`deploy` scripts; GitHub Actions is the sole deploy path.
- [x] **Drop React Router** — removed `react-router-dom`; `main.tsx` now wraps `<App/>` in `<StrictMode>` (which was imported but unused).
- [x] **Fix config module mismatch** — `tailwind.config.js` converted to ESM (`export default` + `import`). `postcss.config.js`/`eslint.config.js` were already ESM.
- [x] **Add CI checks before deploy** — workflow now runs `type-check` + `lint` before `build`; added npm caching.
- [x] **Bonus** — fixed the broken `lint` script (`--ext` is invalid under ESLint 9 flat config) and cleared 2 pre-existing lint errors + 1 warning in `background-beams`. Full suite (`type-check` + `lint` + `build`) verified green locally.

---

## Notes / not done
- `npm audit` flags CVEs in `vite@5` and `postcss@8`. Bumping needs a test pass (major for Vite). Not touched to avoid an unverified breaking change — do as a separate dependency-upgrade task.
- Optional: store experience entries as plain data fields instead of inline JSX in `constants/index.tsx` (deferred from Pass 2).