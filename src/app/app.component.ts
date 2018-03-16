import {Component} from '@angular/core';

import * as data from '../assets/data/the-sith-triumvirate-t5-13_03.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tier = 5;
  start = new Date((<any>data).start);
  finish = new Date((<any>data).finish);
  resetAttempts = (<any>data).resetAttempts;

  items = (<any>data).items;

  days = Array.from(new Array((<any>data).daysToDisplay), (x, i) => i + 1);

  getPlayerTotalDamage(item: any): number {
    let damage = 0;
    for (const i of this.days) {
      damage += item['day' + i];
    }
    return damage;
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
