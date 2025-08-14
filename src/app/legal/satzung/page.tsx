import Link from 'next/link'
import FetchErrorMessage from '@/components/Markdown/FetchErrorMessage'
import MarkdownContent from '@/components/Markdown/MarkdownContent'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { fetchOutlineDocument, OUTLINE_IDS } from '@/lib/outline-api'

export default async function Satzung() {
	const result = await fetchOutlineDocument(OUTLINE_IDS.satzung)

	return (
		<div className="pt-20">
			<Breadcrumb className="mb-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/">root</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink>Satzung</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			{result.success && result.content ? (
				<MarkdownContent
					content={`# ${result.title}\n\n${result.content}`}
					showToc
				/>
			) : (
				<FetchErrorMessage title="der Satzung" error={result.error} />
			)}
		</div>
	)
}
