'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { ArrowLeft, ArrowRight, Hash } from 'lucide-react'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <nav className="flex items-center justify-between py-12">
      {!prevPage && (
        <button className="cursor-not-allowed text-base text-gray-300 dark:text-gray-600" disabled>
          <span className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Previous
          </span>
        </button>
      )}
      {prevPage && (
        <Link
          href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
          rel="prev"
          className="group flex items-center gap-2 text-base font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          Previous
        </Link>
      )}
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Page {currentPage} of {totalPages}
      </span>
      {!nextPage && (
        <button className="cursor-not-allowed text-base text-gray-300 dark:text-gray-600" disabled>
          <span className="flex items-center gap-2">
            Next
            <ArrowRight className="h-5 w-5" />
          </span>
        </button>
      )}
      {nextPage && (
        <Link
          href={`/${basePath}/page/${currentPage + 1}`}
          rel="next"
          className="group flex items-center gap-2 text-base font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Next
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </nav>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="space-y-12 py-16 pb-12">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-gray-100">
            {title}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Exploring backend systems, cloud infrastructure, and AI-powered applications
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <aside className="hidden lg:block lg:w-64">
            <div className="sticky top-24">
              <div className="space-y-6">
                <h2 className="font-mono text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
                  Topics
                </h2>
                <nav className="space-y-2">
                  {sortedTags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${slug(tag)}`}
                      className={`block font-mono text-sm uppercase transition-colors ${
                        pathname === `/tags/${slug(tag)}`
                          ? 'text-primary-500 font-bold'
                          : 'hover:text-primary-500 dark:hover:text-primary-500 text-gray-600 dark:text-gray-400'
                      }`}
                      aria-label={`View posts tagged ${tag}`}
                    >
                      {tag}
                      <span className="ml-2 text-gray-400 dark:text-gray-500">
                        ({tagCounts[tag]})
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {!displayPosts.length && (
                <li className="py-8">
                  <p className="text-base text-gray-600 dark:text-gray-400">No posts found.</p>
                </li>
              )}

              {displayPosts.map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <li key={path} className="py-12 first:pt-0">
                    <article>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <time
                            dateTime={date}
                            className="text-sm text-gray-500 dark:text-gray-400"
                          >
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            <Link
                              href={`/${path}`}
                              className="hover:text-primary-500 transition-colors"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap gap-2">
                            {tags?.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <p className="text-base text-gray-600 dark:text-gray-400">{summary}</p>
                        <Link
                          href={`/${path}`}
                          className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                          Read article
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>

            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
