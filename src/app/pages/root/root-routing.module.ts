import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './containers/root/root.component';

const routes: Routes = [
	{
		path: '',
		component: RootComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
			},
			{
				path: 'page1',
				loadChildren: () => import('../page1/page1.module').then(m => m.Page1Module),
			}, {
				path: 'page2',
				loadChildren: () => import('../page2/page2.module').then(m => m.Page2Module),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class RootRoutingModule {}
