import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'mf1',
		loadChildren: () => import('./pages/root/root.module').then(m => m.RootModule),
	},
	{ path: '**', redirectTo: 'mf1', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
