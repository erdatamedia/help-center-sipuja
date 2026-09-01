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
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari bantuan, mis. 'ganti password'..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 text-black"
        aria-label="Cari artikel bantuan"
      />
      {results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          {results.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/help/${article.slug}`}
                className="block px-4 py-2.5 text-sm hover:bg-gray-50"
                onClick={() => setQuery('')}
              >
                <span className="font-medium text-gray-900">{article.title}</span>
                <span className="block text-xs text-gray-500">{article.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
