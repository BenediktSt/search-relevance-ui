import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatisticsService} from '../services/statistics.service';
import {SearchRankins} from '../model/SearchRankins';
import {Statistics} from '../model/Statistics';

@Component({
  selector: 'app-search-term-details',
  templateUrl: './search-term-details.component.html',
  styleUrls: ['./search-term-details.component.css']
})
export class SearchTermDetailsComponent implements OnInit {

  searchTerm: string;
  statistics: Array<Statistics>;
  columnsToDisplay = ['rank', 'probability'];

  constructor(
    private route: ActivatedRoute,
    private statisticsService: StatisticsService
  ) {}

  ngOnInit() {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');
    this.statisticsService.getStatisticsBySearchTerm(this.searchTerm)
      .subscribe(searchRankings => this.statistics = searchRankings.rankings);
  }

}
