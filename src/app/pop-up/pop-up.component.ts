import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  userId:any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    
    this.userId = this.data.user_Id;
  }
  

}
