import {Component, OnInit} from '@angular/core';

import * as data from '../assets/data/the-sith-triumvirate-t5-07_03_v2.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tier = 5;
  start = new Date((<any>data).start);
  finish = new Date((<any>data).finish);
  resetAttempts = (<any>data).resetAttempts;

  items = (<any>data).items;

  ngOnInit() {
  }

  getPlayerTotal(item: any) {
    return item.day1 + item.day2 + item.day3;
  }

  getDay1Total() {
    let total = 0;
    for (const item of this.items) {
      total += item.day1;
    }
    return total;
  }

  getDay2Total() {
    let total = 0;
    for (const item of this.items) {
      total += item.day3;
    }
    return total;
  }

  getDay3Total() {
    let total = 0;
    for (const item of this.items) {
      total += item.day3;
    }
    return total;
  }

  getTotal() {
    let total = 0;
    for (const item of this.items) {
      total += this.getPlayerTotal(item);
    }
    return total;
  }
}
