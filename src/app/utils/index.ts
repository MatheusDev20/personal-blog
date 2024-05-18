/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from '../../../sanity/env'

export const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source)

export const formatDate = (dateString: string, locale: string) => {
  const date = new Date(dateString)
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')

  if (locale === 'en') {
    return `${year}-${month}-${day}`
  } else if (locale === 'pt') {
    return `${day}/${month}/${year}`
  } else {
    throw new Error('Unsupported locale')
  }
}
