import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        publishDate: z.date(),
        tags: z.array(z.string()),
        image: image(),
        categories: z.string()
    }),
});

export const collections = {
  'blog': blogCollection,
};
