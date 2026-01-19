#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { glob } from 'glob';

// Get the directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSearchIndex() {
  try {
    const searchIndex = [];

    // Process blog posts
    const blogFiles = await glob('src/content/blog/**/*.md');
    for (const filePath of blogFiles) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      // Extract slug from filename
      const slug = path.basename(filePath, '.md');

      // Clean content for search (remove markdown syntax)
      const cleanContent = content.replace(/[#*`]/g, '').toLowerCase();

      searchIndex.push({
        id: `blog-${slug}`,
        type: 'blog',
        title: data.title || 'Untitled',
        description: data.description || '',
        tags: data.tags || [],
        pubDate: data.pubDate ? new Date(data.pubDate).toISOString() : new Date().toISOString(),
        content: cleanContent.substring(0, 500), // First 500 chars for search
        url: `/blog/${slug}`
      });
    }

    // Process projects
    const projectFiles = await glob('src/content/projects/**/*.md');
    for (const filePath of projectFiles) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      // Extract slug from filename
      const slug = path.basename(filePath, '.md');

      // Clean content for search (remove markdown syntax)
      const cleanContent = content.replace(/[#*`]/g, '').toLowerCase();

      searchIndex.push({
        id: `project-${slug}`,
        type: 'project',
        title: data.title || 'Untitled',
        description: data.description || '',
        tags: data.tags || [],
        techStack: data.techStack || [],
        status: data.status || 'Active',
        pubDate: data.pubDate ? new Date(data.pubDate).toISOString() : new Date().toISOString(),
        content: cleanContent.substring(0, 500), // First 500 chars for search
        url: `/projects/${slug}`,
        githubLink: data.githubLink,
        demoLink: data.demoLink
      });
    }

    // Ensure public directory exists
    const publicDir = path.join(__dirname, 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write the search index
    const indexPath = path.join(publicDir, 'search-index.json');
    fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2));

    console.log(`Generated search index with ${searchIndex.length} items at ${indexPath}`);

  } catch (error) {
    console.error('Error generating search index:', error);
    process.exit(1);
  }
}

generateSearchIndex();