import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _powerSocket = new BehaviorSubject(false);
  public get getPowerSocket() {return this._powerSocket}
  public set setPowerSocket(value: boolean) {this._powerSocket.next(value)}


  private _window = new BehaviorSubject(false);
  public get getWindow() {return this._window}
  public set setWindow(value: boolean) {this._window.next(value)}


  private _controller = new BehaviorSubject(false);
  public get getController() {return this._controller}
  public set setController(value: boolean) {this._controller.next(value)}


  private _temperature = new BehaviorSubject(false);
  public get getTemperature() {return this._temperature}
  public set setTemperature(value: boolean) {this._temperature.next(value)}


  private _conditioner = new BehaviorSubject(false);
  public get getConditioner() {return this._conditioner}


  constructor() { }

}
