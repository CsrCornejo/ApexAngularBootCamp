import { ItemData } from './items/item.data';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ItemT } from './items/item.type';

export class AppData implements InMemoryDbService {
  public createDb(): { items: Array<ItemT> } {
    const items: Array<ItemT> = ItemData.items;

    return { items };
  }
}
