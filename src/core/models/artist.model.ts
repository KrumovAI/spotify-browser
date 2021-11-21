import { Image } from './image.model'

export class Artist {
  id: string
  name: string
  uri: string
  href: string
  listenUrl: string
  followers: number
  popularity: number
  genres: string[] = []
  images: Image[] = []
}