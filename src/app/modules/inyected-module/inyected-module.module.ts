import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InyectedComponentComponent } from '../../components/inyected-component/inyected-component.component';
import { InyectedServiceService } from '../../services/inyected-service.service';
import { InyectedComponent2Component } from '../../components/inyected-component2/inyected-component2.component';

@NgModule({
  declarations: [InyectedComponentComponent, InyectedComponent2Component],
  imports: [
    CommonModule
  ],
  providers: [InyectedServiceService],
  exports: [InyectedComponentComponent, InyectedComponent2Component]
})
export class InyectedModuleModule { }
