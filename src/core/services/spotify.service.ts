import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class SpotifyService {
  constructor(private httpClient: HttpClient) {

  }

  getToken() {
    const options = {
      headers: {
        'Authorization': 'Basic ' + btoa(environment.spotify.clientId + ':' + environment.spotify.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }

    const body = 'grant_type=client_credentials'

    return this.httpClient.post('https://accounts.spotify.com/api/token', body, options)
  }

  getGenres(token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    }

    return this.httpClient.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', options)
  }

  search(term: string, genres: string[], token: string) {    
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    }

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

    return this.httpClient.get(`https://api.spotify.com/v1/search?type=${types.join(',')}&q=${q}`, options)
  }
}