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

  days = Array.from(new Array(this.resetAttempts + 1), (x, i) => i + 1);

  ngOnInit() {
  }

  getPlayerTotalDamage(item: any): number {
    return item.day1 + item.day2 + item.day3;
  }

  getDayDamage(index: number): number {
    let total = 0;
    for (const item of this.items) {
      total += item['day' + index];
    }
    return total;
  }

  getTotalDamage(): number {
    let total = 0;
    for (const item of this.items) {
      total += this.getPlayerTotalDamage(item);
    }
    return total;
  }
}
