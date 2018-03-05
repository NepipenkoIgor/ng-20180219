import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {UsersService} from '../users.service';


export function debounce(ms: number) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    let timeoutId: number;
    const originalMethod = descriptor.value;

    /**
     * TODO context
     */
    descriptor.value = function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        originalMethod.apply(this, args);
        timeoutId = null;
      }, ms);

    };

    return descriptor;
  };
}


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
