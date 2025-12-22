import Image from './Image'
import Link from './Link'
import { ArrowRight } from 'lucide-react'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-start">
    <div className="flex-shrink-0">
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
              <Image
                alt={title}
                src={imgSrc}
                className="h-full w-full object-contain"
                width={80}
                height={80}
              />
            </div>
          </Link>
        ) : (
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
            <Image
              alt={title}
              src={imgSrc}
              className="h-full w-full object-contain"
              width={80}
              height={80}
            />
          </div>
        ))}
    </div>

    <div className="flex flex-1 flex-col justify-between space-y-4">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="max-w-3xl text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      {href && (
        <Link
          href={href}
          className="group inline-flex w-fit items-center text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          aria-label={`Link to ${title}`}
        >
          View project
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  </div>
)

export default Card
