import { Pipe, PipeTransform } from '@angular/core';
import {map, Observable} from "rxjs";

@Pipe({
  name: 'windowTranslate'
})
export class WindowPipe implements PipeTransform {

  transform(value: Observable<boolean>): Observable<string> {
    return value.pipe(map(item => item ? "закрыто" : "открыто"));
  }

}
