import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifLastItem',
  standalone: true,
})
export class IfLastItemPipe implements PipeTransform {
  transform(value: number): boolean {
    return value !== 0;
  }
}
