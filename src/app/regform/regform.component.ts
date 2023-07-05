import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  onSubmit(
    
  ) {}
}
