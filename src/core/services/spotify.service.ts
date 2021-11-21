import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class SpotifyService {
  private baseUrl: string = 'https://api.spotify.com/v1/'
  private options: any = null

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
  ) {
    this.authService
      .tokenUpdated$
      .subscribe(token => {
        this.options = {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
          }
        }
      })
  }

  getGenres() {
    return this.httpClient.get(`${this.baseUrl}recommendations/available-genre-seeds`, this.options)
  }

  search(term: string, genres: string[]) {

    let q = term
    let types: string[] = [
      'artist',
      'track',
    ]

    if (genres.length === 0) {
      types.push('album')
    } else {
      q = `${q} genre:${genres.join(',')}`
    }    

    return this.httpClient.get(`${this.baseUrl}search?type=${types.join(',')}&q=${q}`, this.options)
  }
}