import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatisticsService} from '../services/statistics.service';
import {Statistics} from '../model/Statistics';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-search-term-details',
  templateUrl: './search-term-details.component.html',
  styleUrls: ['./search-term-details.component.css']
})
export class SearchTermDetailsComponent implements OnInit {

  searchTerm: string;
  statistics: Array<Statistics>;
  columnsToDisplay = ['rank', 'probability', 'result'];

  constructor(
    private route: ActivatedRoute,
    private statisticsService: StatisticsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');
    this.statisticsService.getStatisticsBySearchTerm(this.searchTerm)
      .subscribe(searchRankings => this.statistics = searchRankings.rankings);
  }

  public getSecureUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
