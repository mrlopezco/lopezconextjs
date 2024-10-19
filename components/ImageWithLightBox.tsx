'use client'
import { useState, useRef } from 'react'
import clsx from 'clsx'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import Image from 'next/image'
import NextJsImage from './NextJsImage'

const basePath = process.env.BASE_PATH

type Props = {
  src: string
  alt: string
  caption: string
  className?: string
}

const ImageWithLightBox = ({ src, alt, caption, className }: Props) => {
  const [open, setOpen] = useState(false)
  const captionsRef = useRef(null)

  return (
    <>
      <figure className={clsx('text-center', className)}>
        <button
          onClick={() => setOpen(true)}
          style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
          aria-label={`Open lightbox for ${alt}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setOpen(true)
            }
          }}
        >
          <Image
            src={`${basePath || ''}${src}`}
            alt={alt}
            className="mx-auto"
            width={800} // Adjust these dimensions as necessary
            height={600} // Adjust these dimensions as necessary
          />
        </button>
        <figcaption>{caption}</figcaption>
      </figure>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: `${basePath || ''}${src}`,
            width: 800,
            height: 600,
            title: alt,
            description: caption,
          },
        ]}
        render={{
          slide: NextJsImage,
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        plugins={[Captions]}
        captions={{ ref: captionsRef, descriptionTextAlign: 'start', descriptionMaxLines: 3 }}
      />
    </>
  )
}

export default ImageWithLightBox
