import { FormControl, FormGroup } from "@angular/forms";

export type PriceT = {
  [tag: string]: number
}

export type PhotosT = string;

export type ItemT = {
  id?: string;
  title: string;
  prices: PriceT;
  photos: Array<PhotosT>;
  description: string;
  offerDiscount?: number;
};

export type ItemIdT = Pick<ItemT, 'id' | 'title'>;
