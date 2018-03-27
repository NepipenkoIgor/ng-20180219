// import {Injectable} from '@angular/core';
// import {Subject} from 'rxjs/Subject';
//
// @Injectable()
// export class RxjsExampleService {
//
//   private _usersSequence$$: Subject<IUsersSearchResults> = new Subject();
//
//   constructor(private http: HttpClient,
//               @Inject(BASE_URL_TOKEN) private baseUrl: string) {
//   }
//
//   private get(url: string): Observable<IUsersSearchResults> {
//
//     return this.http.get<IUsersSearchResults>(url);
//   }
//
//   public searchUsers(filter$: Observable<IUsersSearchFilter>): Observable<IUsersSearchResults> {
//     return filter$.debounceTime(400)
//       .distinctUntilChanged()
//       .map(filter => {
//         const {name, repos, followers} = filter;
//         return `${this.baseUrl}/search/users?q=${name}+repos:>${repos}+followers:>${followers}`;
//       })
//       .switchMap(filter => this.get(filter))
//       .subscribe((users) => this._usersSequence$$.next(users));
//   }
//
//   public get usersSequence$() {
//     return this._usersSequence$$.asObservable();
//   }
//
// }
