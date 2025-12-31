import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
  // 'content' type is correct for .md files with a body
  type: 'content', 
  schema: z.object({
    title: z.string(),
    image: z.string(),
    // Using z.any() tells Astro "don't validate this, just let it through"
    date: z.any().optional(), 
  }),
});

export const collections = {
  // This MUST match the folder name src/content/gallery
  'gallery': gallery,
};
