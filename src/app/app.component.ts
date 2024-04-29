import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SimpleComponent } from './components/simple/simple.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ApexAngularBootCamp';
}
