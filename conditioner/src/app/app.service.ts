import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _powerSocket = new BehaviorSubject(false);
  public powerSocket$ = this._powerSocket.asObservable()
  togglePowerSocket() {
    this._powerSocket.next(!this._powerSocket.value);
  }

  private _window = new BehaviorSubject(false);
  public window$ = this._window.asObservable()
  toggleWindow() {
    this._window.next(!this._window.value);
  }

  private _controller = new BehaviorSubject(false);
  public controller$ = this._controller.asObservable()
  toggleController() {
    this._controller.next(!this._controller.value)
  }

  private _temperature = new BehaviorSubject(false);
  public temperature$ = this._temperature.asObservable()
  toggleTemperature() {
    this._temperature.next(!this._temperature.value)
  }


  conditioner$ = combineLatest(
    [this.powerSocket$, this.window$, this.controller$, this.temperature$],
    (powerSocket, window,controller, temperature) =>
      powerSocket && window && controller && temperature)

  constructor() { }


}
