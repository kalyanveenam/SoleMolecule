import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import {LoginregisterComponent} from './loginregister/loginregister.component';
const routes: Routes = [
  { path: 'packages', component: PackagesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path:'login',component:LoginregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
