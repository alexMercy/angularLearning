import {Component} from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  controller$ = this.service.getController;

  constructor( private service: AppService) {
  }

  toggleController() {
    this.service.setController = !this.controller$.value;
  }

}
