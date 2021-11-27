import { Artist } from './artist.model';
import { Image } from './image.model';

export class Album {
  id: string
  name: string
  uri: string
  href: string
  listenUrl: string
  releaseDate: Date
  totalTracks: number
  images: Image[] = []
  artists: Artist[] = []

  artistsString: string

  constructor(albumResponseObject: any) {
    this.id = albumResponseObject.id
    this.name = albumResponseObject.name
    this.uri = albumResponseObject.uri
    this.href = albumResponseObject.href
    this.listenUrl = albumResponseObject.external_urls?.spotify
    this.releaseDate = albumResponseObject.release_date
    this.totalTracks = albumResponseObject.total_tracks
    this.images = albumResponseObject.images

    this.artists = albumResponseObject.artists
      .map(a => new Artist(a))

    this.artistsString = this.artists.map(a => a.name).join(', ')
  }
}