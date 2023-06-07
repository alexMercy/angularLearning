import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {decrement, increment, clear} from "./reducers/counter/counter.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count$: Observable<number>;
  constructor( private store: Store<{counter: number}>) {
    this.count$ = store.select('counter');
  }

  increment = () => {
    this.store.dispatch(increment())
  }

  decrement = () => {
    this.store.dispatch(decrement())
  }

  clear = () => {
   this.store.dispatch(clear())
  }
}
