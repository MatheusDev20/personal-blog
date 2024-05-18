// ./components/Posts.tsx

import { SanityDocument } from 'next-sanity'

import { PostCard } from '../post-card'

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  if (!posts.length) return

  return (
    <main className="container mx-auto flex flex-col gap-8">
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </main>
  )
}
