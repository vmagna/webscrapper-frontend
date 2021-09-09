import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'statusServico'
})
export class StatusServicoPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(value: any, args?: any) {
    console.log(value, args);

    if (value === 'VERDE') {
      return "<span class='VERDE'></span>";
    }

    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
