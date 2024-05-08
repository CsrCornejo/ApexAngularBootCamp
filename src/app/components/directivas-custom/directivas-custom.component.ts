import { Component } from '@angular/core';
import { CapitalizeDirective } from '../../directives/capitalize.directive';
@Component({
  selector: 'app-directivas-custom',
  standalone: true,
  imports: [CapitalizeDirective],
  templateUrl: './directivas-custom.component.html',
  styleUrl: './directivas-custom.component.sass'
})
export class DirectivasCustomComponent {

}
