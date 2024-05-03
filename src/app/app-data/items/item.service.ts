import { combineLatest, map, Observable, Subject } from 'rxjs';
import { inject, Injectable } from '@angular/core';
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

  private itemSelected$: Observable<ItemT['id']> =
    this.itemSelectedSubject$$.asObservable();

  private http: HttpClient = inject(HttpClient);

  public readonly items$: Observable<Array<ItemT>> = this.http.get<
    Array<ItemT>
  >(this.itemsUrl);

  public readonly itemsId$: Observable<Array<ItemIdT>> = this.items$.pipe(
    map(
      (items: Array<ItemT>): Array<ItemIdT> =>
        items.map(
          (item: ItemT): ItemIdT => ({
            id: item.id,
            title: item.title,
          })
        )
    )
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
          (item: ItemT): boolean => item.id === itemSelected
        ) as ItemT;
      }
    )
  );

  public selectItem(id: ItemT['id']): void {
    this.itemSelectedSubject$$.next(id);
  }

  public addItem(newItem: ItemT): void {
    // Assuming items$ is an array of items
    this.items$.subscribe((items: ItemT[]) => {
        const id = 'item203';
        const newItemWithId = {
          ...newItem,
          id
        }
        items.push(newItemWithId);
    });
}
}
