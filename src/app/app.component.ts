import {Component} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map} from 'rxjs/operators';
import {PrimeNGConfig} from "primeng/api";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,

    private config: PrimeNGConfig,
    private translateService: TranslateService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data.title) {
            const element: HTMLElement | null = document.getElementById('titleToogle');
            // @ts-ignore
            element?.innerHTML = child.snapshot.data.title;
            return child.snapshot.data.title;
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe((data: any) => {
      if (data) {
        this.titleService.setTitle(data +
          ' - Monitorador Status NF-e');
      }
    });

    translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
    // this.translateService.setDefaultLang('en');
  }

  // translate(lang: string) {
  //   this.translateService.use(lang);
  //   this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
  // }

}
