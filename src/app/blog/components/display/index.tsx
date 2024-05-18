// ./components/Posts.tsx

import { SanityDocument } from 'next-sanity'
import Link from 'next/link'

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  if (!posts.length) return
  return (
    <main className="container mx-auto flex flex-col border">
      {posts.map((post) => (
        <>
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
          </Link>
          {/* <main>{post.body}</main> */}
        </>
      ))}
    </main>
  )
}
