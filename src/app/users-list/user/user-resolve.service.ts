import {Injectable} from '@angular/core';
import {Resolve, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {Observable} from 'rxjs/Observable';
import {UsersService} from '../../users.service';
import {User} from '../../users';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
@Injectable()
export class UserResolveService implements Resolve<User> {

  constructor(private _usersService: UsersService,
              private _router: Router) {
  }


  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | null> {
    return this._usersService.users$
      .map((users: User[]) => {
        const currentUser = users.filter((user: User) => route.params.id === user.id.toString());
        if (!currentUser.length) {
          return Observable.throw('no user');
        }
        return currentUser;
      })
      .catch(() => {
        this._router.navigate(['users']);
        return Observable.of(null);
      });
  }
}
