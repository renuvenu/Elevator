import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-weight-limit-exceeded-popup',
  templateUrl: './weight-limit-exceeded-popup.component.html',
  styleUrls: ['./weight-limit-exceeded-popup.component.css'],
})
export class WeightLimitExceededPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private dialog: MatDialog
  ) {}

  goToLift() {
    this.router.navigate(['/lift']);
  }

 
}
