import { HelpSidebar } from '@/components/HelpSidebar'
import { HelpSearchBar } from '@/components/HelpSearchBar'
import ThemeToggle from '@/components/ThemeToggle'
import Image from 'next/image'

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:gap-6 md:px-8">
          {/* Logo & judul - fixed, gak ikut menyusut */}
          <div className="flex shrink-0 items-center gap-2.5 text-black">
            <Image
              src="/svg/logo.svg"
              alt="Sipuja logo"
              width={40}
              height={20}
            />
            <div>
              <span className="block text-base font-bold leading-none text-slate-900">SIPUJA</span>
              <span className="hidden text-xs text-slate-400 sm:block">Sistem Pengujian Hasil Lab</span>
            </div>
          </div>

          {/* Search bar - ambil sisa ruang & di-center */}
          <div className="flex flex-1 justify-center">
            <div className="w-full max-w-2xl">
              <HelpSearchBar />
            </div>
          </div>

          <ThemeToggle />
        </div>
      </header>

      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 md:flex-row md:gap-8 md:px-8">
        <HelpSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}