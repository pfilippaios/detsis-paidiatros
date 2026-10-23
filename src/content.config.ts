import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { topics } from './data/topics';

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    topic: z.enum(Object.keys(topics) as [keyof typeof topics]),
    /** path under /public, also used for the card thumbnail */
    image: z.string(),
  }),
});

export const collections = { articles };
