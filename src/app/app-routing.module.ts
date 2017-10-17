import { Routes, RouterModule } from '@angular/router';

import { AdsListComponent } from "./ads-list/index";

import {
  LoginComponent,
  RegisterComponent,
  ProfileComponent
} from "./user/index";

const appRoutes: Routes = [
  { path: '', component: AdsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
