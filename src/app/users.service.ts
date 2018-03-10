import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {User} from './users';
import {BASE_URL_TOKEN} from './config';


@Injectable()
export class UsersService {

  public constructor(private _http: HttpClient,
                     @Inject(BASE_URL_TOKEN) private _baseUrl: string) {
  }

  public get users$(): Observable<User[]> {
    return this._http.get<User[]>(`${this._baseUrl}participants?key=o5dpbb`);
  }

}
