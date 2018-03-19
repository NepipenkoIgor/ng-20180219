import {environment} from '../environments/environment';
import {InjectionToken} from '@angular/core';
import {Route} from '@angular/router';
import {InfoComponent} from './info/info.component';
import {UsersListComponent} from './users-list/users-list.component';

export const BASE_URL_TOKEN = new InjectionToken('BASE_URL_TOKEN');

export const BASE_URL = environment.baseUrl;



