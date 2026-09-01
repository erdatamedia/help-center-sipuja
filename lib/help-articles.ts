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
        slug: 'getting-started/langkah-pertama', // <--- PENAMBAHAN ARTIKEL LANGKAH PERTAMA
        title: 'Langkah Pertama Menggunakan Aplikasi',
        description: 'Kenali tampilan utama dan lakukan pengaturan awal.',
        keywords: ['mulai', 'awal', 'setup', 'daftar'],
      },
      
      {
        slug: 'getting-started/dashboard', // <--- PENAMBAHAN ARTIKEL DASHBOARD
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
        slug: 'panduan-fitur/dashboard',
        title: 'Panduan Navigasi & Ringkasan Dashboard',
        description: 'Penjelasan menu, statistik permohonan, dan status di dashboard.',
        keywords: ['dashboard', 'menu', 'statistik', 'status', 'tampilan'],
      },
      {
        slug: 'panduan-fitur/mengelola-akun',
        title: 'Mengelola Akun & Profil',
        description: 'Cara mengubah nama, foto, dan kata sandi.',
        keywords: ['ganti password', 'ubah profil', 'email'],
      },
      {
        slug: 'panduan-fitur/permohonan', 
        title: 'Cara Mengelola & Membuat Permohonan',
        description: 'Panduan membuat pengajuan baru, mengecek detail, dan memahami status permohonan.',
        keywords: ['permohonan', 'buat permohonan', 'sampel', 'tracking', 'status', 'verifikasi'],
      },
      {
        slug: 'panduan-fitur/notifikasi', 
        title: 'Melihat Pesan & Notifikasi System',
        description: 'Cara melihat pemberitahuan status permohonan, e-billing, dan pesan dari petugas.',
        keywords: ['notifikasi', 'pesan', 'pemberitahuan', 'update status', 'info'],
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
