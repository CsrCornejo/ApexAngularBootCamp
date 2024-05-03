import { FormGroup, FormControl } from '@angular/forms';
import { ItemFormT } from '../../entities/item.type';

export type ItemFormGroupT = FormGroup<{
  id: FormControl<ItemFormT['id'] | null>;
  title: FormControl<ItemFormT['title'] | null>;
  // prices: Array<PriceT>;
  // photos: Array<PhotosT>;
  description: FormControl<ItemFormT['description'] | null>;
  offerDiscount?: FormControl<ItemFormT['offerDiscount'] | null>;
}>;
