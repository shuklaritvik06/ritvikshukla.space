import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Tags',
  description: 'Things I blog about',
})

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <div className="mx-auto px-4 sm:px-6 xl:px-0">
      <div className="space-y-8 pt-16 pb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-gray-100">Tags</h1>
          <p className="font-mono text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Things I blog about
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          {tagKeys.length === 0 && (
            <span className="text-gray-600 dark:text-gray-400">No tags found.</span>
          )}

          {sortedTags.map((t) => (
            <Link
              key={t}
              href={`/tags/${slug(t)}`}
              aria-label={`View posts tagged ${t}`}
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
            >
              <Tag text={t} />
              <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-700 group-hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:group-hover:bg-gray-600">
                {tagCounts[t]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
