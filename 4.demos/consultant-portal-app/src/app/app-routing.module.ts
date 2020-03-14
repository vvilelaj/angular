import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./auth/auth.module').then(mod => mod.AuthModule),
  //   data: { preload: true }
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.module').then(mod => mod.AdminModule),
  // },
  // {
  //   path: 'consultant',
  //   loadChildren: () =>
  //     import('./consultant/consultant.module').then(mod => mod.ConsultantModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
