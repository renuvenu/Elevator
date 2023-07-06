import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css'],
})
export class RegformComponent {
  values:any
  user_Id:any

  addRegForm = this.fb.group({
    name: ['', Validators.required],
    officeName: ['', Validators.required],
    contactNumber: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,public dialog: MatDialog,private http: HttpClient) {}

  get name() {
    return this.addRegForm.get('name');
  }
  get officename() {
    return this.addRegForm.get('officeName');
  }
  get contactno() {
    return this.addRegForm.get('contactNumber');
  }


  onSubmit() {
    this.http.post(`https://team2-api-naf.azurewebsites.net/api/person`, this.addRegForm.value)
      .subscribe(data => {
        this.values = data;
        this.user_Id = this.values.userId;
        console.log(this.user_Id);
        this.openDialog(this.user_Id);
      });
  }
  openDialog(userId: any) {
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: { userId: userId }
    });
  }
}
