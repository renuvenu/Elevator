import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloorsComponentComponent } from './floors-component/floors-component.component';
import { FormsComponent } from './forms/forms.component';
import { RegformComponent } from './regform/regform.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { AdminComponent } from './admin/admin.component';
import { InvalidBoxComponent } from './invalid-box/invalid-box.component';


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
  },
  {
    path:'history',
    component:UserHistoryComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
  path:'invalid',
  component:InvalidBoxComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
