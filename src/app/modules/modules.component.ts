import {Component, OnInit} from '@angular/core';
// @ts-ignore
// import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  constructor(
    // private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    // this.primengConfig.ripple = true;
  }

}
