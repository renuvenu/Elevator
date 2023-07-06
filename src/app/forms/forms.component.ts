import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FloorsService } from '../floorsService.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  floors: any;
  numberOfFloors: number = 0;
  alarmBackgroundColour: string = 'white';
  alarm = false;
  phone = false;
  audioUrl =
    'http://www.accesscontrolsales.com/Ingram_Products/mp3/s7-c3tone.mp3';
  audio = new Audio(this.audioUrl);
  phnAudioUrl = 'http://www.mobileer.com/ringtones/me1000/OldPhone_rt.mp3';
  phnaudio = new Audio(this.phnAudioUrl);

  toggleAlarmSelection() {
    if (this.alarmBackgroundColour == 'white') {
      this.alarmBackgroundColour = 'pink';
    } else {
      this.alarmBackgroundColour = 'white';
    }
    this.alarm = !this.alarm;
    if (this.alarm) {
      console.log('audioplays');
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    return this.http
      .put(
        `https://team2-api-naf.azurewebsites.net/api/LiftFunctionDetail/FireAlarmStatus/${this.alarm}`,
        {}
      )
      .subscribe();
  }

  phoneBackgroundColour: string = 'white';

  togglephoneSelection() {
    if (this.phoneBackgroundColour == 'white') {
      this.phoneBackgroundColour = 'lightgreen';
    } else {
      this.phoneBackgroundColour = 'white';
    }
    this.phone = !this.phone;
    if (this.phone) {
      console.log('audioplays');
      this.phnaudio.play();
    } else {
      this.phnaudio.pause();
      this.phnaudio.currentTime = 0;
    }
    return this.http
      .put(
        `https://team2-api-naf.azurewebsites.net/api/LiftFunctionDetail/EmergencyAlarm//${this.phone}`,
        {}
      )
      .subscribe();
  }

  nonstopBackgroundColour: string = 'white';

  togglenonstopSelection() {
    if (this.nonstopBackgroundColour == 'white') {
      this.nonstopBackgroundColour = 'brown';
    } else {
      this.nonstopBackgroundColour = 'white';
    }
  }

  constructor(private floorsService: FloorsService, private http: HttpClient) {}
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
}
