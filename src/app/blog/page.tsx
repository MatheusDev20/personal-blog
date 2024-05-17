// ./app/(blog)/page.tsx

import { SanityDocument } from "next-sanity"

import Posts from "./components/display"
import { sanityFetch } from "../../../sanity/lib/fetch"
import { POSTS_QUERY } from "../../../sanity/lib/queries"
import { Header } from "./components/header"

export default async function Page() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  })

  return (    
    <>
      <Header />
      {/* <Posts posts={posts} /> */}
    </> 
  )
}