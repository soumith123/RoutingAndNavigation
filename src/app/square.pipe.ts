import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  // a pipe to perform square operation
  transform(value: number, ...args: unknown[]): number {
    return value*value;
  }

}
