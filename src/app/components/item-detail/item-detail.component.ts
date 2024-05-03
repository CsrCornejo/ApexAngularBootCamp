import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemT } from '../../entities/item.type';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemsService } from '../../app-data/items/item.service';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RoundingPipe } from '../../pipes/rounding.pipe';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    RoundingPipe,
  ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.sass',
})
export class ItemDetailComponent implements AfterViewInit {
  protected readonly titleLabel: string = 'Item details';
  protected readonly loadingLabel: string = 'Loading item...';

  protected itemDetail$: Observable<ItemT> = this.itemsService.itemDetail$;

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly itemsService: ItemsService,
  ) {}

  public ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.itemsService.selectItem(params['id']);
    });
  }
}
