'use client'

import { useState } from 'react'

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
  }

  return (
    <div className="mt-10 border-t border-gray-200 pt-6">
      {answered === null ? (
        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-600">Apakah artikel ini membantu?</p>
          <button
            onClick={() => handleFeedback('yes')}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
          >
            👍 Ya
          </button>
          <button
            onClick={() => handleFeedback('no')}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
          >
            👎 Tidak
          </button>
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          {answered === 'yes'
            ? 'Terima kasih atas masukannya! 🙌'
            : 'Terima kasih. Coba lihat halaman Troubleshooting atau hubungi support kami.'}
        </p>
      )}
    </div>
  )
}
