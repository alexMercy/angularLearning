import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConditionerComponent } from './components/conditioner/conditioner.component';
import { WindowComponent } from './components/window/window.component';
import { PowerSocketComponent } from './components/power-socket/power-socket.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { ControllerComponent } from './components/controller/controller.component';
import { ConditionerPipe } from './components/conditioner/conditioner.pipe';
import { ControllerPipe } from './components/controller/controller.pipe';
import { PowerSocketPipe } from './components/power-socket/power-socket.pipe';
import { TemperaturePipe } from './components/temperature/temperature.pipe';
import { WindowPipe } from './components/window/window.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConditionerComponent,
    WindowComponent,
    PowerSocketComponent,
    TemperatureComponent,
    ControllerComponent,
    ConditionerPipe,
    ControllerPipe,
    PowerSocketPipe,
    TemperaturePipe,
    WindowPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
