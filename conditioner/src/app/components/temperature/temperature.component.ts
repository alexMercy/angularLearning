import { Component } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  temperature$ = this.service.temperature$;

  constructor( private service: AppService) {
  }

  toggle() {
    this.service.toggleTemperature();
  }
}
