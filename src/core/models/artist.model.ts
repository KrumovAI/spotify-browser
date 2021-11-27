import { Image } from './image.model';

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

  constructor(artistResponseObject: any) {
    this.id = artistResponseObject.id
    this.name = artistResponseObject.name
    this.uri = artistResponseObject.uri
    this.href = artistResponseObject.href
    this.listenUrl = artistResponseObject.external_urls?.spotify
    this.followers = artistResponseObject.followers?.total || 0
    this.popularity = artistResponseObject.popularity
    this.genres = artistResponseObject.genres
    this.images = artistResponseObject.images
  }
}