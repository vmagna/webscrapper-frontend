import {NgModule} from '@angular/core';
import {ModulesComponent} from './modules.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutModule} from './admin.layout/admin.layout.module';

@NgModule({
  declarations: [
    ModulesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminLayoutModule
  ],
})
export class ModulesModule {

}
