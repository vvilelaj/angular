import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { SharedModule } from './shared';
import { CoreModule, LocalStorageService, UserInfoService, AuthService, IsAuthenticatedGuard, IsAdminGuard } from './core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AuthModule,
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
