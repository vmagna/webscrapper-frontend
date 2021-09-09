import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './modules/not.found/not.found.component';
import {ModulesComponent} from './modules/modules.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {title: 'Dashboard', path: 'dashboard'},
      },
      {
        path: 'historico',
        data: {title: 'Histórico', path: 'historico'},
        loadChildren: () => import('./modules/historicos/historicos.module').then(m => m.HistoricosModule),
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]
  },
  {
    path: 'dashboard-component',
    component: DashboardComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
