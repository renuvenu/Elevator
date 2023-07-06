import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminForm = this.fb.group({
    noOfFloors: ['', Validators.required],
  
  });
  constructor(private fb: FormBuilder){}
  onsubmit(){
  
  }
  get noOfFloors(){
    return this.adminForm.get('userid');
  }

}
