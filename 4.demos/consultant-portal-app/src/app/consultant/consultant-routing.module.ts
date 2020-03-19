import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultantComponent } from './consultant.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { IsAuthenticatedGuard } from '../core/guards/auth/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ConsultantComponent,
        canActivate: [
          IsAuthenticatedGuard
        ],
        children:[
          {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full'
          },
          {
            path: 'profile',
            children: [{
              path: '',
              redirectTo: 'info',
              pathMatch: 'full'
            },
            {
              path: 'info',
              component: ProfileInfoComponent
            },
            {
              path: 'edit',
              component: ProfileEditComponent
            }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantRoutingModule { }
