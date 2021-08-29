import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  countries: any[];

  cities: any[];

  filteredCountries: any[];



  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;
  value6: any;
  value7: any;
  value8: any;
  value9: any;
  value10: any;




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

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

  }

  ngOnInit(): void {
    /*this.sessionService.loadSession().subscribe((session) => {
      this.userSession = session;
    });*/
  }

  changeFiltro() {
    console.log(this.filtro);
  }

  searchCountry(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

}
