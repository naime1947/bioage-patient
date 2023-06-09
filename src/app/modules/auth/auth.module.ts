import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { UnsecuredHeaderComponent } from './components/unsecured-header/unsecured-header.component';



@NgModule({
  declarations: [
    LoginComponent,
    UnsecuredHeaderComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
