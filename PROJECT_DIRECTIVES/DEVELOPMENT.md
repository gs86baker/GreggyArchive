# Development Guidelines

This document outlines the development standards and best practices for the GreggyArchive project.

## Project Overview

GreggyArchive is a high-performance personal website built with Astro, featuring:
- Blog posts managed via Markdown
- Project showcase with status tracking
- Resume integration with print optimization
- Client-side search functionality
- Static deployment on Cloudflare Pages

## Technology Stack

- **Framework**: Astro (Static Output)
- **Styling**: Tailwind CSS v4
- **Package Manager**: Bun.js
- **Deployment**: Cloudflare Pages
- **Search**: Built-in static index generation endpoint

## Directory Structure

Follow the strict directory architecture:

```
/
├── src/
│   ├── components/     # Reusable Astro components (Search, Header, etc.)
│   ├── content/        # Astro Content Collections (blog/, projects/)
│   ├── data/          # JSON data files (resume.json)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages ([...slug].astro handles dynamic routes)
│   └── assets/        # Images for optimization
├── public/            # Static assets (favicon, robots.txt)
└── PROJECT_DIRECTIVES/ # Documentation and guidelines
```

## Content Management

### Adding Blog Posts
1. Create `.md` file in `src/content/blog/`.
2. Use slug-based naming: `my-post-title.md`.
3. **MANDATORY:** Include all required frontmatter fields defined in `src/content/config.ts`.
4. The build will fail if the schema is violated (e.g., missing `pubDate`).

### Adding Projects
1. Create `.md` file in `src/content/projects/`.
2. **MANDATORY:** `status` must be either "Active" or "Archived".
3. **MANDATORY:** `techStack` must be a list of strings.

### Updating Resume
- Edit `src/data/resume.json`.
- This file drives the entire "About" page content.

## Development Workflow

### Local Development (The Loop)
1. `bun run dev` - Starts the hot-reloading server.
2. Edit content/code -> Browser updates automatically.
3. Check `http://localhost:4321/about` to verify resume changes.
4. **Print Test:** Use browser "Print Preview" (Ctrl+P) on the About page to verify navigation is hidden.

### Production Build
1. `bun run build` - Generates the static site in `dist/`.
2. This step runs the type-check and schema validation.
3. If this command fails, **do not push** to Git. Fix the errors first.

### Search Index Strategy
The search index is **automatically generated** by `src/pages/search-index.json.ts`.
- **In Dev:** It is served dynamically as an API route.
- **In Build:** It is rendered to a static JSON file (`/search-index.json`).
- You do **not** need to run manual generation scripts.

## Component Guidelines

### Styling
- Use Tailwind CSS utility classes.
- **Print Styles:** Use `print:hidden` for UI elements (nav, footer) and `print:block` for content that must be visible on paper.

### Architecture
- **Zero-Root Pollution:** Keep the root directory clean.
- **Islands:** The `<Search />` component uses vanilla JS for interactivity to keep the bundle size tiny. Avoid adding React/Vue unless complex state management is required.

## Deployment

- **Trigger:** Push to `main` branch.
- **Platform:** Cloudflare Pages.
- **Command:** `bun run build`.
- **Output:** `dist`.

## Troubleshooting

- **"ZodError" during build:**
  - This means your Markdown frontmatter doesn't match the schema in `src/content/config.ts`.
  - Fix the offending `.md` file to resolve.

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bun.js](https://bun.sh/)
