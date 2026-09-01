import { HelpSidebar } from '@/components/HelpSidebar'
import { HelpSearchBar } from '@/components/HelpSearchBar'
import ThemeToggle from '@/components/ThemeToggle'
import Image from 'next/image'

export default function HelpLayout({ children }: { children: React.ReactNode }) {
    // TODO: memperbaiki navbar

  return (
    <div className="min-h-screen bg-white">
      <header className="grid space-y-2 md:flex items-center border-b bg-white border-gray-200 px-4 md:px-8 py-4">
        <div className="flex items-center gap-2.5 text-black">
            <Image
                src="/svg/logo.svg"
                alt="Sipuja logo"
                width={40}
                height={20}
            />
            <div>
                <span className="font-bold text-slate-900 text-base leading-none block">SIPUJA</span>
                <span className="text-slate-400 text-xs hidden sm:block">Sistem Pengujian Hasil Lab</span>
            </div>
        </div>
          <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm text-gray-500">Pusat Bantuan</p>
          <HelpSearchBar />
        </div>
        <ThemeToggle />
      </header>
      <div className="mx-auto flex max-w-4xl">
        <HelpSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
