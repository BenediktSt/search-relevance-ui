import {Component, OnInit} from '@angular/core';
import {AverageService} from '../services/average.service';
import {Statistics} from '../model/Statistics';

@Component({
  selector: 'app-average-list',
  templateUrl: './average-list.component.html',
  styleUrls: ['./average-list.component.css']
})
export class AverageListComponent implements OnInit {

  public averageEntries: Array<Statistics>;
  columnsToDisplay = ['rank', 'probability'];

  constructor(
    private averageService: AverageService
  ) {}

  ngOnInit() {
    this.getArverageEntries();
  }

  getArverageEntries() {
    this.averageService.getAverageList()
      .subscribe(entries => this.averageEntries = entries);
  }
}
