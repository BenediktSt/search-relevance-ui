import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../services/statistics.service';
import {AverageEntry} from '../average-list/AverageEntry';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.css']
})
export class StatisticsListComponent implements OnInit {

  statisticalEntries: Map<string, Array<AverageEntry>>;
  keys: Array<string>;

  constructor(
    private statisticalService: StatisticsService
  ) {
  }

  ngOnInit() {
    this.getAllStatisticsEntries();
  }

  private getAllStatisticsEntries() {
    this.statisticalService.getAllStatisticalEntries()
      .subscribe(values => {
        this.statisticalEntries = values;
        this.keys = Array.from(this.statisticalEntries.keys());

/*        for (const [key, value] of this.statisticalEntries) {
          console.log(key + ' = ' + value);
        }*/
/*        for (const prop in this.statisticalEntries) {
          console.log(prop + ': ' + (this.statisticalEntries[prop] as  Array<AverageEntry>).length);
        }*/

        /*        const map = new Map([
                  ['APPLE', 1],
                  ['ORANGE', 2],
                  ['MANGO', 3]
                ]);
                console.log(typeof map);
                console.log(map);*/
      });
  }
}
