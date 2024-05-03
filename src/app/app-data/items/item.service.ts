import { BehaviorSubject, combineLatest, map, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ItemT, ItemIdT } from '../../entities/item.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private itemsUrl: string = 'api/items';

  private itemSelectedSubject$$: Subject<ItemT['id']> = new Subject<
    ItemT['id']
  >();

  private itemsSubject$: BehaviorSubject<ItemT[]> = new BehaviorSubject<
    ItemT[]
  >([]);

  public itemsUpdated$: Subject<string> = new Subject<string>();

  private itemSelected$: Observable<ItemT['id']> =
    this.itemSelectedSubject$$.asObservable();

  public readonly items$: Observable<Array<ItemT>> =
    this.itemsSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.loadItems();
  }

  private loadItems(): void {
    this.http.get<ItemT[]>(this.itemsUrl).subscribe((items) => {
      this.itemsSubject$.next(items);
    });
  }

  public readonly itemsId$: Observable<Array<ItemIdT>> = this.items$.pipe(
    map(
      (items: Array<ItemT>): Array<ItemIdT> =>
        items.map(
          (item: ItemT): ItemIdT => ({
            id: item.id,
            title: item.title,
          }),
        ),
    ),
  );

  public readonly itemDetail$: Observable<ItemT> = combineLatest({
    items: this.items$,
    itemSelected: this.itemSelected$,
  }).pipe(
    map(
      ({
        items,
        itemSelected,
      }: {
        items: Array<ItemT>;
        itemSelected: ItemT['id'];
      }): ItemT => {
        return items.find(
          (item: ItemT): boolean => item.id === itemSelected,
        ) as ItemT;
      },
    ),
  );

  public selectItem(id: ItemT['id']): void {
    this.itemSelectedSubject$$.next(id);
  }

  public addItem(newItem: ItemT): void {
    const currentItems = this.itemsSubject$.getValue();
    const id = 'item' + (currentItems.length + 1);
    const newItemWithId = {
      id,
      ...newItem,
    };

    const updatedItems = [...currentItems, newItemWithId];
    this.itemsSubject$.next(updatedItems);
    this.itemsUpdated$.next(id);
  }
}
