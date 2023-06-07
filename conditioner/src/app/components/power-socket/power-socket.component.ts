import { Component } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-power-socket',
  templateUrl: './power-socket.component.html',
  styleUrls: ['./power-socket.component.css']
})
export class PowerSocketComponent {
  powerSocket$ = this.service.powerSocket$;

  constructor( private service: AppService) {
  }

  toggle() {
    this.service.togglePowerSocket();
  }
}
