import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		tags: z.array(z.string()).default([]),
		status: z.enum(['Active', 'Archived']),
		techStack: z.array(z.string()),
		githubLink: z.string().url().optional(),
		demoLink: z.string().url().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog, projects };
