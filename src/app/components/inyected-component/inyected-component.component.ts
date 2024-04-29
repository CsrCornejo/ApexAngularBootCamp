import { Component } from '@angular/core';
import { InyectedServiceService } from '../../services/inyected-service.service';

@Component({
  selector: 'app-inyected-component',
  templateUrl: './inyected-component.component.html',
  styleUrl: './inyected-component.component.sass'
})
export class InyectedComponentComponent {
  public inyectedServiceData: string[] = [];
  constructor(private inyectedService: InyectedServiceService) {
    this.inyectedServiceData = this.inyectedService.inyectedData;
  }
}
