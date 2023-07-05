import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
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
  constructor(private fb: FormBuilder, private personService: PersonService) {}
  @Output() toggleVerification: EventEmitter<any> = new EventEmitter();
  get userid() {
    return this.nameForm.get('userid');
  }
  validateUser() {
    this.personService
      .getPersonDetail(this.nameForm.get('userid')?.value)
      .subscribe((val) => {
        let user = val;
        this.userDetail = user;
      });
    console.log(this.userDetail);

    if (this.userDetail?.id) {
      console.log('in');

      this.toggleVerification.emit(this.nameForm.get('userid')?.value);
    }
  }
}
