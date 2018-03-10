import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../users';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [UsersService]
})
export class CardComponent implements OnInit {

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

  @Input()
  public user: User;


  constructor() {
  }

  ngOnInit() {
  }

}
