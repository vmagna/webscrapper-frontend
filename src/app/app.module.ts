import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ModulesModule} from './modules/modules.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {NotFoundModule} from './modules/not.found/not.found.module';

import ptBr from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(ptBr);

import {LoaderComponent} from './loader.component/loader.component';
import {PrimeFacesModule} from "./shared/prime.faces.module";

//import {SharedModule} from './shared/shared.module';
// import {ToastrModule} from 'ngx-toastr';
//import {NgxCurrencyModule} from 'ngx-currency';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
    imports: [
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        //SharedModule,

        //ToastrModule.forRoot(),
        //NgxCurrencyModule.forRoot(MASK_SAQUE),
        ModulesModule,

        DashboardModule,
        NotFoundModule,
        PrimeFacesModule,
    ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
