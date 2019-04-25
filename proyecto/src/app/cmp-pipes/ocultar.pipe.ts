import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  // {{ "Un texto, un texto" | ocultar:["texto"] }} => "Un *, un *"
  transform(value: any, args?: any): any {
    let res = value;

    args.forEach((palabra) => {
      const reg = new RegExp(palabra, 'gi');
      res = res.replace(reg, '*'.repeat(palabra.length));
    });

    return res;
  }

}
