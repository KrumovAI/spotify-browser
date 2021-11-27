import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { ResultCardComponent } from 'src/components/result-card/result-card.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { SearchBarComponent } from 'src/components/search-bar/search-bar.component';
import { InfoParagraphComponent } from 'src/components/info-paragraph/info-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoParagraphComponent,
    ResultCardComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,

    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
