import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    image: z.string(),
    // We make date optional to prevent crashes if it's missing
    date: z.date().optional().or(z.string().optional()), 
  }),
});

// IMPORTANT: The key 'gallery' must match the folder name in src/content/
export const collections = {
  'gallery': gallery,
};
