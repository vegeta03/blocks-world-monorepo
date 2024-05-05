import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifLastItem',
  standalone: true,
})
export class IfLastItemPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
