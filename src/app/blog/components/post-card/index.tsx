import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import { urlFor } from '@/app/utils'
import Link from 'next/link'

type Props = {
  post: SanityDocument
}
export const PostCard = ({ post }: Props) => {
  const { mainImage } = post
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <section className="border-dsl-gray-200 group flex h-[96px] rounded-[0.375rem] border-[1px] border-solid shadow-md transition-shadow duration-300 hover:bg-[#0a0a0a]">
        <Image
          className="float-left m-0 mr-4 max-w-[10%] bg-cover p-2"
          src={urlFor(mainImage).width(300).height(300).quality(80).url()}
          width={300}
          height={300}
          alt={mainImage.alt || ''}
        />
        <div className="ml-8 flex min-w-[30%] items-center justify-start self-center px-4 ">
          <span className="font-medium leading-snug text-white group-hover:text-main-blue">
            {post.title}
          </span>
        </div>
      </section>
    </Link>
  )
}
