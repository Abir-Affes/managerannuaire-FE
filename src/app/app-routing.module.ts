import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './subscriptions/home/home.component';

const routes: Routes = [
  
  {
    path: 'users/home',
    redirectTo: 'users/home',
  },
  {
    path: 'specialities/home',
    redirectTo: 'specialities/home',
  },
  {
    path: 'subscriptions/home',
    component: HomeComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
