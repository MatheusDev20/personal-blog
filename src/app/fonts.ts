import { Inter, Montserrat, Poppins } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

export const georgia = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})
