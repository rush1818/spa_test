import { Routes } from '@angular/router';
import { Route1 } from './route-1/route-1';
import { Route2 } from './route-2/route-2';
import { Route3 } from './route-3/route-3';

export const routes: Routes = [
  {
    path: '',
    component: Route1,
  },
  {
    path: '1',
    component: Route1,
  },
  {
    path: '2',
    component: Route2,
  },
  {
    path: '3',
    component: Route3,
  },
];
