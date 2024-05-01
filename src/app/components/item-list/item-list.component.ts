import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ItemT } from '../../app-data/items/item.type';
import { ItemsService } from '../../app-data/items/item.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.sass',
})
export class ItemListComponent {
  protected titleLabel: string = 'Items List';
  protected contentLabel: string = 'Available items on the catalog';
  protected listTitleLabel: string = 'Items';
  protected items$: Observable<Array<ItemT>> = this.itemsService.items$;

  public constructor(
    private readonly itemsService: ItemsService,
  ) {}
}
