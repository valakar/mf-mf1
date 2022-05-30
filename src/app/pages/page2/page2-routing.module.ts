import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubPage3Component } from './containers/sub-page3/sub-page3.component';

const routes: Routes = [{
	path: '',
	component: SubPage3Component
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Page2RoutingModule { }
