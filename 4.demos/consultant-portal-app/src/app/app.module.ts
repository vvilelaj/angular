import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ConsultantModule } from './consultant/consultant.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthService, IsAuthenticatedGuard, IsAdminGuard, UserInfoService, LocalStorageService } from './core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AdminModule,
    ConsultantModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
    LocalStorageService,
    UserInfoService,
    AuthService,
    IsAuthenticatedGuard,
    IsAdminGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
