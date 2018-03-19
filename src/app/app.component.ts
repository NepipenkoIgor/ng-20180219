import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, USERS, USERS$} from './users';
import {Observable} from 'rxjs/Observable';
import {UsersService} from './users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {


//  public users: any;
//  public usersSubscription: Subscription;

  public constructor(private _router: Router) {

    // setTimeout(() => {
    //   console.log('should go to info');
    //   this._router.navigate(['info']);
    // }, 5000);
  }


  public search(value: string) {
    // this.text = value;
  }

  public ngOnDestroy() {
    // this.usersSubscription.unsubscribe();
  }
}
