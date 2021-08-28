import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderInterceptor} from './interceptors/loader.interceptor';
import {LoaderService} from './services/loader.service';

@NgModule({
  imports: [
    HttpClientModule,
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


