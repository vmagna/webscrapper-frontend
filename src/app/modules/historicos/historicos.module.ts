import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HistoricosComponent} from "./historicos.component";
import {DashboardService} from "../dashboard/dashboard.service";

@NgModule({
  declarations: [
    HistoricosComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    DashboardService
  ],
})
export class HistoricosModule {}
