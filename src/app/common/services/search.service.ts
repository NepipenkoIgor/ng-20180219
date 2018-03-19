import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SearchService {

  private _searchStream$$: Subject<string> = new Subject();

  public set search(term: string) {
    this._searchStream$$.next(term);
  }

  public get searchStream$(): Observable<string> {
    return this._searchStream$$.asObservable();
  }

}
