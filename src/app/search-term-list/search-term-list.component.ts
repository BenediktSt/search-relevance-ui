import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../services/statistics.service';

@Component({
  selector: 'app-search-term-list',
  templateUrl: './search-term-list.component.html',
  styleUrls: ['./search-term-list.component.css']
})
export class SearchTermListComponent implements OnInit {

  searchTerms: Map<string, number>;
  keys: Array<string>;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit() {
    this.getSearchTerms();
  }

  getSearchTerms() {
    this.statisticsService.getAllSearchTerms()
      .subscribe(entries => {
        this.searchTerms = entries;
        this.keys = Array.from(this.searchTerms.keys());
      });
  }

}
