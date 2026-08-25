import { HelpSidebar } from '@/components/HelpSidebar'
import { HelpSearchBar } from '@/components/HelpSearchBar'

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-8 py-4">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm text-gray-500">Pusat Bantuan</p>
          <HelpSearchBar />
        </div>
      </header>
      <div className="mx-auto flex max-w-4xl">
        <HelpSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
