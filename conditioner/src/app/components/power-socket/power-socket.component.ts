import { Component } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-power-socket',
  templateUrl: './power-socket.component.html',
  styleUrls: ['./power-socket.component.css']
})
export class PowerSocketComponent {
  powerSocket$ = this.service.getPowerSocket;

  constructor( private service: AppService) {
  }

  togglePowerSocket() {
    this.service.setPowerSocket = !this.powerSocket$.value;
  }
}
