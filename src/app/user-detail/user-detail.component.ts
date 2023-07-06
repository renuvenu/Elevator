import { Component, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PersonService } from 'src/person.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  buttonColor = 'darkblue';
  nameForm = this.fb.group({
    userid: ['', Validators.required],
  });
  userDetail: any;
  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  @Output() toggleVerification: EventEmitter<any> = new EventEmitter();
  @Output() closeLogin: EventEmitter<any> = new EventEmitter();
  get userid() {
    return this.nameForm.get('userid');
  }
  validateUser() {
    this.personService
      .getPersonDetail(this.nameForm.get('userid')?.value)
      .subscribe((val) => {
        let user = val;
        this.userDetail = user;
        if (this.userDetail?.id) {
          this.toggleVerification.emit(this.nameForm.get('userid')?.value);
        } else {
          this.goToInvalid();
        }
      });
  }
  newuser() {
    this.router.navigate(['/register']);
  }

  onClosing(event: any) {
    event.preventDefault();
    console.log('click');
    this.closeLogin.emit();
  }
  goToInvalid() {
    this.router.navigate(['/invalid']);
  }
  goToLift() {
    this.router.navigate(['/lift']);
  }
}
