import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class DashboardService {

  private BASE_URL = environment.apiUrl + "historico-api/";

  constructor(private http: HttpClient) {}

  getHistoricoSearch(object: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL + 'search', object);
  }

}
