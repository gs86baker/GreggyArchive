import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const projects = await getCollection('projects');

  const allContent = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags,
      type: 'blog',
      slug: `/blog/${post.slug}`,
      date: post.data.pubDate,
    })),
    ...projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      tags: project.data.tags,
      type: 'project',
      slug: `/projects/${project.slug}`,
      date: project.data.pubDate,
    })),
  ].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return new Response(JSON.stringify(allContent), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
