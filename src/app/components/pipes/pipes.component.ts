import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CurrencyPipe, CapitalizePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.sass'
})
export class PipesComponent {
  public precio: number = 34.22;
  public msg: string = 'hello world';
}
