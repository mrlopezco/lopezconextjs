import Link from '@/components/Link'
import Twemoji from '@/components/Twemoji'

const BlogLinks = () => {
  return (
    <div className="flex justify-between">
      {/* <div className="flex flex-col space-y-1.5">
        <Link href="/projects" className="hover:underline">
          <Twemoji emoji="hammer-and-wrench" />
          <span data-umami-event="home-link-projects" className="ml-1.5">
            My project history
          </span>
        </Link>
      </div> */}
      <div className="flex flex-col space-y-1.5">
        <Link href="/about" className="hover:underline">
          <Twemoji emoji="face-with-monocle" />
          <span data-umami-event="home-link-about" className="ml-1.5">
            More about myself
          </span>
        </Link>
        {/* <Link href="/resume" className="hover:underline">
          <Twemoji emoji="briefcase" />
          <span data-umami-event="home-link-resume" className="ml-1.5">
            My career
          </span>
        </Link> */}
      </div>
    </div>
  )
}

export default BlogLinks
