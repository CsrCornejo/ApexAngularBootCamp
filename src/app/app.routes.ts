import { Routes } from '@angular/router';
import { SimpleComponent } from './components/simple/simple.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
    {
        path: 'simple',
        component: SimpleComponent
    },
    {
        path: 'lazy',
        loadComponent: () => import('./components/lazy/lazy.component').then(m => m.LazyComponent)
    },
    {
        path: 'list',
        component: ListComponent,
        children: [
            {
                path: ':param',
                component: DetailComponent
            }
        ]
    }
];
