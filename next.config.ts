import type { NextConfig } from "next";
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    // Izinkan halaman .md / .mdx dikenali sebagai route App Router
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    // Tambahkan remark/rehype plugin di sini kalau perlu (mis. remark-gfm untuk tabel)
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

export default withMDX(nextConfig);
