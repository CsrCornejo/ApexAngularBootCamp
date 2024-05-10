import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { RouterModule } from '@angular/router';
import { MyFirstModule } from '../my-first-module/my-first-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyFirstModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }