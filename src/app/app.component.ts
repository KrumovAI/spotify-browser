import { Component } from '@angular/core';
import { AuthService, SpotifyService } from 'src/core/services';
import { take } from 'rxjs/operators';

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

  constructor(
    private authService: AuthService,
    private spotifyService: SpotifyService,
  ) {
    this.authService.updateToken()
  }

  ngOnInit() {
    this.authService.tokenUpdated$
      .pipe(
        take(1),
      )
      .subscribe(_ => {
        this.spotifyService
          .getGenres()
          .pipe(
            take(1),
          )
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
    this.spotifyService
      .search(this.searchTerm, this.genres.filter(g => g.checked).map(g => g.name))
      .pipe(
        take(1),
      )
      .subscribe((data: any) => {
        // TO-DO: map data
        console.log(data)
      })
  }
}
