import type { MDXComponents } from 'mdx/types'

// File ini WAJIB ada di root project untuk App Router MDX (Next.js akan
// otomatis memakainya). Di sinilah kita mengatur tampilan default setiap
// elemen markdown (h1, p, code, dst) supaya konsisten dengan desain help center.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2 className="mt-8 mb-3 text-xl font-semibold text-gray-900" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900" {...props} />
    ),
    p: (props) => <p className="mb-4 leading-7 text-gray-700" {...props} />,
    ul: (props) => <ul className="mb-4 list-disc pl-6 space-y-1 text-gray-700" {...props} />,
    ol: (props) => <ol className="mb-4 list-decimal pl-6 space-y-1 text-gray-700" {...props} />,
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="my-4 rounded-lg border border-gray-200" {...props} alt={props.alt ?? ''} />
    ),
    code: (props) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm text-gray-800" {...props} />
    ),
    ...components,
  }
}
