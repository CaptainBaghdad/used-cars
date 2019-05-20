import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

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
import { Error500Component } from './error500/error500.component';
import { Error400Component } from './error400/error400.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { ShowCarComponent } from './show-car/show-car.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    LoadingComponent,
    CarsComponent,
    FilterComponent,
    UserCarsComponent,
    Error500Component,
    Error400Component,
    CarEditComponent,
    ShowCarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  
  ],
  providers: [LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
