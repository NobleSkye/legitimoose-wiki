import { defineCollection, z } from 'astro:content';

const wikiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  wiki: wikiCollection,
};