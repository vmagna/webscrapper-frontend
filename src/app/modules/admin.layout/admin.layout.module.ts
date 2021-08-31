import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {AdminLayoutComponent} from './admin.layout.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AdminLayoutComponent,
  ],
  entryComponents: [],
  exports: [
    AdminLayoutComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
    ]
})
export class AdminLayoutModule { }
