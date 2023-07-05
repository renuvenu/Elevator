import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleLiftComponent } from './single-lift/single-lift.component';
import { FloorComponent } from './floor/floor.component';
import { FloorsComponentComponent } from './floors-component/floors-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleLiftComponent,
    FloorComponent,
    FloorsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
