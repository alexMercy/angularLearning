import { Component } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent {

  window$ = this.service.window;

  constructor( private service: AppService) {
  }

  toggle() {
    this.service.toggleWindow()
  }
}
