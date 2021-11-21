import { Image } from './image.model'
import { Artist } from './artist.model'

export class Album {
  id: string
  name: string
  releaseDate: Date
  totalTracks: number
  uri: string
  href: string
  listenUrl: string
  followers: number
  popularity: number
  artists: Artist[] = []
  images: Image[] = []
}