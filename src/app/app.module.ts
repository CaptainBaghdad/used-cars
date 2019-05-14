import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingService } from './landing.service';
import { LoadingComponent } from './loading/loading.component';
import { CarsComponent } from './cars/cars.component';
import { FilterComponent } from './filter/filter.component';
import { UserCarsComponent } from './user-cars/user-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    LoadingComponent,
    CarsComponent,
    FilterComponent,
    UserCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule
  
  ],
  providers: [LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
