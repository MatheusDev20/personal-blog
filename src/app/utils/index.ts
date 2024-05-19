/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from '../../../sanity/env'

export const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source)

export const formatDate = (dateString: string, locale: 'pt-BR' | 'en-US') => {
  const date = new Date(dateString)

  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
