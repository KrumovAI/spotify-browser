import { Album } from './album.model';
import { Artist } from './artist.model';

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

  artistsString: string
  
  constructor(trackResponseObject: any) {
    this.id = trackResponseObject.id
    this.name = trackResponseObject.name
    this.uri = trackResponseObject.uri
    this.href = trackResponseObject.href
    this.listenUrl = trackResponseObject.external_urls?.spotify
    this.popularity = trackResponseObject.popularity
    this.explicit = trackResponseObject.explicit
    this.duration = trackResponseObject.duration_ms
    this.trackNumber = trackResponseObject.track_number
    this.album = new Album(trackResponseObject.album)
    
    this.artists = trackResponseObject.artists
      .map(a => new Artist(a))

    this.artistsString = this.artists.map(a => a.name).join(', ')
  }
}