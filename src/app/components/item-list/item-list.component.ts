import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { combineLatest, map, Observable, startWith, Subject } from 'rxjs';
import { ItemT } from '../../app-data/items/item.type';
import { ItemsService } from '../../app-data/items/item.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.sass',
})
export class ItemListComponent {
  protected readonly titleLabel: string = 'Items List';
  protected readonly contentLabel: string = 'Available items on the catalog';
  protected readonly listTitleLabel: string = 'Items';
  private items$: Observable<Array<ItemT>> = this.itemsService.items$;

  public constructor(private readonly itemsService: ItemsService) {}

  protected filterValue: string = '';
  protected readonly filterLabel: string = 'Filter items...';
  protected readonly noItemsLabel: string = 'No items to show';

  private readonly filterSubject$$: Subject<string> = new Subject<string>();
  private readonly filter$: Observable<string> =
    this.filterSubject$$.asObservable();
  protected filteredItems$: Observable<Array<ItemT>> = combineLatest(
    this.items$,
    this.filter$.pipe(startWith('')),
  ).pipe(
    map(([items, filter]: [Array<ItemT>, string]): Array<ItemT> => {
      filter = filter.toLowerCase();
      return items.filter((item: ItemT): boolean =>
        item.title.toLowerCase().includes(filter),
      );
    }),
  );

  protected filterChangeHandler(event: string): void {
    this.filterSubject$$.next(event);
  }

  protected getSamplePrice(prices: { [tag: string]: number; }) {
    return Object.values(prices)[0];
  }
  test() {
    throw new Error('Method not implemented.');
    }
}
