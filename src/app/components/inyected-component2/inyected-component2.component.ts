import { Component } from '@angular/core';
import { RootService } from '../../services/root-service.service';

@Component({
  selector: 'app-inyected-component2',
  templateUrl: './inyected-component2.component.html',
  styleUrl: './inyected-component2.component.sass'
})
export class Inyected2Component {
  public persistentData: string = '';
  constructor(private readonly rootService: RootService) {
    this.persistentData = this.rootService.persistentData;
  }
}
