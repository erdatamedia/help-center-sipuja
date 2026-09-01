import { ArticleLayout } from '@/components/ArticleLayout'

const faqs = [
  {
    q: 'Bagaimana jika saya belum mempunyai akun?',
    a: 'Jika pengguna belum mempunyai sebuah akun. pengguna dapat membuat akun pada halaman registrasi ketika pengguna pertama kali mengakses dashboard ini.',
  },
  {
    q: 'Bagaimana jika saya lupa password ketika ingin login ke dashboard?',
    a: 'Jika pengguna lupa dengan password pengguna ketika login ke dashboard maka pengguna dapat menuju ke halaman Lupa Password pada halaman login dashboard.',
  },
  {
    q: 'Apakah data saya aman saat disimpan pada website dashboard ini?',
    a: 'Ya, semua data yang pengguna simpan pada website ini disimpan terenkripsi dan hanya bisa diakses oleh pengguna. Orang lain dan admin tidak dapat membaca data tersebut',
  },
  {
    q: 'Bagaimana caranya untuk menghubungi support center pada website dashboard ini?',
    a: 'agar pengguna dapat menghubungi support center cukup dengan klik tombol Bantuan di pojok kanan bawah aplikasi, atau kirim email ke support@contoh.com.',
  },
  {
    q: 'Berapa lama waktu yang dibutuhkan sampai hasil labnya keluar?',
    a: 'Tergantung dari jenis pengujian yang pengguna pilih. Estimasi hari kerjanya akan langsung muncul ketika pengguna memilih jenis layanan uji pada sistem.',
  },
  {
    q: 'Bagaimana caranya untuk mengambil hasil atau sertifikat labnya?',
    a: 'Jika statusnya sudah menunjukkan status "Selesai", pengguna tidak perlu repot datang ke lab. pengguna cukup klik tombol download pada akun SIPUJA pengguna, dan file sertifikat hasil ujinya langsung terunduh dalam bentuk file PDF.',
  },
]

export default function FaqPage() {
  return (
    <ArticleLayout slug="faq">
      <h1 className={"mb-4 text-black"}>Pertanyaan yang Sering Diajukan</h1>
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
