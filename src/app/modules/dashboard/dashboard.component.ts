// @ts-ignore
import {Component, HostListener, OnInit} from '@angular/core';
// @ts-ignore
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  estadosSelect = [
    {label: 'TODOS', value: 0},
    {label: 'AM', value: 1},
    {label: 'BA', value: 2},
  ];

  filtro: any = {
    dtInicio: new Date(),
    dtFim: new Date(),
    estado: {
      label: this.estadosSelect[0]
    }
  };

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  changeFiltro() {
    console.log(this.filtro);
  }

}
