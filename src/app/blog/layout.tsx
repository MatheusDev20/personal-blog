import { ReactNode } from "react"
import './css/index.css'

export default function BlogLayout({children}: { children: ReactNode }) {
  return (
    <div className='blog-root'>
      {children}
    </div>
  )
}