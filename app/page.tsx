import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Avatar from '@/components/homepage/Avatar'
import BlogLinks from '@/components/homepage/BlogLinks'
// import Greeting from '@/components/homepage/Greeting'
import Heading from '@/components/homepage/Heading'
import ShortDescription from '@/components/homepage/ShortDescription'
import TypedBios from '@/components/homepage/TypedBios'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Tag from '@/components/Tag'
import { genPageMetadata } from 'app/seo'
import DownloadCVButton from '@/components/DownloadCVButton'
// import SummaryCards from '@/components/homepage/SummaryCards'

const MAX_DISPLAY = 3
export const metadata = genPageMetadata({ title: 'Dynamics 365 Solution Architect' })
export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return (
    <div className="mt-8 dark:divide-gray-700 md:mt-8">
      {/* <Greeting /> */}
      <div className="flex flex-col gap-x-10 gap-y-4 pb-10 md:my-4 md:pb-8 xl:flex-row">
        <Avatar />
        <div className="my-auto flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-400">
          <Heading />
          <TypedBios />
          <ShortDescription />
          <div>
            <DownloadCVButton href="/static/CV-Ignacio-LopezColl.pdf" text="Download CV" />
          </div>

          {/* <BlogLinks /> */}
          {/* <p className="flex">
            <span className="mr-2">Happy reading</span>
            <Twemoji emoji="clinking-beer-mugs" />
          </p> */}
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6">
          <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recent Posts
          </h3>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <p className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </p>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="group relative inline-block text-primary-500 dark:text-primary-500"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                          <span className="block h-0.5 max-w-0 bg-primary-500 transition-all duration-500 group-hover:max-w-full dark:bg-primary-500"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="group relative inline-block text-primary-500 dark:text-primary-500"
            aria-label="All posts"
          >
            All Posts &rarr;
            <span className="block h-0.5 max-w-0 bg-primary-500 transition-all duration-500 group-hover:max-w-full dark:bg-primary-500"></span>
          </Link>
        </div>
      )}
    </div>
  )
}
