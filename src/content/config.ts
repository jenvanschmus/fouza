import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
  type: 'content', // 'content' type automatically handles the Markdown body
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.date().optional()
  }),
});

export const collections = {
  'gallery': gallery,
};
