import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { A1Component } from '../../components/a1/a1.component';
import { A2Component } from '../../components/a2/a2.component';
import { A3Component } from '../../components/a3/a3.component';
import { ZModule } from '../z/z.module';

@NgModule({
  declarations: [
    A1Component,
    A2Component,
    A3Component
  ],
  imports: [
    CommonModule,
    ARoutingModule,
    ZModule
  ]
})
export class AModule { }
