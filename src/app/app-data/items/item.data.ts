import { ItemT } from './item.type';

export class ItemData {
  public static items: Array<ItemT> = [
    {
      id: 'item1',
      title: 'Marco para fotos',
      prices: {
        '20x20': 15.0,
        '20x30': 18.45,
      },
      photos: [
        "https://api.slingacademy.com/public/sample-photos/2.jpeg",
        "https://api.slingacademy.com/public/sample-photos/4.jpeg"
      ],
      description: 'Much technology how within rather him lay why part actually system increase feel.',
    },
    {
      id: 'item2',
      title: 'Table husband',
      prices: {
        '20x20': 15.2,
        '20x30': 20.1,
      },
      photos: [
        "https://api.slingacademy.com/public/sample-photos/1.jpeg"
      ],
      description: 'Skill drug college contain herself future seat human yes approach how then maybe public summer play commercial anything woman include million body measure government clearly question quickly parent.',
    },
    {
      id: 'item3',
      title: 'Support audience model program three music',
      prices: {
        '1x20': 112.2,
        '10x40': 0.1,
      },
      photos: [
        "https://api.slingacademy.com/public/sample-photos/3.jpeg"
      ],
      description: 'World early north TV around meet goal across reason responsibility have must build up some language soon.',
    },
    {
      id: 'item4',
      title: 'Per nature research',
      prices: {
        'small': 3.423,
        'medium': 8.6,
        'large': 10.21,
      },
      photos: [
        "https://api.slingacademy.com/public/sample-photos/10.jpeg",
        "https://api.slingacademy.com/public/sample-photos/9.jpeg",
        "https://api.slingacademy.com/public/sample-photos/2.jpeg"
      ],
      description: 'Nature focus wonder behind magazine pattern degree far without tree consider.',
    },
    
  ];
}
