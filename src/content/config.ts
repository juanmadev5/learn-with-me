import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
        dateToParse: z.string(),
        time: z.string(),
        img: z.string(),
        author: z.string(),
        readtime: z.number(),
        metaDescription: z.string(),
        keywords: z.string()
    })
})

export const collections = { blogs }