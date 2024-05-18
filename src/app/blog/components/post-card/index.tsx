import { SanityDocument } from 'next-sanity'
import Link from 'next/link'

export const PostCard = ({ post }: SanityDocument) => {
  return (
    <Link key={post._id} href={`/blog/${post.slug.current}`}>
      <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
    </Link>
  )
}
