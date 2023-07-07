import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router) {}
  onsubmit() {
    console.log(this.adminForm.get('noOfFloors')?.value);
    var floor = this.adminForm.get('noOfFloors')?.value;
    this.http
      .post(`https://team2-api-naf.azurewebsites.net/api/floor/${floor}`,{})
      .subscribe(() => {});

    //  console.log("noOfFloors");
  }
  get noOfFloors() {
    return this.adminForm.get('noOfFloors');
  }
  goToLift(){
    this.router.navigate(['/lift'])
  }
}
