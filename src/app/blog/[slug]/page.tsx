// ./app/(blog)/[slug]/page.tsx

import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"


import Post from '@/app/blog/components/post'
import { POSTS_QUERY, POST_QUERY } from "../../../../sanity/lib/queries"
import { sanityFetch } from "../../../../sanity/lib/fetch"


export async function generateStaticParams() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
    perspective: "published",
    stega: false,
  })

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  console.log("Params", params)
  const post = await sanityFetch<SanityDocument>({ query: POST_QUERY, params })
  if (!post) {
    return notFound()
  }
  return <Post post={post} />
}