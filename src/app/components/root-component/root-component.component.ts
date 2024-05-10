import { Component } from '@angular/core';
import { RootService } from '../../services/root-service.service';

@Component({
  selector: 'app-root-component',
  standalone: true,
  imports: [],
  templateUrl: './root-component.component.html',
  styleUrl: './root-component.component.sass',
})
export class RootComponent {
  public persistentData: string = '';
  constructor(private readonly rootService: RootService) {
    this.persistentData = this.rootService.persistentData;
  }
}
