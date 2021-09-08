import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderInterceptor} from './interceptors/loader.interceptor';
import {LoaderService} from './services/loader.service';

import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot(
      // defaultLanguage: 'en',
      // currentLang: 'pt-BR'
    ),
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
  ],
})
export class CoreModule {}


