import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  values: any;
  adminForm = this.fb.group({
    noOfFloors: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  onsubmit() {
    console.log(this.adminForm.get('noOfFloors')?.value);
    var floor = this.adminForm.get('noOfFloors')?.value;
    this.http
      .post(`https://localhost:7160/api/floor/${floor}`,{})
      .subscribe(() => {});

    //  console.log("noOfFloors");
  }
  get noOfFloors() {
    return this.adminForm.get('noOfFloors');
  }
}
