import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../services/statistics.service';
import {TrackingEntry} from '../model/TrackingEntry';

@Component({
  selector: 'app-search-term-list',
  templateUrl: './search-term-list.component.html',
  styleUrls: ['./search-term-list.component.css']
})
export class SearchTermListComponent implements OnInit {

  searchTerms: Array<TrackingEntry>;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit() {
    this.getSearchTerms();
  }

  getSearchTerms() {
    this.statisticsService.getAllSearchTerms()
      .subscribe(entries => this.searchTerms = entries);
  }

}
