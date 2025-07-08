'use client'
import type React from 'react'
import TerminalSection from '@/components/Layout/TerminalSection'
import { Card, CardContent } from '@/components/ui/card'

const AboutUsSection: React.FC = () => {
	return (
		<TerminalSection title="Über uns" headingLevel={2}>
			{/* Main intro card */}
			<Card
				className="rounded-2xl shadow-xl bg-gradient-to-br from-white/10 to-terminal-windowTitle/60 backdrop-blur-xl border border-terminal-text/15 pt-4  mb-4"
				style={{
					background:
						'linear-gradient(135deg, rgba(34,193,195,0.10) 0%, rgba(17,17,17,0.70) 100%)',
					backdropFilter: 'blur(16px)',
					WebkitBackdropFilter: 'blur(16px)'
				}}
			>
				<CardContent className="flex items-center gap-4">
					<div>
						<h3 className="text-xl font-extrabold text-terminal-text drop-shadow-md mb-2">
							Gemeinschaft & Plattform
						</h3>
						<p className=" text-terminal-text/90 leading-relaxed m-0">
							Wir bieten Studierenden eine{' '}
							<span className="font-bold text-terminal-cyan">Plattform</span>{' '}
							zum Austausch, zur{' '}
							<span className="font-bold text-terminal-cyan">
								Projektarbeit
							</span>{' '}
							und zur{' '}
							<span className="font-bold text-terminal-cyan">
								Wissensvermittlung
							</span>
							.
						</p>
					</div>
				</CardContent>
			</Card>

			{/* Feature cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
				{[
					{
						title: 'Projekte & Wettbewerbe',
						desc: 'Wir entwickeln innovative Projekte, nehmen an Wettbewerben teil und fördern Kreativität.'
					},
					{
						title: 'Veranstaltungen & Wissen',
						desc: 'Wir organisieren Events rund um Informatik und Technik – offen für alle Fakultäten und Studiengänge.'
					},
					{
						title: 'Community & Networking',
						desc: 'Lerne neue Leute kennen, vernetze dich und werde Teil einer aktiven, hilfsbereiten Studierenden-Community.'
					}
				].map((feature) => (
					<Card
						key={feature.title}
						className="flex flex-col justify-center items-start rounded-2xl shadow-xl bg-gradient-to-br from-white/10 to-terminal-windowTitle/60 backdrop-blur-xl border border-terminal-text/15 p-6 min-h-[160px] h-full"
						style={{
							background:
								'linear-gradient(135deg, rgba(34,193,195,0.10) 0%, rgba(17,17,17,0.70) 100%)',
							backdropFilter: 'blur(16px)',
							WebkitBackdropFilter: 'blur(16px)'
						}}
					>
						<CardContent className="flex items-start gap-3 p-0 grow">
							<div>
								<p className="font-semibold text-terminal-text mb-1 text-lg">
									{feature.title}
								</p>
								<p className="text-terminal-text/80 text-sm m-0">
									{feature.desc}
								</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</TerminalSection>
	)
}

export default AboutUsSection
