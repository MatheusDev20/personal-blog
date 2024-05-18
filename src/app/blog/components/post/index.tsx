// ./components/Post.tsx

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { SanityDocument } from 'next-sanity'
import { urlFor } from '@/app/utils'

export default function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body } = post

  return (
    <main className="prose prose-lg container mx-auto p-4">
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          className="float-left m-0 mr-4 w-1/3 rounded-lg"
          src={urlFor(mainImage).width(300).height(300).quality(80).url()}
          width={300}
          height={300}
          alt={mainImage.alt || ''}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}
    </main>
  )
}
