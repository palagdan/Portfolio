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

## 🟡 Pass 2 — Refactor & consolidate

- [ ] **Fix Rules of Hooks violation** — `src/components/ui/timeline.tsx:44-54`: `useRef`/`useInView` are called inside `data.map()`. Extract each row into a `<TimelineItem>` component that calls the hooks at its top level.
- [ ] **One source of truth for Card components** — `card-hover-effect.tsx` re-defines `Card`/`CardImage`/`CardTitle`/`CardDescription` inline while `src/components/cards/*` has duplicates. Keep `cards/`, fix `cards/CardImage.tsx:15` (hardcoded `shadcn.png`, ignores `src` prop), import them into `HoverEffect`, delete the inline copies.
- [ ] **Decide on theme system** — `darkMode: ["class"]` + full `:root`/`.dark` HSL vars in `index.css`, but nothing adds a `dark` class → all `dark:` variants are no-ops and the CSS vars are unused. Either commit to the token system or strip to the colors actually used.
- [ ] **Fix global CSS selector misuse** — `src/index.css:5-11`: move `scroll-behavior` / `color-scheme` from `*` to `html`/`:root`.
- [ ] **Rename typo folder** — `src/sections/ExpierenceSection/` → `ExperienceSection/` (update imports in `App.tsx`).
- [ ] **Unify section elements** — `ProjectsSection` uses `<div>`, `ExperienceSection` uses `<section>`; make both `<section>`.
- [ ] **Clean constants** — `src/constants/index.tsx`: strip leading spaces in classNames (e.g. line 17); consider storing experience as plain fields (`role`, `company`, `location`, `summary`) and rendering markup in the component.

## 🟡 Pass 3 — Accessibility & SEO

- [ ] **Add a single `<h1>`** — hero name/role in `HeroSection.tsx:7` is a `<span>`; demote section headings from `<h1>` to `<h2>`.
- [ ] **Add meta tags** — `index.html`: meta description, favicon, Open Graph + Twitter card tags (for link previews).
- [ ] **Image perf** — project images: add `width`/`height` + `loading="lazy"` to prevent CLS and eager loading.

## 🟢 Pass 4 — Tooling & repo hygiene

- [ ] **Remove duplicate deploy path** — keep the GitHub Actions workflow; drop the `gh-pages` dep + `predeploy`/`deploy` scripts in `package.json`.
- [ ] **Drop React Router** — only used for the (broken) project links; single scrolling page already uses `react-scroll`. Simplify `main.tsx`, remove `react-router-dom`.
- [ ] **Fix config module mismatch** — `tailwind.config.js` / `postcss.config.js` use `module.exports` under `"type": "module"`. Rename to `.cjs` or convert to `export default`.
- [ ] **Add CI checks before deploy** — run `type-check` + `lint` in the workflow so hook/type errors fail the build.