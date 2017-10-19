import { Routes, RouterModule } from '@angular/router';

import { AdsListComponent } from "./ads-list/index";

import {
  LoginComponent,
  RegisterComponent,
  ProfileComponent
} from "./user/index";

import { AuthGuard } from './user/shared/auth.guard';

const appRoutes: Routes = [
  { path: '', component: AdsListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
