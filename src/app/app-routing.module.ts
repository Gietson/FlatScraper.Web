import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ads',
    loadChildren: './ads/ads.module#AdsModule'
  },
  {
    path: '**',
    redirectTo: 'ads', // TODO redirect to dashboard when implemented
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
