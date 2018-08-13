import { Injectable } from '@angular/core';
import {AverageEntry} from '../average-list/AverageEntry';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AverageService {

  constructor(
    private http: HttpClient
  ) { }

  public getAverageList(): Observable<Array<AverageEntry>> {
    return this.http.get<Array<AverageEntry>>('http://localhost:8080/averageList');
  }
}
