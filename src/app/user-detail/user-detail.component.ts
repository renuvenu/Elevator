import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

 buttonColor='darkblue';
 nameForm = this.fb.group({
  userid: ['', Validators.required],

});
constructor(private fb: FormBuilder){}
onsubmit(){

}
get userid(){
  return this.nameForm.get('userid');
}
}
