import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponentComponent } from '../../components/my-first-component/my-first-component.component';
import { Routes, RouterModule } from '@angular/router';

export const MY_FIRST_ROUTES: Routes = [
  { path: 'ejercicio-5', component: MyFirstComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFirstComponentComponent,
    RouterModule.forChild(MY_FIRST_ROUTES)
  ],
  exports: [RouterModule]
})
export class MyFirstModuleModule { }
