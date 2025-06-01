import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import FeaturedPostCard from './FeaturedPostCard'

export default function BlogPreview() {
	const posts = allPosts
		.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
		.slice(0, 3)

	return (
		<div className="w-full -mt-4">
			<div className="flex justify-end items-center mb-6">
				<Button variant="outline" asChild className="align-right">
					<Link href="/blog" className="no-underline">
						Alle Posts
					</Link>
				</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts.map((post, idx) => (
					<FeaturedPostCard post={post} key={idx} />
				))}
			</div>
		</div>
	)
}
