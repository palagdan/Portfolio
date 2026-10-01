# Portfolio

My personal portfolio — a single-page site showcasing my work experience, education, and selected projects.

🔗 **Live:** https://palagdan.github.io/Portfolio

![portfolio_full](https://github.com/user-attachments/assets/8bb8b7aa-fa03-40ff-b4af-27c92819121b)

![portfolio_image](https://github.com/user-attachments/assets/5857ba9d-46c0-4734-be77-59fce6fbe397)

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tooling and dev server
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Radix UI](https://www.radix-ui.com/) + [react-scroll](https://github.com/fisshy/react-scroll)

## Getting Started

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run type-check` | Run the TypeScript compiler without emitting |
| `npm run lint` | Lint the project with ESLint |

## Project Structure

```
src/
├── components/   # Reusable UI (buttons, cards, navbars, ui primitives)
├── constants/    # Content: experience, education, projects
├── lib/          # Utilities
├── sections/     # Page sections (Hero, Experience, Education, Projects)
├── App.tsx       # Composes the sections
└── main.tsx      # Entry point
```

Site content lives in [`src/constants/index.tsx`](src/constants/index.tsx) — edit it to update experience, education, and project entries.

## Deployment

Pushing to `main` triggers the [GitHub Actions workflow](.github/workflows), which type-checks, lints, builds, and publishes `dist/` to GitHub Pages. The Vite `base` is set to `/Portfolio/` to match the repository's Pages path.