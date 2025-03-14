import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./Pages/home-page/home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./Pages/details-cart/details-cart/details-cart.component').then(m => m.DetailsCartComponent)
  }
];
