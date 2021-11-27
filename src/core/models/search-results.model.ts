import { Track } from './track.model'
import { Artist } from './artist.model'
import { Album } from './album.model'

export class SearchResults {
  tracks: Track[]
  artists: Artist[]
  albums: Album[]

  hasAny: boolean

  constructor(response: any) {
    this.artists = response.artists?.items.map(a => new Artist(a)) || []
    this.albums = response.albums?.items.map(a => new Album(a)) || []
    this.tracks = response.tracks?.items.map(t => new Track(t)) || []

    this.hasAny = this.artists.length > 0 || this.albums.length > 0 || this.tracks.length > 0
  }
}