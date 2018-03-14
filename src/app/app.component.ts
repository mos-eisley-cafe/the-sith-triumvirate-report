import {Component, OnInit} from '@angular/core';

import * as data from '../assets/data/the-sith-triumvirate-t5-07_03.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tier = 5;
  start = new Date('2018/03/07');
  finish = new Date('2018/03/09');
  resetAttempts = 2;

  items = (<any>data);

  total = {
    day1_total: 0,
    day2_new: 0,
    day2_total: 0,
    day3_new: 0,
    day3_total: 0
  };

  ngOnInit() {
    for (const entry of this.items) {
      this.total.day1_total += entry.day1_total;
      this.total.day2_new += entry.day2_new;
      this.total.day2_total += entry.day2_total;
      this.total.day3_new += entry.day3_new;
      this.total.day3_total += entry.day3_total;
    }
  }
}
