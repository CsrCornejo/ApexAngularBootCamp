import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'a',
    loadChildren: () => import('./modules/a/a.module').then((m) => m.AModule),
  },
  {
    path: 'b',
    loadChildren: () => import('./modules/b/b.module').then((m) => m.BModule),
  },
];
