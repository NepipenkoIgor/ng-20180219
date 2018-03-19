import {UsersListComponent} from './users-list/users-list.component';
import {Route} from '@angular/router';
import {UsersComponent} from './users-list/users/users.component';
import {UserComponent} from './users-list/user/user.component';
import {UserResolveService} from './users-list/user/user-resolve.service';

export const routes: Route [] = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'info',
    loadChildren: 'app/info/info.module#InfoModule'
  },
  {
    path: 'users',
    component: UsersListComponent,
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: ':id',
        component: UserComponent,
        data: {
          title: 'Info about user'
        },
        resolve: {
          user: UserResolveService
        }
      },
      {
        path: '**',
        redirectTo: '/info'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];
