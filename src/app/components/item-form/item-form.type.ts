import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { PriceT, PhotosT } from '../../entities/item.type';

export type ItemFormT = {
  id: string;
  title: string;
  prices: Array<PriceT>;
  photos: Array<PhotosT>;
  description: string;
  offerDiscount: number;
};

export type PhotoFormControlT = FormControl<PhotosT>;

export type ItemFormGroupT = FormGroup<{
  title: FormControl<ItemFormT['title']>;
  // prices: Array<PriceT>;
  photos: FormArray<PhotoFormControlT>;
  description: FormControl<ItemFormT['description']>;
  offerDiscount: FormControl<ItemFormT['offerDiscount'] | null>;
}>;
