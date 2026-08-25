import { ArticleLayout } from '@/components/ArticleLayout'

const faqs = [
  {
    q: 'Bagaimana cara mengubah kata sandi?',
    a: 'Buka Pengaturan Akun > Keamanan > Ubah Kata Sandi.',
  },
  {
    q: 'Apakah data saya aman?',
    a: 'Ya, semua data disimpan terenkripsi dan hanya bisa diakses oleh Anda.',
  },
  {
    q: 'Bagaimana cara menghubungi support?',
    a: 'Klik tombol Bantuan di pojok kanan bawah aplikasi, atau kirim email ke support@contoh.com.',
  },
  {
    q: 'Berapa lama waktu yang dibutuhkan sampai hasil labnya keluar?',
    a: 'Tergantung dari jenis pengujian yang kamu pilih ya. Biasanya estimasi hari kerjanya bakal langsung muncul pas kamu milih jenis layanan uji di sistem.',
  },
  {
    q: 'Bagaimana cara ambil hasil atau sertifikat labnya?',
    a: 'Kalau statusnya udah "Selesai", kamu gak perlu repot dateng ke lab. Tinggal klik tombol download di akun SIPUJA kamu, dan file sertifikat hasil ujinya langsung keunduh dalam bentuk PDF.',
  },
]

export const metadata = {
  title: 'Pertanyaan yang Sering Diajukan',
}

export default function FaqPage() {
  return (
    <ArticleLayout slug="faq">
      <h1>Pertanyaan yang Sering Diajukan</h1>
      <div className="space-y-6">
        {faqs.map((item) => (
          <div key={item.q}>
            <p className="mb-1 font-semibold text-gray-900">{item.q}</p>
            <p className="text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>
    </ArticleLayout>
  )
}
