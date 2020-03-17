import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(mod => mod.AuthModule),
    data: { preload: true }
  },
  {
    path: 'consultant',
    loadChildren: () =>
      import('./consultant/consultant.module').then(mod => mod.ConsultantModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  },

  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.module').then(mod => mod.AdminModule),
  // },

];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
