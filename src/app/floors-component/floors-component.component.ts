import { Component } from '@angular/core';
import { FloorsService } from '../floorsService.service';
import { PersonService } from 'src/person.service';
import { MatDialog } from '@angular/material/dialog';
import { WeightLimitExceededPopupComponent } from '../weight-limit-exceeded-popup/weight-limit-exceeded-popup.component';

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
  isAvailable: any;
  showCapacityExceededPopup = false;
  data: any
  id: any
  constructor(
    private floorService: FloorsService,
    private personService: PersonService,
    private dialog: MatDialog
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
      this.isAvailable = res;
      if (this.isAvailable) {
        this.showLogin = true;
        this.toFloor = this.fromFloor;
      } else {
         this.dialog.open(WeightLimitExceededPopupComponent)
        this.showCapacityExceededPopup = true;
      }
    });
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
    this.toFloor = num;
    this.reachedDestination = true;
    this.addPersonDetail()
    setTimeout(() => {
      this.openDoor = true;
      setTimeout(()=>{
        this.openDoor = false
        this.updatePersonStatus()
      },2000)
    }, 1000);
  }

  updateFromFloor(num: Number) {
    this.fromFloor = num;
  }

  updateFloor(num: Number) {
    this.toFloor = num;
  }

  addPersonDetail(){
    let detail = {
      personId: this.userId,
      weight: this.getRandomIntInclusive(50,80),
      fromFloorNum: this.fromFloor,
      toFloorNum: this.toFloor,
      status: "Inprogress"
    }
    this.personService.addPersonDetailInLift(detail).subscribe(val => {
      this.data = val
      this.id = this.data?.id
    })
  }

  updatePersonStatus(){
    this.personService.updatePersonDetailInLift(this.id,"Completed").subscribe(val => {
    })
  }

  getRandomIntInclusive(min: any, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  closeLogin(){
    this.showLogin = false
  }
}
