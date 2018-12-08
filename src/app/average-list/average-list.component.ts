import {Component, OnInit} from '@angular/core';
import {AverageEntry} from './AverageEntry';
import {AverageService} from '../services/average.service';

@Component({
  selector: 'app-average-list',
  templateUrl: './average-list.component.html',
  styleUrls: ['./average-list.component.css']
})
export class AverageListComponent implements OnInit {

  public averageEntries: Array<AverageEntry>;

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
