import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConditionerComponent } from './components/conditioner/conditioner.component';
import { WindowComponent } from './components/window/window.component';
import { PowerSocketComponent } from './components/power-socket/power-socket.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { ControllerComponent } from './components/controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    ConditionerComponent,
    WindowComponent,
    PowerSocketComponent,
    TemperatureComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
