import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {LoadingComponent} from './loading/loading.component';
import {CarEditComponent} from './car-edit/car-edit.component';
import {ShowCarComponent} from './show-car/show-car.component';
import {HeaderComponent} from './header/header.component';
const routes: Routes = [
  {
    path: '',
    component: LoadingComponent,
    pathMatch: 'full'
  },

  {
    path: 'edit/:ed',
    component: CarEditComponent,
    pathMatch: 'full'
  },

  {
    path: 'car/:url',
    component: ShowCarComponent,
    pathMatch: 'full'
  },
  {
  path: 'register',
  component: RegisterComponent,
  pathMatch: 'full'
}, 

{
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full'
},

{path: 'dashboard',
  component: DashboardComponent,
  pathMatch: 'full'

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
