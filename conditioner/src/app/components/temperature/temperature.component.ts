import { Component } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  temperature$ = this.service.getTemperature;

  constructor( private service: AppService) {
  }

  toggleTemperature() {
    this.service.setTemperature = !this.temperature$.value;
  }
}
