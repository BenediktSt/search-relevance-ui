import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrackingEntry} from '../model/TrackingEntry';
import {SearchRankins} from '../model/SearchRankins';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) {
  }

  getAllStatisticalEntries(): Observable<Array<SearchRankins>> {
    return this.http.get<Array<SearchRankins>>('http://localhost:8080/statistics/all');
  }

  getStatisticsBySearchTerm(searchterm: string): Observable<SearchRankins> {
    return this.http.get<SearchRankins>('http://localhost:8080/statistics/' + searchterm);
  }

  getAllSearchTerms(): Observable<Array<TrackingEntry>> {
    return this.http.get<Array<TrackingEntry>>('http://localhost:8080/statistics/searchterms');
  }
}
