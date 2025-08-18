import { useId } from 'react'
import AboutUsSection from '@/components/AboutUs/AboutUsSection'
import BlogPreview from '@/components/blog/BlogPreview'
import ClientIntro from '@/components/ClientIntro'
import EventsSection from '@/components/Events/EventsSection'
import TerminalSection from '@/components/Layout/TerminalSection'
import NextAppShowcase from '@/components/NextAppShowcase'
import ProjectsShowcase from '@/components/Projects/ProjectsShowcase'
import TerminalMembership from '@/components/TerminalMembership'
import TerminalPartners from '@/components/TerminalPartners'

export default async function Index() {
	return (
		<>
			<ClientIntro />
			<EventsSection />
			<NextAppShowcase />
			<TerminalSection title="Auszug aus unseren Projekten" headingLevel={2}>
				<ProjectsShowcase />
			</TerminalSection>
			<AboutUsSection />
			<TerminalSection title="Mitgliedschaft" headingLevel={2} id={useId()}>
				<TerminalMembership />
			</TerminalSection>
			<TerminalSection title="Sponsoring" headingLevel={2}>
				<TerminalPartners />
			</TerminalSection>
			<TerminalSection title="Neuland Blog" headingLevel={2}>
				<BlogPreview />
			</TerminalSection>
		</>
	)
}
