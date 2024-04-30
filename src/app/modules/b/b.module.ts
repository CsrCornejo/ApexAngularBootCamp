import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { B1Component } from '../../components/b1/b1.component';
import { B2Component } from '../../components/b2/b2.component';
import { B3Component } from '../../components/b3/b3.component';
import { ZModule } from '../z/z.module';


@NgModule({
  declarations: [
    B1Component,
    B2Component,
    B3Component
  ],
  imports: [
    CommonModule,
    BRoutingModule,
    ZModule
  ]
})
export class BModule { }
