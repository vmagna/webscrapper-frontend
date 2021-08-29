import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {DashboardService} from './dashboard.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
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
export class DashboardModule {
}
