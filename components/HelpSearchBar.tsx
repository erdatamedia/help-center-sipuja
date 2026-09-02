'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { allArticles } from '@/lib/help-articles'

// Search sederhana di sisi client (cocok untuk help center dengan puluhan
// artikel). Kalau jumlah artikel sudah ratusan, ganti dengan search index
// seperti Algolia/Meilisearch/Fuse.js untuk hasil yang lebih relevan.
export function HelpSearchBar() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return allArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.keywords?.some((k) => k.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <div className="relative">
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari bantuan, mis. 'ganti password'..."
          className="w-full rounded-lg border border-gray-300 pl-11 pr-4 py-2.5 text-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white text-gray-900 bg-white dark:bg-gray-700"
          aria-label="Cari artikel bantuan"
        />
      </div>
      {results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 dark:bg-gray-700 bg-white dark:text-white text-black shadow-lg">
          {results.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/help/${article.slug}`}
                className="block px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-500"
                onClick={() => setQuery('')}
              >
                <span className="font-medium dark:text-white text-gray-900">{article.title}</span>
                <span className="block text-xs dark:text-gray-300 text-gray-500">{article.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
