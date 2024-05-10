import { Component } from '@angular/core';
import { InyectedService } from '../../services/inyected-service.service';

@Component({
  selector: 'app-inyected-component',
  templateUrl: './inyected-component.component.html',
  styleUrl: './inyected-component.component.sass'
})
export class InyectedComponent {
  public inyectedServiceData: string[] = [];
  constructor(private inyectedService: InyectedService) {
    this.inyectedServiceData = this.inyectedService.inyectedData;
  }
}
