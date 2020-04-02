import { Pipe, PipeTransform } from '@angular/core';

/**
 * @description The pipe works so that there is an array given a certain number
 */

@Pipe({
  name: 'numberEach'
})
export class NumberEachPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const res = [];
    for (let i = 1; i <= value; i++) {
      res.push(i);
    }
    return res;
  }
}
