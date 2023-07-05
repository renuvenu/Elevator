import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  numberOfFloors: number = 26;

  constructor() {}
  ngOnInit(): void {}

  createRange() {
    // return new Array(number);
    return new Array(this.numberOfFloors).fill(0).map((n, index) => index + 1);
  }
}
