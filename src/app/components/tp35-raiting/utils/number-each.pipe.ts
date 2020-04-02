import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberEach'
})
export class NumberEachPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('transform', value);
    const res = [];
    for (let i = 1; i <= value; i++) {
      res.push(i);
    }
    console.log('respuesta', res);
    return res;

  }
}
