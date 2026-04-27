import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './auth/login/login';
import { AuthLayouts } from './layouts/auth-layouts/auth-layouts';
import { MainLayouts } from './layouts/main-layouts/main-layouts';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Farmer Ecommerce' },
  { path: 'login', component: Login, title: 'Login - Farmer Ecommerce' },
  {
    path: '',
    component: AuthLayouts,
    children: [{ path: 'login', component: Login, title: 'Login Page' }],
  },
  {
    path: '',
    component: MainLayouts,
    children: [],
  },
];
