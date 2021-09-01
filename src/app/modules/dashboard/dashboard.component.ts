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

  estadosSelect = [
    {label: 'TODOS', value: 0},
    {label: 'AM', value: 1},
    {label: 'BA', value: 2},
  ];

  dataAtual = new Date();
  objetoBusca: any = {
    dtInicio:  new Date(this.dataAtual.getFullYear(), this.dataAtual.getMonth(), 1),
    dtFim: new Date(),
    estado: {
      label: this.estadosSelect[0]
    }
  };

  listHistorico: any[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.verificarStorage();
    this.createForm();
    this.getBuscaHistorico();
  }

  get objetosearch() {
    return sessionStorage.getItem(DashboardComponent.OBJETOSEARCH);
  }

  set objetosearch(objBusca: any) {
    sessionStorage.setItem(DashboardComponent.OBJETOSEARCH, JSON.stringify(objBusca));
  }

  changeFiltro() {
    console.log(this.objetoBusca);
  }

  getBuscaHistorico(): void {
    this.setToObjectSearch();
    this.dashboardService.getHistoricoSearch(this.objetoBusca).subscribe(result => {
      this.listHistorico = result.data;
    });
  }

  verificarStorage(): void {
    if (this.objetosearch) {
      this.objetoBusca = JSON.parse(this.objetosearch);
    }
  }

  createForm(): void {
    this.searchHistorico = this.formBuilder.group({
      dtInicio: [this.objetoBusca.dtInicio, new FormControl()],
      dtFim: [this.objetoBusca.dtFim, new FormControl()],
      estado: [this.objetoBusca.estado, new FormControl()]
    });
  }

  getDate(date: any): string {
    return new Date(date).toISOString(); // .substr(0, 19).split('T')[0]
  }

  setToObjectSearch(): void {
    this.objetoBusca = {
      dtInicio: this.searchHistorico.value.dtInicio ? this.getDate(this.searchHistorico.value.dtInicio) : null,
      dtFim: this.searchHistorico.value.dtFim ? this.getDate(this.searchHistorico.value.dtFim) : null,
      estado: this.searchHistorico.value.estado,
    };
    this.objetosearch = this.objetoBusca;
  }

}
