import { Image } from './image.model'
import { Artist } from './artist.model'
import { Album } from './album.model'

export class Track {
  id: string
  name: string
  trackNumber: number
  uri: string
  href: string
  listenUrl: string
  duration: number
  popularity: number
  explicit: boolean
  album: Album
  artists: Artist[] = []
  images: Image[] = []
}