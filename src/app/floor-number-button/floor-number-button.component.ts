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

  @Input() floorNumber: Number = 1;
}
