import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { ArrowRight, Mail, Download, Briefcase, Code2, Cloud, Sparkles } from 'lucide-react'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="relative my-12 lg:my-20">
        <div className="from-primary-50 dark:from-primary-900/20 absolute inset-0 -z-10 bg-linear-to-br via-transparent to-transparent opacity-50 blur-3xl" />
        <div className="flex flex-col gap-x-16 lg:flex-row">
          <div className="flex flex-col items-start justify-start space-y-8 md:flex-row md:items-center md:space-x-12">
            <div className="space-y-6 md:pr-12">
              <div className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Available for work
              </div>
              <h1 className="text-4xl leading-tight font-bold text-gray-900 dark:text-gray-100">
                Ritvik Shukla
              </h1>
              <p className="text-primary-500 text-lg font-medium">{siteMetadata.description}</p>
            </div>
            <div className="md:border-primary-200 dark:md:border-primary-800 max-w-2xl space-y-6 text-gray-600 md:border-l-4 md:pl-12 dark:text-gray-400">
              <p className="text-lg leading-relaxed">
                I work mainly on backend systems, cloud infrastructure, and AI-powered applications.
                I enjoy building reliable systems and understanding how things work at scale.
              </p>
              <p className="text-lg leading-relaxed">
                This is where I will write about what I'm learning and building, mostly around LLMs,
                agent-based systems, distributed architectures, and related topics.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="mailto:ritvikshukla261@gmail.com"
                  className="group from-primary-600 to-primary-500 relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r px-8 py-4 text-base font-semibold text-white"
                >
                  <Mail className="h-5 w-5" />
                  Hire Me
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1qDpaRFpCLdXBdRbSfjkFG0qPjpoKChNj"
                  className="group inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="group from-primary-50 dark:from-primary-900/10 relative overflow-hidden rounded-2xl bg-linear-to-br to-white p-8 transition-all dark:to-gray-900">
          <div className="bg-primary-100 dark:bg-primary-800 absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full opacity-20 blur-2xl transition-transform group-hover:scale-150" />
          <Briefcase className="text-primary-600 dark:text-primary-400 relative mb-6 h-12 w-12" />
          <h3 className="relative mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
            2+ Years Experience
          </h3>
          <p className="relative text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Built production systems at startups and established companies
          </p>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-50 to-white p-8 transition-all dark:from-blue-900/10 dark:to-gray-900">
          <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-blue-100 opacity-20 blur-2xl transition-transform group-hover:scale-150 dark:bg-blue-800" />
          <Code2 className="relative mb-6 h-12 w-12 text-blue-600 dark:text-blue-400" />
          <h3 className="relative mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
            AI & LLMs
          </h3>
          <p className="relative text-base leading-relaxed text-gray-600 dark:text-gray-400">
            RAG pipelines, multi-agent systems, and AI-powered applications
          </p>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-50 to-white p-8 transition-all dark:from-purple-900/10 dark:to-gray-900">
          <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-purple-100 opacity-20 blur-2xl transition-transform group-hover:scale-150 dark:bg-purple-800" />
          <Cloud className="relative mb-6 h-12 w-12 text-purple-600 dark:text-purple-400" />
          <h3 className="relative mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Cloud Infrastructure
          </h3>
          <p className="relative text-base leading-relaxed text-gray-600 dark:text-gray-400">
            AWS, Docker, Kubernetes, and serverless architectures
          </p>
        </div>
      </div>

      <div className="mt-24 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-3 pb-12">
          <h2 className="font-mono text-lg font-semibold tracking-widest text-gray-900 uppercase dark:text-gray-100">
            Latest Writing
          </h2>
          <div className="from-primary-600 to-primary-400 h-1 w-20 rounded-full bg-linear-to-r" />
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && (
            <li className="py-8">
              <p className="text-gray-600 dark:text-gray-400">No posts found.</p>
            </li>
          )}

          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="group py-12 first:pt-8">
                <article>
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <time
                        dateTime={date}
                        className="text-primary-600 dark:text-primary-400 text-sm font-medium"
                      >
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                      <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-3xl leading-tight font-bold text-gray-900 transition-colors dark:text-gray-100">
                        <Link href={`/blog/${slug}`}>{title}</Link>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        {summary}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${slug}`}
                      className="group/link hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2 text-base font-semibold text-gray-900 transition-colors dark:text-gray-100"
                      aria-label={`Read "${title}"`}
                    >
                      Read article
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end py-12">
          <Link
            href="/blog"
            className="group hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2 text-lg font-semibold text-gray-900 transition-colors dark:text-gray-100"
          >
            View all articles
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </>
  )
}
