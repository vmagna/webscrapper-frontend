import {NgModule} from '@angular/core';
import {TitleCardComponent} from './title.card.component';
import {CommonModule} from '@angular/common';
import { PrimeFacesModule } from '../../prime.faces.module';

@NgModule({
  declarations: [
    TitleCardComponent
  ],
  imports: [
    PrimeFacesModule,
    CommonModule,
  ],
  exports: [
    TitleCardComponent
  ]
})
export class TitleCardModule {}
