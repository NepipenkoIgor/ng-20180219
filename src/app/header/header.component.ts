import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {UsersService} from '../users.service';
import debounce from '../decorators/debounce.decorator'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [UsersService]
})
export class HeaderComponent implements OnInit {

  @Input()
  public placeholder;

  @Output()
  public search: EventEmitter<string> = new EventEmitter();


  public logo = 'assets/images/logo.png';
  public width = '50';

  constructor() {
  }

  ngOnInit() {
  }

  @debounce(300)
  public onInput(value: string): void {
    this.search.emit(value);
  }

}
