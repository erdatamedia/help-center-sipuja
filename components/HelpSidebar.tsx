import Link from 'next/link'
import { helpCategories } from '@/lib/help-articles'

export function HelpSidebar() {
  return (
    <nav aria-label="Navigasi bantuan" className="w-64 shrink-0 border-r border-gray-200 dark:border-slate-800 p-4">
      {helpCategories.map((category) => (
        <div key={category.id} className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-400">
            {category.title}
          </p>
          <ul className="space-y-1">
            {category.articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/help/${article.slug}`}
                  className="block rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}