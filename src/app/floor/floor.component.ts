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
  constructor(private router: Router) {}
  ngOnInit() {
  }
  // ngDoCheck() {
    // console.log('CHECK');
    // console.log(this.currentFloor + ' ' + this.floor);

    // if (this.currentFloor !== this.floor) {
    //   this.currentFloor = this.floor;
    //   console.log(this.floor);
    //   setTimeout(() => {
    //     this.upLiftButtonClicked(this.floor);
    //   }, 2000);
    // }
    // if(this.reachedDestination){
    //   this.upLiftButtonClicked(this.floor)
    // }
  // }
  // ngAfterViewInit(){
  //   if(this.reachedDestination){
  //       this.upLiftButtonClicked(this.floor)
  //     }
  // }

  @Input() floornum: Number = 0;
  @Input() lastFloor: Number = 0;
  @Input() openDoor: Boolean = false; 
  @Input() reachedDestination: Boolean = false;
  isOpen = false;
  @Output() showLogin: EventEmitter<any> = new EventEmitter();
  @Input() floor: Number = 1;
  @Output() fromFloor: EventEmitter<any> = new EventEmitter();

  generateRandom = (min: any, max: any) =>
    Math.floor(Math.random() * (max - min)) + min;

  toggleLift() {
    this.openDoor = !this.openDoor;
  }
  upLiftButtonClicked(num: any) {
    this.fromFloor.emit(num);
    var door = <HTMLElement>document.getElementsByClassName('door')[0];
    door.style.transform = `translateY(-${(num - 1) * 133}px)`;
    door.style.transitionDuration = '2s';
    setTimeout(() => {
      this.showLogin.emit(true);
    }, 2100);
  }
}
