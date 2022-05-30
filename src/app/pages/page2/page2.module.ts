import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubPage3Component } from './containers/sub-page3/sub-page3.component';
import { Page2RoutingModule } from './page2-routing.module';

@NgModule({
  declarations: [
    SubPage3Component
  ],
  imports: [
    CommonModule,
    Page2RoutingModule
  ]
})
export class Page2Module { }
