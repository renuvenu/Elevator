import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],
})
export class FloorComponent {
  currentFloor: any;
  constructor(private router: Router) {
    this.currentFloor = this.floor;
  }

  @Input() floornum: Number = 0;
  @Input() lastFloor: Number = 0;
  @Input() openDoor: Boolean = false;
  @Input() reachedDestination: Boolean = false;
  // isOpen = false;
  @Output() showLogin: EventEmitter<any> = new EventEmitter();
  @Input() floor: Number = 1;
  @Output() fromFloor: EventEmitter<any> = new EventEmitter();
  @Output() updateFloor: EventEmitter<any> = new EventEmitter();

  generateRandom = (min: any, max: any) =>
    Math.floor(Math.random() * (max - min)) + min;

  toggleLift() {
    this.openDoor = !this.openDoor;
  }
  upLiftButtonClicked(num: any) {
    this.openDoor = false
    this.fromFloor.emit(num);
    var door = <HTMLElement>document.getElementsByClassName('door')[0];
    door.style.transitionDuration = '2s';
    if(this.floor<num) {
      door.style.transform = `translateY(-${(num - 1) * 133}px)`;
    } else {
      door.style.transform = `translateY(${(num-1) * 133}px)`;
    }
    setTimeout(()=>{
      this.updateFloor.emit(num)
    },1000)
    setTimeout(() => {
      
      this.showLogin.emit(true);
    },1500);
  }
}
