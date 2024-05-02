import { Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

export const routes: Routes = [
  {
    children: [
      {
        component: ItemDetailComponent,
        path: ':id',
      },
    ],
    path: 'items',
    component: ItemListComponent,
  },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
