import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLastItem',
  standalone: true,
})
export class IsLastItemPipe implements PipeTransform {
  transform(value: number): boolean {
    return value !== 0;
  }
}
