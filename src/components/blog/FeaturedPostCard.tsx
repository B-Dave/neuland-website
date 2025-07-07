'use client'

import type { Post } from 'contentlayer/generated'
import { ChevronRight, FileText } from 'lucide-react'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { memo } from 'react'
import { Badge } from '@/components/ui/badge'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

type FeaturedPostCardProps = {
	post: Post
}

const FeaturedPostCard = ({ post }: FeaturedPostCardProps) => {
	const router = useRouter()

	if (!post?.url || !post?.title) {
		return null
	}

	const formattedDate = post.date ? moment(post.date).format('DD.MM.YYYY') : ''

	return (
		<div className="h-full p-2 transition-transform duration-300 hover:scale-[1.03]">
			<Card className="h-full rounded-xl bg-terminal-window border-terminal-window-border cursor-pointer group relative overflow-hidden flex flex-col">
				<Link href={post.url} className="flex flex-col h-full no-underline">
					<CardHeader className="bg-terminal-windowTitle/50 p-4 pl-6">
						<CardTitle className="text-md font-bold flex items-center gap-2 text-terminal-cyan">
							<FileText size={18} className="text-terminal-text mr-1" />
							{post.title}
						</CardTitle>
					</CardHeader>
					<CardContent className="pt-4 pb-3 grow overflow-auto">
						{formattedDate && (
							<div className="text-sm text-terminal-text/70 font-mono mb-3">
								<time dateTime={post.date}>{formattedDate}</time>
							</div>
						)}
						{post.description && (
							<p className="text-sm mb-3 text-terminal-text line-clamp-2">
								{post.description}
							</p>
						)}

						{post.tags?.length > 0 && (
							<div className="flex flex-wrap gap-1 mb-3 mt-1">
								{post.tags.map((tag) => (
									<button
										key={tag}
										type="button"
										className="no-underline bg-transparent border-none p-0 m-0 cursor-pointer"
										onClick={(e) => {
											e.stopPropagation()
											e.preventDefault()
											router.push(
												`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`
											)
										}}
									>
										<Badge
											variant="outline"
											className="text-[12px] py-0 hover:bg-terminal-cyan/10 cursor-pointer"
										>
											{tag}
										</Badge>
									</button>
								))}
							</div>
						)}
					</CardContent>
					<CardFooter className="text-xs">
						<div className="text-terminal-cyan flex items-center">
							Mehr lesen{' '}
							<ChevronRight
								size={14}
								className="ml-1 group-hover:translate-x-1 transition-transform"
							/>
						</div>
					</CardFooter>
				</Link>

				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-xl">
					<div className="absolute inset-0 border border-terminal-cyan shadow-[0_0_10px_rgba(51,195,240,0.3)] rounded-xl" />
				</div>
			</Card>
		</div>
	)
}

export default memo(FeaturedPostCard)
