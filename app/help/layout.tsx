'use client'

import { useState } from 'react'
import { HelpSidebar } from '@/components/HelpSidebar'
import { HelpSearchBar } from '@/components/HelpSearchBar'
import ThemeToggle from '@/components/ThemeToggle'
import Image from 'next/image'

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
      <div className="min-h-screen">
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:gap-6 md:px-8">

            <div className="flex w-full items-center justify-between md:w-auto">
              <div className="flex items-center gap-3">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-slate-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-300 sm:hidden"
                    aria-label="Buka menu bantuan"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <div className="flex shrink-0 items-center gap-2.5">
                  <Image
                      src="/svg/logo.svg"
                      alt="Sipuja logo"
                      width={40}
                      height={20}
                  />
                  <div>
                  <span className="block text-base font-bold leading-none text-slate-900 dark:text-white">
                    SIPUJA
                  </span>
                    <span className="hidden text-xs text-slate-400 sm:block">
                    Sistem Pengujian Hasil Lab
                  </span>
                  </div>
                </div>
              </div>

              <div className="md:hidden">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex flex-1 justify-center">
              <div className="w-full max-w-2xl">
                <HelpSearchBar />
              </div>
            </div>

            <div className="hidden md:block mx-auto md:mx-0">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 md:flex-row md:gap-8 md:px-8">
          <HelpSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
  )
}