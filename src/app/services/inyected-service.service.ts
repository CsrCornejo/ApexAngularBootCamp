import { Injectable } from '@angular/core';

@Injectable()
export class InyectedService {

  constructor() { }

  public inyectedData: string[] = ['one', 'two'];
}
