import { ChevronRight, Code, ExternalLink } from 'lucide-react'
import type React from 'react'
import { memo, useCallback } from 'react'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

export interface ProjectLink {
	label: string
	url: string
}

export interface ProjectDetails {
	id: string
	title: string
	description: string
	links: ProjectLink[]
	tags?: string[]
	longDescription?: string
	imageUrl?: string
	additionalInfo?: string
}

interface ProjectCardProps {
	project: ProjectDetails
	onClick: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
	const handleLinkClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation()
	}, [])

	return (
		<Card
			className="h-full rounded-2xl border-terminal-text/15 shadow-xl cursor-pointer group relative overflow-hidden flex flex-col bg-gradient-to-br from-white/10 to-terminal-windowTitle/60 backdrop-blur-xl transition-transform duration-300 hover:shadow-2xl"
			onClick={onClick}
			style={{
				background:
					'linear-gradient(135deg, rgba(34,193,195,0.10) 0%, rgba(17,17,17,0.70) 100%)',
				backdropFilter: 'blur(16px)',
				WebkitBackdropFilter: 'blur(16px)'
			}}
		>
			{/* Project Image */}
			{project.imageUrl && (
				<div className="w-full h-40 bg-terminal-windowTitle/30 overflow-hidden relative">
					{/** biome-ignore lint/performance/noImgElement: TODO */}
					<img
						src={project.imageUrl}
						alt={project.title}
						className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
				</div>
			)}

			<CardHeader className="p-5 pb-2 flex flex-col items-start gap-2 bg-transparent">
				<CardTitle className="text-xl font-extrabold flex items-center gap-2 text-terminal-text drop-shadow-md">
					<Code size={22} className="text-terminal-cyan/70 mr-1" />
					{project.title}
				</CardTitle>
				{/* Tags */}
				{project.tags && project.tags.length > 0 && (
					<div className="flex flex-wrap gap-2 mt-1">
						{project.tags.map((tag, index) => (
							<span
								key={index}
								className="text-xs px-3 py-1 rounded-full bg-terminal-text/10 text-terminal-text font-medium border border-terminal-text/30 shadow-sm backdrop-blur-sm"
							>
								{tag}
							</span>
						))}
					</div>
				)}
			</CardHeader>
			<CardContent className="pt-2 pb-4 px-5 grow overflow-auto">
				<p className="text-base text-terminal-text/90 mb-2 leading-relaxed">
					{project.description}
				</p>
			</CardContent>
			<CardFooter className="px-5 pb-8 pt-0 flex items-center justify-start min-h-[56px] relative">
				<div className="flex gap-2 flex-wrap w-[calc(100%-60px)]">
					{project.links.slice(0, 3).map((link) => (
						<a
							key={link.label}
							href={link.url}
							target="_blank"
							rel="noreferrer noopener"
							className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-terminal-text/20 text-terminal-text font-semibold hover:bg-terminal-text/40  transition-colors shadow-sm border border-terminal-text/30 backdrop-blur-sm whitespace-nowrap max-w-full truncate no-underline text-xs"
							onClick={handleLinkClick}
						>
							<ExternalLink size={14} className="mr-1" />
							{link.label}
						</a>
					))}
				</div>
			</CardFooter>

			{/* Floating Details Button */}

			<ChevronRight
				size={28}
				className="group-hover/details:translate-x-1 transition-transform absolute bottom-4 right-4 z-10 text-terminal-cyan"
			/>

			{/* Glass border hover effect */}
			<div className="absolute inset-0 pointer-events-none rounded-2xl border border-terminal-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_24px_rgba(51,195,240,0.15)]" />
		</Card>
	)
}

export default memo(ProjectCard)
