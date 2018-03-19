import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public title: string;
  public id: string;

  constructor(private _activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRouter.data.subscribe((data) => {
      this.title = data.title;
    });

    this._activatedRouter.params.subscribe((param) => {
      this.id = param.id;
    });
  }

}
