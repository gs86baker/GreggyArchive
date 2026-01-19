# Setup Instructions

This document provides step-by-step instructions for setting up the GreggyArchive project locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Bun.js**: The package manager and runtime used for this project
  - Download from [https://bun.sh/](https://bun.sh/)
- **Git**: For version control
- **Node.js 18+**: Required by Astro (Bun will handle most Node.js compatibility)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd greggyarchive
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

## Development Workflow (How to see your changes)

1. **Start the Live Development Server:**
   ```bash
   bun run dev
   ```
   The site will launch at `http://localhost:4321`.
   
   **Key Feature:** This server supports **Hot Module Replacement (HMR)**. 
   - You **do not** need to restart the server when you edit files.
   - Just save a Markdown file or component, and the browser will refresh instantly to show your changes.

2. **Preview Production Build (Optional):**
   If you want to test the exact static output (like the `search-index.json` or print styles) before deploying:
   ```bash
   bun run build
   bun run preview
   ```
   This serves the `dist/` folder locally.

## Adding Content

### 1. Create the File
**Blog Posts:**
Place files in `src/content/blog/`. The filename becomes the URL slug (e.g., `my-post.md` -> `/blog/my-post`).
```bash
touch src/content/blog/my-new-post.md
```

**Projects:**
Place files in `src/content/projects/`.
```bash
touch src/content/projects/my-project.md
```

### 2. Add Frontmatter (Strictly Typed)
You **must** include these fields. The build will fail if they are missing.

**Blog Post Schema:**
```yaml
---
title: "My Blog Post"
description: "A brief description for the card"
pubDate: 2024-01-15
tags: ["tag1", "tag2"]
heroImage: "/path/to/image.jpg" # Optional
---
```

**Project Schema:**
```yaml
---
title: "My Project"
description: "Project description"
pubDate: 2024-01-15
tags: ["javascript", "web"]
status: "Active" # Must be "Active" or "Archived"
techStack: ["React", "Node.js"] # Array of strings
githubLink: "https://github.com/username/project" # Optional
demoLink: "https://demo.example.com" # Optional
heroImage: "/path/to/image.jpg" # Optional
---
```

### 3. Verify Locally
1. Ensure `bun run dev` is running.
2. Navigate to `http://localhost:4321/blog/my-new-post`.
3. Check the "Blog" or "Projects" listing page to ensure the card appears correctly.
4. **Search:** The search bar works in dev mode! Type your new post title to confirm it's indexed.

### 4. Push to Deploy
Once satisfied:
```bash
git add .
git commit -m "feat: add new blog post about bun"
git push
```
Cloudflare Pages will detect the push, run `bun run build`, and deploy your site automatically within minutes.

## Resume Updates
Edit `src/data/resume.json`. The "About" page will update immediately in the local dev server.

## Troubleshooting

- **Build fails with "ZodError"**: You likely missed a required field in your Markdown frontmatter (e.g., forgot `status` in a project). Check the error message for the specific file.
- **Content not in Search**: In dev mode, the search index rebuilds on request. If it seems stale, refresh the page.
- **Images broken**: Ensure images are in `public/` (referenced as `/image.jpg`) or `src/assets/` (referenced via Astro imports).
