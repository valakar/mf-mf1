import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubPage1Component } from './containers/sub-page1/sub-page1.component';
import { SubPage2Component } from './containers/sub-page2/sub-page2.component';
import { Page1RoutingModule } from './page1-routing.module';

@NgModule({
  declarations: [
    SubPage1Component,
    SubPage2Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule
  ]
})
export class Page1Module { }
