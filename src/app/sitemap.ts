import { allPosts } from 'contentlayer/generated'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://neuland-ingolstadt.de'

	// Static pages
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 1.0
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.9
		},
		{
			url: `${baseUrl}/legal/impressum`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.3
		},
		{
			url: `${baseUrl}/legal/datenschutz`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.3
		},
		{
			url: `${baseUrl}/legal/datenschutzordnung`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.3
		}
	]

	// Blog posts
	const blogPosts = allPosts.map((post) => ({
		url: `${baseUrl}${post.url}`,
		lastModified: new Date(post.date),
		changeFrequency: 'monthly' as const,
		priority: 0.5
	}))

	return [...staticPages, ...blogPosts]
}
