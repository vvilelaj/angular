import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { ConsultantRoutingModule } from './consultant-routing.module';
import { ConsultantComponent } from './consultant.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';





@NgModule({
  declarations: [
    ConsultantComponent,
    ProfileInfoComponent,
    ProfileEditComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    ConsultantRoutingModule
  ]
})
export class ConsultantModule { }
