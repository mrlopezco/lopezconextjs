import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import BlogMeta from '@/components/blog/BlogMeta'
import TOCInline from 'pliny/ui/TOCInline'
import CustomNewsletterForm from '@/components/CustomNewsLetterform'
const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, summary, tags, readingTime, toc, attachments } =
    content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-4 text-center">
              <PageTitle>{title}</PageTitle>
              <h2 className="text-lg text-gray-500 dark:text-gray-400">{summary}</h2>{' '}
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <BlogMeta date={date} slug={slug} readingTime={readingTime} />
                </div>
              </dl>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">LinkedIn</dt>
                        <dd>
                          {author.linkedin && (
                            <Link
                              href={author.linkedin}
                              className="text-primary-500 transition-all duration-300 hover:text-primary-600 dark:text-primary-500"
                            >
                              Linkedin
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  We would love to hear your thoughts and opinions in the comment section below!
                </p>
              </div>
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="py-2 xl:py-8">
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {attachments && attachments.length > 0 && (
                  <div className=" ">
                    <p className="my-3 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Attachments
                    </p>
                    <ul>
                      {attachments.map((attachment, idx) => (
                        <li key={`attachment-${idx}`} className="my-1">
                          <Link
                            href={attachment.src}
                            target="_blank"
                            download
                            className="text-primary-500 transition-all duration-300 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
                          >
                            {attachment.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && prev.path && (
                      <div>
                        <p className="my-3 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </p>
                        <div>
                          <Link
                            href={`/${prev.path}`}
                            className="text-primary-500 transition-all duration-300 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
                          >
                            {prev.title}
                          </Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <p className="my-3 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </p>
                        <div>
                          <Link
                            href={`/${next.path}`}
                            className="text-primary-500 transition-all duration-300 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
                          >
                            {next.title}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="block md:sticky md:top-24 xl:space-y-8">
                <div className="hidden md:block">
                  <p className="my-3 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Overview
                  </p>
                  <TOCInline
                    toc={toc}
                    toHeading={3}
                    ulClassName="border-l pl-3 border-primary-500"
                    liClassName="text-gray-600 dark:text-gray-400 font-normal transition-all duration-300 text-sm  mb-2 hover:text-primary-500 dark:hover:text-primary-500"
                  />
                </div>
                <div>
                  <p className="my-3 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Sign up to our newsletter
                  </p>
                  <div className="w-full">
                    <CustomNewsletterForm />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
