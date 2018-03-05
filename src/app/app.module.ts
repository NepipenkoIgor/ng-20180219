import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MatInputModule, MatToolbarModule, MatCardModule} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {UsersFilterPipe} from './common/pipes/users-filter.pipe';
import {CardComponent} from './card/card.component';
import {TooltipDirective} from './common/directives/tooltip.directive';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {BASE_URL, BASE_URL_TOKEN} from './config';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersFilterPipe,
    CardComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule, NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL,
      multi: true
    },
    {
      provide: 'BASE_URL_TOKEN',
      useValue: 'localhost:3000',
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
