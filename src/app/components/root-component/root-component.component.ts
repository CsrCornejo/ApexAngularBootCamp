import { Component } from '@angular/core';
import { RootServiceService } from '../../services/root-service.service';

@Component({
  selector: 'app-root-component',
  standalone: true,
  imports: [],
  templateUrl: './root-component.component.html',
  styleUrl: './root-component.component.sass',
})
export class RootComponentComponent {
  public persistentData: string = '';
  constructor(private readonly rootService: RootServiceService) {
    this.persistentData = this.rootService.persistentData;
  }
}
