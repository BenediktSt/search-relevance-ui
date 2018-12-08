import {Statistics} from './Statistics';

export class SearchRankins {
  public searchTerm: string;
  public rankings: Array<Statistics>;

  constructor(searchTerm: string, rankings: Array<Statistics>) {
    this.searchTerm = searchTerm;
    this.rankings = rankings;
  }
}
