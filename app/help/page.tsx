import Link from 'next/link'
import { helpCategories } from '@/lib/help-articles'

export default function HelpHomePage() {
  return (
    <div className="px-8 py-10 ">
      <h1 className="mb-2 text-2xl font-bold dark:text-white text-gray-900">Ada yang bisa kami bantu?</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-100">
        Cari jawaban di atas, atau pilih kategori di bawah ini.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {helpCategories.map((category) => (
          <div key={category.id} className="rounded-xl border border-gray-200 p-5">
            <h2 className="mb-2 font-semibold dark:text-white text-gray-900">{category.title}</h2>
            <ul className="space-y-1">
              {category.articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/help/${article.slug}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
