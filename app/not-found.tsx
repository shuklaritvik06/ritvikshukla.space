import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-8">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-none font-extrabold tracking-tight text-gray-900 md:border-r-2 md:border-gray-200 md:px-6 md:text-8xl dark:text-gray-100 dark:md:border-gray-700">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl leading-normal font-semibold text-gray-900 md:text-2xl dark:text-gray-100">
          Page not found
        </p>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
