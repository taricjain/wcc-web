import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AboutComponent } from './about/about.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from '../../app/app.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    AboutComponent, 
    AppHeaderComponent, 
    DashboardComponent, 
    LoginComponent, 
    MenuComponent,
    AppComponent,
    CheckoutComponent
  ]
})
export class UserModule { }
