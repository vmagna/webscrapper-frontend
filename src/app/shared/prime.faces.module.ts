import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

const primeFacesModules = [
  // MODULES AQUI
];

@NgModule({
  imports: [
    CommonModule,
    //...primeFacesModules
  ],
  exports: [
    //...primeFacesModules
  ],
  providers: [
    //{provide: DateAdapter, useClass: CustomDateAdapter},
    //{provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    //{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})

export class PrimeFacesModule {
}
