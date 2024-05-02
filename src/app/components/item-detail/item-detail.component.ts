import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemT } from '../../app-data/items/item.type';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemsService } from '../../app-data/items/item.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.sass'
})
export class ItemDetailComponent implements AfterViewInit {
  protected itemDetail$: Observable<ItemT> = this.itemsService.itemDetail$;

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly itemsService: ItemsService
  ) {}

  public ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.itemsService.selectItem(params['id']);
    });
  }
}
