import { FeedbackWidget } from './FeedbackWidget'

export function ArticleLayout({
  slug,
  children,
}: {
  slug: string
  children: React.ReactNode
}) {
  return (
    <article className="mx-auto max-w-2xl px-8 py-10">
      <div className="prose-sm">{children}</div>
      <FeedbackWidget articleSlug={slug} />
    </article>
  )
}
