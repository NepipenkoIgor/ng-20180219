import {Component, Injector, OnInit} from '@angular/core';
import {User} from '../../users';
import {Observable} from 'rxjs/Observable';
import {SearchService} from '../../common/services/search.service';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public placeholder = 'Seatch people';

  public users$: Observable<User[]>;

  public searchTerm: string;

  public constructor(private _injector: Injector,
                     private _searchService: SearchService) {

  }

  public ngOnInit(): void {
    this.users$ = this._injector.get(UsersService).users$;
    // this.usersSubscription = this.users$.subscribe((users) => {
    //   this.users = users;
    // });
    this._searchService.searchStream$
      .subscribe((term: string) => this.searchTerm = term);
  }


}
