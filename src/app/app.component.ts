import { Component } from '@angular/core';
import { SpotifyService } from 'src/core/services/spotify.service';
// import 'rxjs/add/operator/first';
// import 'rxjs/add/operator/first';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify-browser';

  genres: any[] = []

  token: string = ''

  searchTerm: string = ''

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
    this.spotifyService.getToken()
      // .first()
      .subscribe((token: any) => {
        console.log(token)
        this.token = token.access_token

        this.spotifyService.getGenres(token.access_token)
          .subscribe((data: any) => {
            this.genres = data.genres.map(g => ({
              name: g,
              checked: false
            }))
            console.log('Genres: ', this.genres)
          })
      }, err => {
        console.log(err)
      })
  }

  search() {
    this.spotifyService.search(this.searchTerm, this.genres.filter(g => g.checked).map(g => g.name), this.token)
      // .first()
      .subscribe((data: any) => {
        // TO-DO: map data
        console.log(data)
      })
  }
}
