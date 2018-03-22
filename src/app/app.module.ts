import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MatInputModule, MatToolbarModule, MatCardModule, MatMenuModule, MatButtonModule} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {UsersFilterPipe} from './common/pipes/users-filter.pipe';
import {CardComponent} from './users-list/card/card.component';
import {TooltipDirective} from './common/directives/tooltip.directive';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {BASE_URL, BASE_URL_TOKEN} from './config';
import {InfoComponent} from './info/info.component';
import {RouterModule} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {routes} from './routes';
import {SearchService} from './common/services/search.service';
import {UsersComponent} from './users-list/users/users.component';
import {UserComponent} from './users-list/user/user.component';
import {UserResolveService} from './users-list/user/user-resolve.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersFilterPipe,
    CardComponent,
    TooltipDirective,
    UsersListComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    ReactiveFormsModule
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
    SearchService,
    UserResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
