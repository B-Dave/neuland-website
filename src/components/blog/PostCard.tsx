'use client'
import type { Post } from 'contentlayer/generated'
import { ChevronRight } from 'lucide-react'
import moment from 'moment'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

type PostCardProps = {
	post: Post
}

export function PostCard({ post }: PostCardProps) {
	const formattedDate = post.date ? moment(post.date).format('DD.MM.YYYY') : ''

	return (
		<Card
			className="h-full rounded-2xl border-terminal-text/15 shadow-xl cursor-pointer group relative overflow-hidden flex flex-col bg-gradient-to-br from-white/10 to-terminal-windowTitle/60 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl"
			style={{
				background:
					'linear-gradient(135deg, rgba(34,193,195,0.10) 0%, rgba(17,17,17,0.70) 100%)',
				backdropFilter: 'blur(16px)',
				WebkitBackdropFilter: 'blur(16px)'
			}}
		>
			<Link href={post.url} className="flex flex-col h-full no-underline">
				<CardHeader className="p-5 pb-2 flex flex-col items-start bg-transparent">
					<CardTitle className="text-lg font-extrabold flex items-center gap-2 text-terminal-text drop-shadow-md">
						{post.title}
					</CardTitle>
					{formattedDate && (
						<div className="text-sm text-terminal-text/70 font-mono">
							<time dateTime={post.date}>{formattedDate}</time>
						</div>
					)}
					{post.tags?.length > 0 && (
						<div className="flex flex-wrap gap-2 mt-1">
							{post.tags.map((tag) => (
								<Badge
									key={tag}
									variant="outline"
									className="text-xs px-3 py-1 rounded-full bg-terminal-text/10 text-terminal-text font-medium border border-terminal-text/30 shadow-sm backdrop-blur-sm"
								>
									{tag}
								</Badge>
							))}
						</div>
					)}
				</CardHeader>
				<CardContent className="pt-2 pb-4 px-5 grow overflow-auto">
					{post.description && (
						<p className="text-base text-terminal-text/90 mb-2 leading-relaxed line-clamp-2">
							{post.description}
						</p>
					)}
				</CardContent>
				<CardFooter className="px-5 pb-8 pt-0 flex items-center justify-start min-h-[56px] relative">
					{/* Floating Details Button */}
					<ChevronRight
						size={28}
						className="absolute bottom-4 right-4 z-10 text-terminal-cyan group-hover:translate-x-1 transition-transform"
					/>
				</CardFooter>
				{/* Glass border hover effect */}
				<div className="absolute inset-0 pointer-events-none rounded-2xl border border-terminal-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_24px_rgba(51,195,240,0.15)]" />
			</Link>
		</Card>
	)
}
