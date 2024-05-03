import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ItemFormT, PhotosT } from '../../entities/item.type';

export type PhotoFormControlT = FormControl<PhotosT>;

export type ItemFormGroupT = FormGroup<{
  id: FormControl<ItemFormT['id'] | null>;
  title: FormControl<ItemFormT['title']>;
  // prices: Array<PriceT>;
  photos: FormArray<PhotoFormControlT>;
  description: FormControl<ItemFormT['description']>;
  offerDiscount?: FormControl<ItemFormT['offerDiscount'] | null>;
}>;
