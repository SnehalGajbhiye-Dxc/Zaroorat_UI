import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfessionalComponent } from './professional/professional.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginProfessionalComponent } from './login-professional/login-professional.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { ProfessionalHistoryComponent } from './professional-history/professional-history.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path:'customer',component:CustomerComponent,
children : [   ]},
{path:'professional',component:ProfessionalComponent,
children : [   ]},

{path:'',component:ProfessionalComponent},
{path:'login-customer',component:LoginCustomerComponent},
{path:'login-vendor',component:LoginProfessionalComponent},
  // {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }
  ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfessionalComponent,
    CustomerComponent,
    LoginCustomerComponent,
    LoginProfessionalComponent,
    CustomerHistoryComponent,
    ProfessionalHistoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
