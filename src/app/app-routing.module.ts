import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
  { path: 'packages', component: PackagesComponent },
  { path: 'home', component: HomeComponent },
  {path: '',redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
