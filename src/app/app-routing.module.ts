import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    redirectTo: 'subscriptions/home',
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
