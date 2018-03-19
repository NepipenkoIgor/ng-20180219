import {Component, Injector, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../users';
import {Observable} from 'rxjs/Observable';
import {SearchService} from '../common/services/search.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {


}
