import {Directive} from '@angular/core';
import {delay} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {FormGroup, NG_ASYNC_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appAsyncEqualValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: asyncEqualValidator,
      multi: true
    }
  ],
})
export class AsyncEqualValidatorDirective {

  constructor() {
  }

}


export function asyncEqualValidator({value}: FormGroup): Observable<{ [key: string]: boolean } | null> {
  const [first, ...rest] = Object.keys(value || {});
  const valid = rest.every((v: string) => value[v] = value[first]);
  return of(valid ? null : {noequal: true}).pipe(delay(5000));
}
