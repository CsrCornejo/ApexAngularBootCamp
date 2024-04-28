import { Component } from '@angular/core';
import { CapitalizeDirectiveDirective } from '../../directives/capitalize-directive.directive';
@Component({
  selector: 'app-directivas-custom',
  standalone: true,
  imports: [CapitalizeDirectiveDirective],
  templateUrl: './directivas-custom.component.html',
  styleUrl: './directivas-custom.component.sass'
})
export class DirectivasCustomComponent {

}
