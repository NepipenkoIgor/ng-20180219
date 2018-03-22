import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
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
              private _fb: FormBuilder) {
  }

  ngOnInit() {

    this.formGroup = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        pconfirm: ['', [Validators.required, Validators.minLength(4)]]
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

}
