export type ItemT = {
  id: string;
  title: string;
  prices: { [tag: string]: number };
  photos: string[];
  description: string;
  offerDiscount?: number;
};

export type ItemIdT = Pick<ItemT, 'id' | 'title'>;
