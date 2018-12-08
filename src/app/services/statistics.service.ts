import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AverageEntry} from '../average-list/AverageEntry';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TrackingEntry} from '../model/TrackingEntry';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllStatisticalEntries(): Observable<Map<string, Array<AverageEntry>>> {
    return this.http.get('http://localhost:8080/statistics/all')
      .pipe(
        map(value => {
          const resultMap: Map<string, Array<AverageEntry>> = new Map();
          for (const prop in value) {
            if (value.hasOwnProperty(prop)) {
              resultMap.set(prop, value[prop] as Array<AverageEntry>);
            }
          }
          return resultMap;
        })
      );
  }

  getAllSearchTerms(): Observable<Array<TrackingEntry>> {
    return this.http.get<Array<TrackingEntry>>('http://localhost:8080/statistics/searchterms');
  }
}
