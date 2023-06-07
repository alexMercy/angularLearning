import {Component} from '@angular/core';
import {AppService} from "../../app.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-conditioner',
  templateUrl: './conditioner.component.html',
  styleUrls: ['./conditioner.component.css']
})
export class ConditionerComponent {

  public conditioner$: Observable<boolean> = this.service.conditioner$;

  constructor( private service: AppService) {
  }
}
