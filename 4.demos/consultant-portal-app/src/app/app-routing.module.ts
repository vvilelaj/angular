import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule, NotFoundComponent } from './shared';

const routes: Routes = [
  {
    path: 'consultant',
    loadChildren: () =>
      import('./consultant/consultant.module').then(mod => mod.ConsultantModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
