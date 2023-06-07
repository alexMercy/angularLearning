import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateFrom = null;
  dateTo = null;

  from!: number;
  to!: number;

  difference = 0;

  constructor() {
  }
  onChangeFrom(date: Date) {
    if(!date) { this.difference = 0; return;}
    this.from = date.getTime();
    this.changeDifference();
  }

  onChangeTo(date: Date) {
    if(!date) { this.difference = 0; return;}
    this.to = date.getTime();
    this.changeDifference();
  }

  changeDifference() {
    if (!this.to || !this.from) return;
    const milPerDay = 1000*60*60*24;
    this.difference = Math.round((this.to - this.from - 1)/milPerDay);
  }
}
