import { Pipe, PipeTransform } from '@angular/core';
import {map, Observable} from "rxjs";

@Pipe({
  name: 'temperatureTranslate'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: Observable<boolean>): Observable<string> {
    return value.pipe(map(item => item ? "Подходящая" : "Неподходящая"));
  }

}
