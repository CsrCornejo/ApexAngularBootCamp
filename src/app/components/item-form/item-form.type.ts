import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { PriceT, PhotosT } from '../../entities/item.type';

export type PriceFormT = {
  tag: string;
  price: number;
};

export type ItemFormT = {
  id: string;
  title: string;
  prices: Array<PriceT>;
  photos: Array<PhotosT>;
  description: string;
  offerDiscount: number;
};

export type PhotoFormControlT = FormControl<PhotosT>;
export type PriceFormGroupT = FormGroup<{
  tag: FormControl<PriceFormT['tag']>;
  price: FormControl<PriceFormT['price']>;
}>;

export type ItemFormGroupT = FormGroup<{
  title: FormControl<ItemFormT['title']>;
  prices: FormArray<PriceFormGroupT>;
  photos: FormArray<PhotoFormControlT>;
  description: FormControl<ItemFormT['description']>;
  offerDiscount: FormControl<ItemFormT['offerDiscount'] | null>;
}>;
