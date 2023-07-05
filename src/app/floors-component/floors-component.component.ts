import { Component } from '@angular/core';
import { FloorsService } from '../floorsService.service';
import { PersonService } from 'src/person.service';

@Component({
  selector: 'app-floors-component',
  templateUrl: './floors-component.component.html',
  styleUrls: ['./floors-component.component.css'],
})
export class FloorsComponentComponent {
  floors: any;
  showLogin = false;
  openDoor = false;
  showButtons = false;
  userId: string = '';
  toFloor: Number = 1;
  fromFloor: Number = 1;
  reachedDestination = false;
  isFull: any;
  showCapacityExceededPopup = false
  constructor(
    private floorService: FloorsService,
    private personService: PersonService
  ) {}
  ngOnInit() {
    this.getFloors();
  }

  getFloors() {
    this.floorService.getFloors().subscribe((val) => {
      var res = val;
      this.floors = res;
      this.floors = this.floors.reverse();
    });
  }

  enableLoginScreen(showLogin: boolean) {
    this.personService.verifyCapacity().subscribe((val) => {
      let res = val;
      this.isFull = res;
    });
    if (this.isFull) {
      this.showCapacityExceededPopup = true
    } else {
      this.showLogin = showLogin;
      this.toFloor = this.fromFloor;
    }
  }

  toggleScreenLogin(id: string) {
    this.userId = id;
    this.showLogin = false;
    setTimeout(() => {
      this.openDoor = true;
      setTimeout(() => {
        this.showButtons = true;
      }, 1000);
    }, 1000);
  }

  numberClicked(num: Number) {
    this.openDoor = false;
    this.showButtons = false;
    // setTimeout(() => {
    this.toFloor = num;
    this.reachedDestination = true;
    // }, 1000);
  }

  updateFromFloor(num: Number) {
    this.fromFloor = num;
  }
}
