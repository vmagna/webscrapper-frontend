import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {HistoricosComponent} from "./historicos.component";
import {DashboardService} from "../dashboard/dashboard.service";

const routesBoleto: Routes = [
  {
    path: '',
    component: HistoricosComponent,
    data: {
      title: 'Seja Bem-Vindo!',
      path: 'historico'
    },
  }
];

@NgModule({
  declarations: [
    HistoricosComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routesBoleto),
  ],
  providers: [
    DashboardService
  ],
})
export class HistoricosModule {}
