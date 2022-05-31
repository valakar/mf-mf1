import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubPage1Component } from './containers/sub-page1/sub-page1.component';
import { SubPage2Component } from './containers/sub-page2/sub-page2.component';

const routes: Routes = [{
	path: '',
	component: SubPage1Component
}, {
	path: 'sub-page2',
	component: SubPage2Component
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Page1RoutingModule { }
