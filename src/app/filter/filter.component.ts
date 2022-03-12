import {Component, Input, OnInit} from '@angular/core';
import {Filter} from '../dataModels/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() filters: Filter[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  createFilter(): void {
    if (this.filters) {
      this.filters.push({amount: 50, stat: 'economy', type: 'more'});
    } else {
      this.filters = [{amount: 50, stat: 'economy', type: 'more'}];
    }
  }

  delete(toBeDeleted: Filter) {
    const foundIndex = this.filters.findIndex(filter =>
      filter.stat === toBeDeleted.stat &&
      filter.type === toBeDeleted.type &&
      filter.amount === toBeDeleted.amount);
    if (foundIndex > -1) {
      this.filters.splice(foundIndex, 1); // 2nd parameter means remove one item only
    }
  }
}
