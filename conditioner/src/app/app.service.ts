import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _powerSocket = new BehaviorSubject(false);
  public powerSocket$ = this._powerSocket.asObservable()
  togglePowerSocket() {
    this.changeStatusConditioner();
    this._powerSocket.next(!this._powerSocket.value);
  }

  private _window = new BehaviorSubject(false);
  public window$ = this._window.asObservable()
  toggleWindow() {
    this.changeStatusConditioner();
    this._window.next(!this._window.value);
  }

  private _controller = new BehaviorSubject(false);
  public controller$ = this._controller.asObservable()
  toggleController() {
    this.changeStatusConditioner();
    this._controller.next(!this._controller.value)
  }

  private _temperature = new BehaviorSubject(false);
  public temperature$ = this._temperature.asObservable()
  toggleTemperature() {
    this.changeStatusConditioner();
    this._temperature.next(!this._temperature.value)
  }

  _conditioner = new BehaviorSubject(false);
  conditioner$ = this._conditioner.asObservable();
  public changeStatusConditioner() {
    this._conditioner.next(this._controller.value && this._powerSocket.value && this._temperature.value && this._window.value);
  }
  constructor() { }


}
