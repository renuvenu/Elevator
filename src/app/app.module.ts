import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleLiftComponent } from './single-lift/single-lift.component';
import { FloorComponent } from './floor/floor.component';
import { FloorsComponentComponent } from './floors-component/floors-component.component';
import { FloorNumberButtonComponent } from './floor-number-button/floor-number-button.component';
import { FormsComponent } from './forms/forms.component';
// import { HttpClientModule } from '@angular/common/http';
// import { MatCardModule } from '@angular/material/card';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserDetailComponent } from './user-detail/user-detail.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
import { RegformComponent } from './regform/regform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { InvalidBoxComponent } from './invalid-box/invalid-box.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleLiftComponent,
    FloorComponent,
    FloorsComponentComponent,
    FloorNumberButtonComponent,
    FormsComponent,
    UserDetailComponent,
    FloorsComponentComponent,
    RegformComponent,
    PopUpComponent,
    AdminComponent
    InvalidBoxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule, 
    MatDialogModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
