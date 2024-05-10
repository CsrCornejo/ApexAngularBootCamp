import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InyectedComponent } from '../../components/inyected-component/inyected-component.component';
import { InyectedService } from '../../services/inyected-service.service';
import { Inyected2Component } from '../../components/inyected-component2/inyected-component2.component';

@NgModule({
  declarations: [InyectedComponent, Inyected2Component],
  imports: [
    CommonModule
  ],
  providers: [InyectedService],
  exports: [InyectedComponent, Inyected2Component]
})
export class InyectedModule { }
