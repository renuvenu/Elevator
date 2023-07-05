import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css'],
})
export class FloorComponent {
  @Input() floornum: Number = 0;
  @Input() lastFloor: Number = 0;
  isOpen = false;
  // @Input() floor: Number = 0;
  floor = 1;

  generateRandom = (min: any, max: any) =>
    Math.floor(Math.random() * (max - min)) + min;
  openLift() {
    this.isOpen = !this.isOpen;
  }
  upLiftButtonClicked(num: any) {
    var door = <HTMLElement>document.getElementsByClassName('door')[0];
    door.style.transform = `translateY(${(num - 1) * 133}px)`;
    door.style.transitionDuration = '2s';
  }
}
