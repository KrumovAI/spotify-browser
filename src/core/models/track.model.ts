import { Image } from './image.model'
import { Artist } from './artist.model'
import { Album } from './album.model'

export class Track {
  id: string
  name: string
  uri: string
  href: string
  listenUrl: string
  duration: number
  trackNumber: number
  popularity: number
  explicit: boolean
  album: Album
  artists: Artist[] = []
  
  constructor(trackResponseObject: any) {
    this.id = trackResponseObject.id
    this.name = trackResponseObject.name
    this.uri = trackResponseObject.uri
    this.href = trackResponseObject.href
    this.listenUrl = trackResponseObject.external_urls?.spotify
    this.popularity = trackResponseObject.popularity
    this.explicit = trackResponseObject.explicit
    this.duration = trackResponseObject.duration_ms / 1000
    this.trackNumber = trackResponseObject.track_number
    this.album = new Album(trackResponseObject.album)
    
    this.artists = trackResponseObject.artists
      .map(a => new Artist(a))
  }
}