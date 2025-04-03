import type React from 'react'
import { useState } from 'react'
import TerminalActionButton from '../Events/TerminalActionButton'

interface SimpleTerminalWindowProps {
	title: string
	children: React.ReactNode
	onClose?: () => void
}

const ProjectTerminalWindow: React.FC<SimpleTerminalWindowProps> = ({
	title,
	children,
	onClose
}) => {
	const [emojiRain, setEmojiRain] = useState<{ active: boolean; type: string }>(
		{
			active: false,
			type: ''
		}
	)

	const handleButtonClick = (color: 'red' | 'yellow' | 'green') => {
		if (color === 'red' && onClose) {
			onClose()
		} else if (color === 'yellow' && !emojiRain.active) {
			setEmojiRain({ active: true, type: 'food' })
			setTimeout(() => setEmojiRain({ active: false, type: '' }), 4000)
		} else if (color === 'green' && !emojiRain.active) {
			setEmojiRain({ active: true, type: 'nature' })
			setTimeout(() => setEmojiRain({ active: false, type: '' }), 4000)
		}
	}

	const getEmojis = (type: string, count: number) => {
		const foodEmojis = [
			'🍕',
			'🍔',
			'🌮',
			'🍦',
			'🍩',
			'🍪',
			'🍇',
			'🍓',
			'🌭',
			'🧀'
		]
		const natureEmojis = [
			'🌱',
			'🌲',
			'🌻',
			'🌷',
			'🌵',
			'🍀',
			'🌿',
			'🌴',
			'🦋',
			'🐝'
		]
		const emojisToUse = type === 'food' ? foodEmojis : natureEmojis

		return Array.from({ length: count }, (_, i) => ({
			id: i,
			emoji: emojisToUse[Math.floor(Math.random() * emojisToUse.length)],
			left: Math.random() * 100,
			size: Math.random() * 16 + 14,
			delay: Math.random() * 0.5,
			duration: Math.random() * 1 + 2
		}))
	}

	return (
		<div className="w-full bg-terminal-window border border-terminal-windowBorder rounded-md overflow-hidden mb-8 relative">
			<div className="bg-terminal-windowTitle text-terminal-text px-4 py-2 flex items-center">
				<div className="flex">
					<TerminalActionButton
						color="red"
						onButtonClick={handleButtonClick}
						animationInProgress={!onClose}
					/>
					<TerminalActionButton
						color="yellow"
						onButtonClick={handleButtonClick}
						animationInProgress={emojiRain.active}
					/>
					<TerminalActionButton
						color="green"
						onButtonClick={handleButtonClick}
						animationInProgress={emojiRain.active}
					/>
				</div>
				<div className="ml-4 flex-1 text-center text-sm opacity-80">
					{title}
				</div>
			</div>
			<div className="p-4 relative">
				{children}

				{}
				{emojiRain.active && (
					<div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
						{getEmojis(emojiRain.type, 30).map((emoji) => (
							<div
								key={`emoji-${emoji.id}`}
								className="absolute emoji-rain"
								style={{
									left: `${emoji.left}%`,
									fontSize: `${emoji.size}px`,
									animationDelay: `${emoji.delay}s`,
									animationDuration: `${emoji.duration}s`
								}}
							>
								{emoji.emoji}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default ProjectTerminalWindow
