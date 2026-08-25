// Sumber data terpusat untuk sidebar + search di help center.
// Setiap kali menambah artikel MDX baru di app/help/**, daftarkan juga di sini
// supaya muncul di navigasi dan bisa dicari.

export type HelpArticle = {
  slug: string // path setelah /help/
  title: string
  description: string
  keywords?: string[] // sinonim yang mungkin diketik pengguna awam
}

export type HelpCategory = {
  id: string
  title: string
  articles: HelpArticle[]
}

export const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Mulai di Sini',
    articles: [
      {
        slug: 'getting-started',
        title: 'Langkah Pertama Menggunakan Aplikasi',
        description: 'Kenali tampilan utama dan lakukan pengaturan awal.',
        keywords: ['mulai', 'awal', 'setup', 'daftar'],
      },
      {
        slug: 'dashboard', // <--- PENAMBAHAN ARTIKEL DASHBOARD
        title: 'Mengenal Tampilan Dashboard',
        description: 'Panduan memahami statistik, menu navigasi, dan status permohonan.',
        keywords: ['dashboard', 'tampilan', 'menu', 'permohonan', 'status'],
      },
    ],
  },
  {
    id: 'panduan-fitur',
    title: 'Panduan Fitur',
    articles: [
      {
        slug: 'panduan-fitur/mengelola-akun',
        title: 'Mengelola Akun & Profil',
        description: 'Cara mengubah nama, foto, dan kata sandi.',
        keywords: ['ganti password', 'ubah profil', 'email'],
      },
    ],
  },
  {
    id: 'faq',
    title: 'Pertanyaan Umum (FAQ)',
    articles: [
      {
        slug: 'faq',
        title: 'Pertanyaan yang Sering Diajukan',
        description: 'Jawaban singkat untuk pertanyaan paling umum.',
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Mengatasi Masalah',
    articles: [
      {
        slug: 'troubleshooting',
        title: 'Aplikasi Bermasalah? Coba Ini Dulu',
        description: 'Langkah cepat sebelum menghubungi support.',
        keywords: ['error', 'gagal', 'tidak bisa', 'stuck'],
      },
    ],
  },
]

export const allArticles: HelpArticle[] = helpCategories.flatMap((c) => c.articles)
