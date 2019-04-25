import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {
  transform(value: number, arg1?: number, arg2?: number): number {
    let res = value * 2;
    if (arg1) {
      res += arg1;
    }
    if (arg2) {
      res -= arg2;
    }
    return res;
  }
}



// [1, 2, 3].forEach(() => {});
// [1, 2, 3].forEach(num => {});
// [1, 2, 3].forEach((num) => {});
// [1, 2, 3].forEach((num, pos) => {});

// [1, 2, 3].forEach((num, pos) => num*pos);
// [1, 2, 3].forEach((num, pos) => {
//   return num*pos
// });
