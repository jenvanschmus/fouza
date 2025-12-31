import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.date().optional(),
    description: z.string().optional(), // We'll use this for the search
  }),
});

export const collections = { gallery };
