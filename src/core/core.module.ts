import { NgModule } from '@angular/core';

import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
  ],
  providers: [SpotifyService],
})
export class CoreModule { }
