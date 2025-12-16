import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://koracreators.net';

  // Static pages with fixed lastModified dates (doesn't change every deploy)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: '2025-01-01',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2025-01-01',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: '2025-01-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: '2025-01-01',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: '2025-01-01',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Regional: South Africa
    {
      url: `${baseUrl}/za`,
      lastModified: '2025-01-01',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic blog posts
  const posts = await getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}



