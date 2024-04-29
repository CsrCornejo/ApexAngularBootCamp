import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {

}
