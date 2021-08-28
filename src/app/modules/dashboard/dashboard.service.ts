import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class DashboardService {
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCharts(idChart: any): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'chart?id=' + idChart);
  }
}
