import { Pipe, PipeTransform } from '@angular/core';
import { ItemT } from '../app-data/items/item.type';

@Pipe({
  name: 'paginate',
  standalone: true
})
export class PaginatePipe implements PipeTransform {

  transform(items: ItemT[], pageNumber: number): ItemT[] {
    const itemsPerPage = 5;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.slice(startIndex, endIndex);
  }
}
