import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng-lts/button';
import {MenuModule} from 'primeng-lts/menu';
import {MegaMenuModule} from 'primeng-lts/megamenu';
import {ToolbarModule} from 'primeng-lts/toolbar';
import {MenubarModule} from 'primeng-lts/menubar';
import {ChartModule, FullCalendarModule, ProgressSpinnerModule, VirtualScrollerModule} from "primeng-lts";

const primeFaces = [
  // MODULES AQUI
  ProgressSpinnerModule,
  MenuModule,
  MegaMenuModule,
  ToolbarModule,
  MenubarModule,
  ButtonModule,
  ChartModule,
  VirtualScrollerModule,
  FullCalendarModule
];

// @ts-ignore
@NgModule({
  imports: [
    CommonModule,
    ...primeFaces
  ],
  exports: [
    ...primeFaces
  ],
  providers: [
    //{provide: DateAdapter, useClass: CustomDateAdapter},
    //{provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    //{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})

export class PrimeFacesModule {}
