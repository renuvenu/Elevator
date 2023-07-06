import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloorsComponentComponent } from './floors-component/floors-component.component';
import { FormsComponent } from './forms/forms.component';
import { RegformComponent } from './regform/regform.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/lift',
    pathMatch: 'full',
  },
  {
    path: 'lift',
    component: FloorsComponentComponent,
  },
  {
    path: 'lift-buttons',
    component: FormsComponent
  },
  {
    path: 'register',
    component: RegformComponent
  },
  {
    path: 'login',
    component: UserDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
