import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  userId:any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private route:Router) { }
  ngOnInit() {
    
    this.userId = this.data.user_Id;
  }
  goToLogin(){
    this.route.navigate(['/login'])
  }

}
