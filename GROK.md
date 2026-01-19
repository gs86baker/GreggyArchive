# Grok Fast Code Instructions
Project: Bun-powered Astro Portfolio/Blog
Host: Cloudflare Pages

# Constraints
- **Package Manager:** Bun (Mandatory).
- **Structure:** `src/` for code, `src/content/` for Markdown, root for config only.
- **Styling:** Tailwind CSS.

# Feature Focus
- **Structured Resume:** Pull from `resume.json`. Include a Print button that triggers a CSS-optimized print view.
- **Automated Assets:** All images must be processed through Astro's image optimization pipeline.
- **Search:** Build-time generation of a static search index.
- **Deployment:** Generate a `wrangler.toml` compatible with Cloudflare Pages static hosting.

# Code Generation Guidelines
- Keep the root directory clean. 
- Use TypeScript for all components and scripts.
- Ensure all Markdown content is validated via Astro Content Collections.
- Substitute `npx` with `bunx` in all suggested commands.
