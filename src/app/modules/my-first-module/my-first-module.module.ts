import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../../components/my-first-component/my-first-component.component';
import { Routes, RouterModule } from '@angular/router';

export const MY_FIRST_ROUTES: Routes = [
  { path: 'ejercicio-5', component: MyFirstComponent },
];

@NgModule({
  declarations: [MyFirstComponent],
  imports: [CommonModule, RouterModule.forChild(MY_FIRST_ROUTES)],
  exports: [RouterModule, MyFirstComponent],
})
export class MyFirstModule {}
