import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '../dataModels/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() filters: Filter[] | undefined = [];

  constructor() {}

  ngOnInit(): void {}

  createFilter(): void {
    if (this.filters) {
      this.filters.push({ amount: 50, stat: 'economy', type: 'more' });
    } else {
      this.filters = [{ amount: 50, stat: 'economy', type: 'more' }];
    }
  }
}
