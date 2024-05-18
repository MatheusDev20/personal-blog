/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from '../../../sanity/env'

export const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source)
