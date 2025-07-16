import { motion } from 'framer-motion'
import { type JSX, memo } from 'react'

interface FeatureItemProps {
	icon: JSX.Element
	title: string
	description: string
}

const FeatureItem = memo(({ icon, title, description }: FeatureItemProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
			viewport={{ once: true }}
			className="rounded-2xl shadow-xl bg-gradient-to-br from-white/10 to-terminal-windowTitle/60 backdrop-blur-xl border border-terminal-text/15 p-4 flex flex-col items-center text-center group transition-transform duration-300 hover:shadow-2xl h-full"
			style={{
				background:
					'linear-gradient(135deg, rgba(34,193,195,0.10) 0%, rgba(17,17,17,0.70) 100%)',
				backdropFilter: 'blur(16px)',
				WebkitBackdropFilter: 'blur(16px)'
			}}
		>
			<div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-terminal-cyan/10 border border-terminal-cyan/30 shadow-sm backdrop-blur-sm mb-3 group-hover:bg-terminal-cyan/20 transition-colors">
				{icon}
			</div>
			<div className="flex-1 flex flex-col justify-center">
				<p className="font-extrabold text-terminal-text text-base mb-2 drop-shadow-md">
					{title}
				</p>
				<p className="text-sm text-terminal-text/90 leading-snug m-0 ">
					{description}
				</p>
			</div>
		</motion.div>
	)
})

export default FeatureItem
