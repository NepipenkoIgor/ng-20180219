import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, FormArray, AsyncValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  public title: string;
  public id: string;
  public model: string;
  public formGroup: FormGroup;
  public formArrayGroup: FormGroup = new FormGroup({
    emails: new FormArray([new FormControl('')])
  });

  constructor(private _activatedRouter: ActivatedRoute,
              private _fb: FormBuilder,
              private _cd: ChangeDetectorRef,
              private _zone: NgZone,
  ) {

  }

  ngOnInit() {

    this.formGroup = this._fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(4), this.nameValidator])],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        pconfirm: ['', [Validators.required, Validators.minLength(4)]]
      }, {
        asyncValidator: this.asyncEqualValidator
      })
    });

    this._activatedRouter.data.subscribe((data) => {
      this.title = data.title;
    });

    this._activatedRouter.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  public addEmail(): void {
    (this.formArrayGroup.get('emails') as FormArray).push(new FormControl(''));
  }

  public nameValidator(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value;
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    return valid
      ? null
      : {nospicial: true};
  }

  public asyncEqualValidator({value}: FormGroup): Observable<{ [key: string]: boolean } | null> {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every((v: string) => value[v] = value[first]);
    return of(valid ? null : {noequal: true}).pipe(delay(5000));
  }

}
