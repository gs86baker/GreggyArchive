# Project Requirements: Personal Portfolio & Blog

## 1. Project Overview
A high-performance, minimalist personal website featuring a blog, project showcase, and a structured resume. The site is a Markdown-driven Static Site Generator (SSG) built for speed, privacy, and ease of maintenance.

* **Runtime & Package Manager:** Bun.js
* **Framework:** Astro (Static Output)
* **Styling:** Tailwind CSS
* **Hosting:** Cloudflare Pages
* **Deployment Workflow:** GitHub-integrated CI/CD (push-to-deploy)

---

## 2. Directory Architecture & Organization
To maintain a clean workspace, the project must adhere to a strict folder hierarchy. **No application-specific source files should be placed in the root directory.**

* **/ (Root):** Reserved exclusively for configuration (`package.json`, `wrangler.toml`, `tsconfig.json`, `astro.config.mjs`) and AI CLI guidance files (`GEMINI.md`, `CLAUDE.md`, etc.).
* **/src/:** All application source code, including layouts, components, and pages.
* **/src/content/:** Astro Content Collections for Markdown/MDX files (Blog and Projects). Managed via `defineCollection()` in `src/content/config.ts`.
* **/src/data/:** Structured JSON data files (e.g., `resume.json`). These are imported as ES modules, not content collections.
* **/src/assets/:** Original images and media intended for build-time optimization.
* **/public/:** Static assets that do not require processing (e.g., favicon, robots.txt).

### 2.1 Astro Configuration
The `astro.config.mjs` must explicitly set:
```js
output: 'static'
```
This ensures compatibility with Cloudflare Pages static hosting.

---

## 3. Functional Requirements

### 3.1 Content Management
* **Markdown-Driven:** All blog posts and project entries must be authored in Markdown with YAML frontmatter.
* **Type Safety:** Use Astro Content Collections (`defineCollection`) to validate Markdown metadata.
* **Project Showcase:** A dedicated area for software projects including status (Active/Archived), tech stack, and GitHub links.
* **Static Search:** Implement a lightweight client-side search using a pre-generated JSON index of titles and tags created at build time.

### 3.2 Resume Integration
* **Data Source:** All resume content must be stored in `/src/data/resume.json`.
* **Web Rendering:** An "About/Resume" page that dynamically renders the JSON data via Tailwind.
* **Print Functionality:**
    * **Mandatory Print Button:** A visible button on the resume page that triggers the browser's print dialog.
    * **Print-Specific CSS:** Use Tailwind `print:` utilities or a dedicated print stylesheet to ensure the output is a professional, one-page PDF (hiding navigation and UI buttons).

### 3.3 Performance & Analytics
* **Asset Management:** Automated image optimization (resizing and conversion to WebP/AVIF) via Astro’s Image Service.
* **Analytics:** Integration of Cloudflare Web Analytics (privacy-focused) via the `wrangler.toml` and site header.

---

## 4. AI CLI Instructions (Operational Constraints)
When generating code or modifying the project:
1.  **Bun-First:** Use `bun` for all dependency installations, script executions, and builds.
2.  **Zero-Root Pollution:** All new components, styles, or logic must be placed within the `/src` directory.
3.  **Static Compatibility:** Ensure all features remain compatible with a standard Cloudflare Pages static deployment (no Node.js server-side dependencies).
