import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../services/statistics.service';
import {SearchRankins} from '../model/SearchRankins';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.css']
})
export class StatisticsListComponent implements OnInit {

  searchRankins: Array<SearchRankins>;

  constructor(
    private statisticalService: StatisticsService
  ) {
  }

  ngOnInit() {
    this.getAllStatisticsEntries();
  }

  private getAllStatisticsEntries() {
    this.statisticalService.getAllStatisticalEntries()
      .subscribe(values => this.searchRankins = values);
  }
}
