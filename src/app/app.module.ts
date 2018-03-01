import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MatInputModule, MatToolbarModule} from "@angular/material";
import { HeaderComponent } from './header/header.component';
import { UsersFilterPipe } from './common/pipes/users-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersFilterPipe
  ],
  imports: [
    BrowserModule, NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
