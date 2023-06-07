import {Component} from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-conditioner',
  templateUrl: './conditioner.component.html',
  styleUrls: ['./conditioner.component.css']
})
export class ConditionerComponent {

  public conditioner$ = this.service.conditioner$;

  constructor( private service: AppService) {
  }
}
