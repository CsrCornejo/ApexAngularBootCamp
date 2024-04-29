import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  constructor() { }

  public persistentData: string = "I'm a variable inside a singleton.";
}
