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
import { Observable, catchError, of } from 'rxjs';
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
  @Output() showInvalidPopup: EventEmitter<any> = new EventEmitter();
  get userid() {
    return this.nameForm.get('userid');
  }
  errorMessage:any
  validateUser() {
    this.personService
      .getPersonDetail(this.nameForm.get('userid')?.value) .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
        this.errorMessage = error.message;
        this.goToInvalid();
        console.error('There was an error!', error);
        return of();
    }))
      .subscribe((val: any) => {
       // console.log(("valid"));
        
        let user = val;
        this.userDetail = user;
        if (this.userDetail?.id) {
          console.log(("valid"));
          
          // console.log("enter")
          this.toggleVerification.emit(this.nameForm.get('userid')?.value);
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
    // this.router.navigate(['/invalid']);
    this.showInvalidPopup.emit()
  }
  goToLift() {
    this.router.navigate(['/lift']);
  }
}
