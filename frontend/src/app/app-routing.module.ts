import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './brq-elements/brq-about/about.component';
import { HomeComponent } from './brq-elements/brq-home/home.component';
import { UserCreateComponent } from './brq-elements/brq-user/user-create/user-create.component';
import { UserDeleteComponent } from './brq-elements/brq-user/user-delete/user-delete.component';
import { UserUpdateComponent } from './brq-elements/brq-user/user-update/user-update.component';
import { BrqComponent } from './brq-elements/brq.component';
import { UserProfile } from './brq-elements/brq-user/user-profile/user-profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'brq',
    component: BrqComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user/user-create',
    component: UserCreateComponent
  },
  {
    path: 'user/user-update/:id',
    component: UserUpdateComponent
  },
  {
    path: 'user/user-delete/:id',
    component: UserDeleteComponent
  },
  {
    path: 'user/user-profile/:id',
    component: UserProfile
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
