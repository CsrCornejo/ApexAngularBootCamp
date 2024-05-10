import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rounding',
  standalone: true
})
export class RoundingPipe implements PipeTransform {

  transform(price: number): number {
    const decimalPart: number = price % 1;
    if (!decimalPart || decimalPart === 0.5) {
      return price;
    }
    if (decimalPart < 0.5) {
      return Math.trunc(price) + 0.5;
    }

    return Math.ceil(price)
  }

}
