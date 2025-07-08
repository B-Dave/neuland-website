import type React from 'react'

interface TerminalButtonProps {
	children: React.ReactNode
	href?: string
	onClick?: () => void
	target?: string
	rel?: string
	className?: string
}

const baseStyles =
	'inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold border border-terminal-text/30 bg-gradient-to-br from-white/10 to-terminal-windowTitle/60 text-terminal-text/80 shadow-md transition-all duration-200 hover:border-terminal-cyan/80 hover:bg-terminal-cyan/10 hover:text-terminal-highlight focus:outline-none focus:ring-2 focus:ring-terminal-cyan/60 focus:ring-offset-2 backdrop-blur-sm no-underline'

const TerminalButton: React.FC<TerminalButtonProps> = ({
	children,
	href,
	onClick,
	target,
	rel,
	className = ''
}) => {
	if (href) {
		return (
			<a
				href={href}
				className={`${baseStyles} ${className}`}
				onClick={onClick}
				target={target}
				rel={rel}
			>
				{children}
			</a>
		)
	}

	return (
		<button
			className={`${baseStyles} ${className}`}
			onClick={onClick}
			type="button"
		>
			{children}
		</button>
	)
}

export default TerminalButton
