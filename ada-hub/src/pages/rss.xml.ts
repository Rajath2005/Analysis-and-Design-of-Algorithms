import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'ADA Hub — Algorithm Articles',
    description: 'Latest articles on Analysis and Design of Algorithms, VTU BCSL40A lab programs, and CS concepts.',
    site: context.site ?? 'https://ada-hub.replit.app',
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map(post => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.slug}/`,
        author: post.data.author,
        categories: post.data.tags,
      })),
    customData: '<language>en-us</language>',
  });
}
