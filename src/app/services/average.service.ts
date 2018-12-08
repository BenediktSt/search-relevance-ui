import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Statistics} from '../model/Statistics';

@Injectable({
  providedIn: 'root'
})
export class AverageService {

  constructor(
    private http: HttpClient
  ) { }

  public getAverageList(): Observable<Array<Statistics>> {
    return this.http.get<Array<Statistics>>('http://localhost:8080/averageList');
  }
}
