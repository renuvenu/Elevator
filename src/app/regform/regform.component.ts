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

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css'],
})
export class RegformComponent {
  name: any;
  officename: any;
  contactno: any;

  addRegForm = this.fb.group({
    name: ['', Validators.required],
    officename: ['', Validators.required],
    contactno: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,public dialog: MatDialog) {}

  onSubmit(

  ) {}

  openDialog() {
    this.dialog.open(PopUpComponent);
  }
  
}
