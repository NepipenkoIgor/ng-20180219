import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public placeholder = 'Seatch people';

  public text: string;

  public search(value: string) {
    this.text = value;
  }
}
