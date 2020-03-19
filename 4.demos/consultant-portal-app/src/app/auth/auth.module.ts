import { NgModule } from '@angular/core';
import { AuthComponent, LoginComponent, ForgetPasswordComponent, AuthRoutingModule } from '.';
import { SharedModule } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
