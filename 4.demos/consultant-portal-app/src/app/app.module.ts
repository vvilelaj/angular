import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AuthModule } from './auth';
import { AdminModule } from './admin/admin.module';
import { ConsultantModule } from './consultant';
import { SharedModule } from './shared';
import { CoreModule, LocalStorageService, UserInfoService, AuthService, IsAuthenticatedGuard, IsAdminGuard } from './core';
import { AppRoutingModule } from './app-routing.module';



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
    CoreModule,
    AppRoutingModule,
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
