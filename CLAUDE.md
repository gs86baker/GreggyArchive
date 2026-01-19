# System Instructions for Claude Code
You are tasked with developing a high-performance personal website using the Astro framework and Bun.js.

# Project Standards

- **Clean Root Policy:** The root directory is reserved for configuration files only (`package.json`, `wrangler.toml`, `tsconfig.json`, `astro.config.mjs`) and AI guidance files.
- **Source Code:** All components, layouts, pages, and styles must be located within `/src/`.
- **Content Management:** Use Markdown for blog posts and projects (in `/src/content/`). Use structured JSON for resume data (in `/src/data/`).

## Directory Architecture

| Path | Purpose |
|------|---------|
| `/src/` | Application source code (layouts, components, pages) |
| `/src/content/` | Astro Content Collections (Markdown/MDX only) |
| `/src/data/` | Structured JSON data files (e.g., `resume.json`) |
| `/src/assets/` | Images/media for build-time optimization |
| `/public/` | Static assets served as-is |

## Astro Configuration

The `astro.config.mjs` must explicitly set `output: 'static'` for Cloudflare Pages compatibility.

# Deployment & Environment

- **Target:** Cloudflare Pages (Static)
- **Tooling:** Use `bun` for all commands (`bun add`, `bun dev`, `bun run build`)
- **Optimization:** Use Astro's `<Image />` component for local assets (WebP/AVIF conversion)

# Mandatory Features

1. **Resume Print Mode:** Hide headers, footers, and buttons during print using Tailwind `print:` utilities.
2. **Privacy First:** Cloudflare Web Analytics only. No heavy tracking scripts.
3. **Static Search:** Client-side search querying a pre-compiled JSON index of Markdown content.

# Communication Rules

- Provide concise, production-ready code.
- Use `bun add` for dependencies.
- Reference `PROJECT_DIRECTIVES/requirements.md` for detailed specifications.
