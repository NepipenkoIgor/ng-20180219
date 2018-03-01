import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, USERS, USERS$} from './users';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public placeholder = 'Seatch people';

  public users$: Observable<User[]> = USERS$;

//  public users: any;
//  public usersSubscription: Subscription;

  public search(value: string) {
    // this.text = value;
  }

  public ngOnInit(): void {
    // this.usersSubscription = this.users$.subscribe((users) => {
    //   this.users = users;
    // });
  }

  public ngOnDestroy() {
   // this.usersSubscription.unsubscribe();
  }
}
