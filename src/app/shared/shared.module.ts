import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TitleCardModule } from './components/title-card/title.card.module';
import { PrimeFacesModule } from './prime.faces.module';

// COMPONENTES COMPARTILHADOS AQUI..
const componentsModules = [
  TitleCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...componentsModules,
  ],
  declarations: [],
  exports: [
    PrimeFacesModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...componentsModules
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
