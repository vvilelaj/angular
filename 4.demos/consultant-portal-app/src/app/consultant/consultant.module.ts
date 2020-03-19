import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ConsultantRoutingModule,
  ConsultantComponent,
  ProfileInfoComponent,
  ProfileEditComponent,
  HeaderComponent,
  FooterComponent
} from '.';

@NgModule({
  declarations: [
    ConsultantComponent,
    ProfileInfoComponent,
    ProfileEditComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ConsultantRoutingModule
  ]
})
export class ConsultantModule { }
