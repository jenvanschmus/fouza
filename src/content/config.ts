import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
  type: 'content', // This allows for a description in Markdown
  schema: ({ image }) => z.object({
    title: z.string(),
    // 'image' will be the path to the photo Jen uploads
    image: z.string(), 
    date: z.date().optional(),
  }),
});

export const collections = { gallery };
