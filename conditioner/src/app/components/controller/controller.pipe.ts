import { Pipe, PipeTransform } from '@angular/core';
import {map, Observable} from "rxjs";

@Pipe({
  name: 'controllerTranslate'
})
export class ControllerPipe implements PipeTransform {

  transform(value: Observable<boolean>): Observable<string> {
    return value.pipe(map(item => item ? "включен" : "выключен"));
  }

}
