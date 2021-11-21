import { NgModule } from '@angular/core';

import { AuthService, SpotifyService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
  ],
  providers: [AuthService, SpotifyService],
})
export class CoreModule { }
