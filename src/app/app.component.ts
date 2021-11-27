import { Component } from '@angular/core';
import { AuthService, SpotifyService } from 'src/core/services';
import { take } from 'rxjs/operators';
import { Artist, Album, Track, SearchResults } from 'src/core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify-browser'
  
  genres: any[] = []
  searchResults: SearchResults = null

  expandedViews = {
    artists: false,
    albums: false,
    tracks: false,
  }

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
        if (this.genres.length === 0) {
          this.getGenres()
        }
      })
  }

  toggleView(viewKey: string) {
    console.log('wtf')
    this.expandedViews[viewKey] = !this.expandedViews[viewKey]
  }

  getGenres() {    
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
      })
  }

  search(searchTerm: string) {
    this.spotifyService
      .search(searchTerm, this.genres.filter(g => g.checked).map(g => g.name))
      .pipe(
        take(1),
      )
      .subscribe((response: any) => {
        this.searchResults = new SearchResults(response)

        console.log(this.searchResults)
      })
  }
}
