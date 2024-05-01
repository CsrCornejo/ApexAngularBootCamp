import { Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'items', component: ItemListComponent },
    { path: '',   redirectTo: '/items', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];
