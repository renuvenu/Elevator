import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FloorsService } from '../floorsService.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  floors: any;
  numberOfFloors: number = 0;

  constructor(private floorsService: FloorsService) {}
  @Output() numberPressed: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.floorsService.getFloors().subscribe((val) => {
      let floor = val;
      this.floors = floor;
      this.numberOfFloors = this.floors.length;
    });
  }

  createRange() {
    // return new Array(number);
    return new Array(this.numberOfFloors).fill(0).map((n, index) => index + 1);
  }

  onNumberClicked(num: Number) {
    this.numberPressed.emit(num);
  }
  updateAlarmStatus(){
    
  }
}
