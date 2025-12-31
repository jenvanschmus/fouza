import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    image: z.string(),
    // We change this to 'any' for now to stop the schema from rejecting the file
    // due to timezones or formatting in the date string.
    date: z.any().optional(), 
  }),
});

export const collections = {
  'gallery': gallery,
};
