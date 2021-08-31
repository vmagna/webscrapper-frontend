import {CommonModule} from '@angular/common';
// @ts-ignore
import {NgModule} from '@angular/core';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MegaMenuModule} from "primeng/megamenu";
import {ToolbarModule} from "primeng/toolbar";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {ChartModule} from "primeng/chart";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {FullCalendarModule} from "primeng/fullcalendar";
import {TooltipModule} from "primeng/tooltip";
import {SidebarModule} from "primeng/sidebar";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ListboxModule} from "primeng/listbox";
import {CardModule} from "primeng/card";
import {PanelMenuModule} from "primeng/panelmenu";
import {RippleModule} from "primeng/ripple";

const primeFaces = [
  ProgressSpinnerModule,
  MegaMenuModule,
  ToolbarModule,
  MenubarModule,
  ButtonModule,
  ChartModule,
  VirtualScrollerModule,
  FullCalendarModule,
  TooltipModule,
  SidebarModule,
  InputTextModule,
  CalendarModule,
  AutoCompleteModule,
  ChipsModule,
  DropdownModule,
  InputMaskModule,
  InputNumberModule,
  MultiSelectModule,
  InputTextareaModule,
  InputTextModule,
  ListboxModule,
  CardModule,
  PanelMenuModule,
  RippleModule
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
