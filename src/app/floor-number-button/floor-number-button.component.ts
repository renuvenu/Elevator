import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-floor-number-button',
  templateUrl: './floor-number-button.component.html',
  styleUrls: ['./floor-number-button.component.css'],
})
export class FloorNumberButtonComponent {
  constructor() {}

  ngOnInit(): void {}
  colour: string = 'white';

  @Input() floorNumber: Number = 1;
  toggleSelection() {
    if (this.colour == 'white') {
      this.colour = 'aqua';
    } else {
      this.colour = 'white';
    }
  }
}
