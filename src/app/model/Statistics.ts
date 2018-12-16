export class Statistics {
  public rank: number;
  public probability: number;
  public result: string;

  constructor(
    rank: number,
    probability: number,
    result: string = null
  ) {
    this.rank = rank;
    this.probability = probability;
    this.result = result;
  }
}
