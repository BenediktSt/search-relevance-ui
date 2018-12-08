export class TrackingEntry {
  public searchTerm: string;
  public result: string;
  public rank: number;
  public count: number;

  constructor(searchTerm: string, count: number, result: string = null, rank: number = 0) {
    this.searchTerm = searchTerm;
    this.result = result;
    this.rank = rank;
    this.count = count;
  }
}
