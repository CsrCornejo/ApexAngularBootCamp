import { Component } from '@angular/core';
import { RootServiceService } from '../../services/root-service.service';

@Component({
  selector: 'app-inyected-component2',
  templateUrl: './inyected-component2.component.html',
  styleUrl: './inyected-component2.component.sass'
})
export class InyectedComponent2Component {
  public persistentData: string = '';
  constructor(private readonly rootService: RootServiceService) {
    this.persistentData = this.rootService.persistentData;
  }
}
