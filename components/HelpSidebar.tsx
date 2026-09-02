import Link from 'next/link'
import { helpCategories } from '@/lib/help-articles'

interface HelpSidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function HelpSidebar({ isOpen, setIsOpen }: HelpSidebarProps) {
  return (
      <>
        {isOpen && (
            <div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
                onClick={() => setIsOpen(false)}
            />
        )}

        <nav
            aria-label="Navigasi bantuan"
            className={`
              fixed top-0 left-0 z-50 m-0 h-screen w-64 shrink-0 overflow-y-auto border-r border-gray-200 bg-white p-4 transition-transform duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-900 sm:sticky sm:top-24 sm:z-30 sm:h-[calc(100vh-6rem)] sm:translate-x-0 sm:bg-transparent
              ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full sm:shadow-none'}
            `}
        >
          <div className="mb-4 flex justify-end sm:hidden">
            <button
                onClick={() => setIsOpen(false)}
                className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

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
                            onClick={() => setIsOpen(false)}
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
      </>
  )
}