import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng-lts/button';


const primeFacesModules = [
  // MODULES AQUI
  ButtonModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...primeFacesModules
  ],
  exports: [
    ...primeFacesModules
  ],
  providers: [
    //{provide: DateAdapter, useClass: CustomDateAdapter},
    //{provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    //{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})

export class PrimeFacesModule {
}
