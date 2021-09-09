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
  private static OBJETOSEARCH = 'searchDashboardComponent';

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
  ) {
  }

  ngOnInit(): void {
    // SETAR VALORES PADRÃO DO FILTRO
    this.filtroPadrao();

    // VERIFICAR SE EXISTE FILTRO NO STORAGE
    this.verificarStorage();

    // CRIAR FORMULÁRIO
    this.createForm();

    // REALIZAR PRIMEIRA BUSCA
    this.getBuscaHistorico();

    // CHANGE VALUES SELECT LIST
    this.searchHistorico.controls.autorizador.valueChanges.subscribe((newVal) => {
      this.searchHistorico.value.autorizador = newVal;
      this.getBuscaHistorico();
    });
  }

  /***
   * FUNÇÕES PARA MANIPULAÇÃO DO STORAGE
   */
  get objetosearch() {
    return sessionStorage.getItem(DashboardComponent.OBJETOSEARCH);
  }
  set objetosearch(objBusca: any) {
    sessionStorage.setItem(DashboardComponent.OBJETOSEARCH, JSON.stringify(objBusca));
  }

  filtroPadrao(): void {
    let dataAtual = new Date();
    this.objetoBusca = {
      dtInicio: new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1),
      dtFim: new Date(),
      autorizador: this.autorizadorsSelect[0].value
    };
  }

  getBuscaHistorico(): void {
    // CONVERTER FORM PARA OBJETO DE BUSCA
    this.setToObjectSearch();

    // TRATAMENTO DE DATAS PARA GMT -3
    this.objetoBusca.dtInicio = this.convertDate(this.objetoBusca.dtInicio, true);
    this.objetoBusca.dtFim = this.convertDate(this.objetoBusca.dtFim, true);

    // SEND REQUEST
    this.dashboardService.getHistoricoSearch(this.objetoBusca).subscribe(result => {
      this.listHistorico = result.data;
      console.log("HISTORICO RESULT => ", this.listHistorico);
    });
  }

  setToObjectSearch(): void {
    this.objetoBusca.dtInicio = this.searchHistorico.value.dtInicio ?
      this.getDate(this.searchHistorico.value.dtInicio) : null;
    this.objetoBusca.dtFim = this.searchHistorico.value.dtFim ?
      this.getDate(this.searchHistorico.value.dtFim) : null;
    this.objetoBusca.autorizador = this.searchHistorico.value.autorizador;

    // SALVANDO NO STORAGE
    this.objetosearch = this.objetoBusca;
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

  convertDate(dataRef: any, subtrair: any): any {
    let data = new Date(dataRef);
    let newDate = subtrair ? data.setHours(data.getHours() - 3) : data.setHours(data.getHours() + 3);
    return new Date(newDate);
  }

  getDate(date: any): string {
    return new Date(date).toISOString();
  }

}
