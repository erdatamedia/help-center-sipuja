'use client'

import { useState } from 'react'
//import {sendGAEvent} from "@next/third-parties/google";

// Widget "Apakah ini membantu?" di akhir tiap artikel. Ganti fungsi
// handleFeedback dengan pemanggilan API Nest.js Anda, mis.
// POST /help-articles/:slug/feedback
export function FeedbackWidget({ articleSlug }: { articleSlug: string }) {
  const [answered, setAnswered] = useState<'yes' | 'no' | null>(null)

  function handleFeedback(value: 'yes' | 'no') {
    setAnswered(value)
    // fetch(`/api/help-articles/${articleSlug}/feedback`, {
    //   method: 'POST',
    //   body: JSON.stringify({ helpful: value === 'yes' }),
    // })
    if (typeof window !== 'undefined' && typeof (window).gtag === 'function') {
      (window).gtag('event', 'doc_feedback', {
        page_path: articleSlug,
        value: value
      })
    }
  }

  return (
    <div className="mt-10 border-t border-gray-200 pt-6">
      {answered === null ? (
        <div className="flex items-center gap-3">
          <p className="text-sm dark:text-white text-gray-600">Apakah artikel ini membantu?</p>
          <button
            onClick={() => handleFeedback('yes')}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm dark:hover:bg-gray-700 hover:bg-gray-50"
          >
            👍 Ya
          </button>
          <button
            onClick={() => handleFeedback('no')}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm dark:hover:bg-gray-700 hover:bg-gray-50"
          >
            👎 Tidak
          </button>
        </div>
      ) : (
        <p className="text-sm dark:text-white text-gray-500">
          {answered === 'yes'
            ? 'Terima kasih atas masukannya! 🙌'
            : 'Terima kasih. Coba lihat halaman Troubleshooting atau hubungi support kami.'}
        </p>
      )}
    </div>
  )
}
