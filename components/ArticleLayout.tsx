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
      <div className="prose prose-sm dark:prose-invert text-slate-900 dark:text-slate-100 dark:[--tw-prose-body:theme(colors.slate.100)] dark:[--tw-prose-headings:theme(colors.white)] dark:[--tw-prose-bold:theme(colors.white)] dark:[--tw-prose-bullets:theme(colors.slate.300)]">
        {children}
      </div>
      <FeedbackWidget articleSlug={slug} />
    </article>
  )
}