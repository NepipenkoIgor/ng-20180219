import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {UsersService} from '../users.service';
import debounce from '../decorators/debounce.decorator';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {async} from 'rxjs/scheduler/async';

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
    // type Info = any;
    // this.getProperty$<Info>(this.changeResortService.resortChanged$,'socialInfo')
    //   .subscribe((socialInfo:Info)=>this.socialInfo = socialInfo);


    const controledSequence$$ = new ReplaySubject(
      Number.POSITIVE_INFINITY,
      undefined,
      async
    );
    // controledSequence$$.subscribe((item) => console.log('before emmit', item));
    controledSequence$$.next('1');
    controledSequence$$.next('2');
    controledSequence$$.next('3');
    controledSequence$$.next('4');
    controledSequence$$.next('5');


    setTimeout(() => {
      console.log('start');
      // controledSequence$$.subscribe((item) => console.log(item))
      console.log('end');
      }, 3000
    );

    // const sequence$ = Observable.create((observer: Observer<number>) => {
    //   let count = 1;
    //   setInterval(() => {
    //     if (count === 5) {
    //       // throw new Error('fail');
    //       observer.error('fail');
    //       return;
    //     }
    //     // if (count === 5) {
    //     //   observer.complete();
    //     //   return;
    //     // }
    //     observer.next(count++);
    //   }, 1000);
    // });
    //
    // sequence$.subscribe((item) => {
    //   console.log('item1', item);
    // }, (err) => {
    //   console.log('err', err);
    // }, () => {
    //   console.log('complete');
    // });
    //
    // setTimeout(()=>{
    //   sequence$.subscribe((item) => {
    //     console.log('item2', item);
    //   }, (err) => {
    //     console.log('err', err);
    //   }, () => {
    //     console.log('complete');
    //   });
    // }, 6000)

  }

  @debounce(300)
  public onInput(value: string): void {
    this.search.emit(value);
  }

  // public getProperty$<T>(source$: Observable<any>, key: string): Observable<T> {
  //   return source$.pipe(pluck(key));
  // }


}
