import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor() { }

  public persistentData: string = "I'm a variable inside a singleton.";
}
