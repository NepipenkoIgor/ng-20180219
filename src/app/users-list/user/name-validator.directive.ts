import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: nameValidator,
      multi: true
    }
  ],
})
export class NameValidatorDirective {

  constructor() {
  }

}

export function nameValidator(control: FormControl): { [key: string]: boolean } | null {
  const value: string = control.value;
  const valid: boolean = /^[a-zA-Z]*$/.test(value);
  return valid
    ? null
    : {nospicial: true};
}
