import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DashboardService} from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // MANIPULAÇÃO DO STORAGE DA BUSCA
  private static OBJETOSEARCH = 'searchHistorico';

  searchHistorico: FormGroup;

  autorizadorsSelect = [
    {label: 'TODOS', value: 0},
    {label: 'AM', value: 1},
    {label: 'BA', value: 2},
    {label: 'CE', value: 3},
    {label: 'GO', value: 4},
    {label: 'MG', value: 5},
    {label: 'MS', value: 6},
    {label: 'MT', value: 7},
    {label: 'PE', value: 8},
    {label: 'PR', value: 9},
    {label: 'RS', value: 10},
    {label: 'SP', value: 11},
    {label: 'SV-AN', value: 12},
    {label: 'SV-RS', value: 13},
    {label: 'SVC-AN', value: 14},
    {label: 'SVC-RS', value: 15},
  ];

  dataAtual = new Date();
  objetoBusca: any;

  listHistorico: any[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.filtroPadrao();
    this.verificarStorage();
    this.createForm();
    this.getBuscaHistorico();

    this.searchHistorico.controls.autorizador.valueChanges.subscribe(() => {
      this.getBuscaHistorico();
    });
  }

  get objetosearch() {
    return sessionStorage.getItem(DashboardComponent.OBJETOSEARCH);
  }

  set objetosearch(objBusca: any) {
    sessionStorage.setItem(DashboardComponent.OBJETOSEARCH, JSON.stringify(objBusca));
  }

  filtroPadrao(): void {
    let dataAtual = new Date();
    this.objetoBusca = {
      dtInicio:  new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1),
      dtFim: new Date(),
      autorizador: this.autorizadorsSelect[0].value
    };
  }

  getBuscaHistorico(): void {
    this.setToObjectSearch();
    console.log("FILTRO BUSCA => ", this.objetoBusca.autorizador);
    setTimeout(() => {
      this.dashboardService.getHistoricoSearch(this.objetoBusca).subscribe(result => {
        this.listHistorico = result.data;
        console.log("HISTORICO RESULT => ", this.listHistorico);
      });
    });
  }

  verificarStorage(): void {
    if (this.objetosearch) {
      this.objetoBusca = JSON.parse(this.objetosearch);
      this.objetoBusca.dtInicio = new Date(this.objetoBusca.dtInicio);
      this.objetoBusca.dtFim = new Date(this.objetoBusca.dtFim);
    }
  }

  createForm(): void {
    this.searchHistorico = this.formBuilder.group({
      dtInicio: [this.objetoBusca.dtInicio, new FormControl()],
      dtFim: [this.objetoBusca.dtFim, new FormControl()],
      autorizador: [this.objetoBusca.autorizador, new FormControl()]
    });
  }

  getDate(date: any): string {
    return new Date(date).toISOString();
  }

  setToObjectSearch(): void {
    this.objetoBusca = {
      dtInicio: this.searchHistorico.value.dtInicio ? this.getDate(this.searchHistorico.value.dtInicio) : null,
      dtFim: this.searchHistorico.value.dtFim ? this.getDate(this.searchHistorico.value.dtFim) : null,
      autorizador: this.searchHistorico.value.autorizador,
    };
    this.objetosearch = this.objetoBusca;
  }

}
