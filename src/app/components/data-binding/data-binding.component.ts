import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.sass',
})
export class DataBindingComponent {
  public oneWayText: string = 'Hello World';
  triggerEvent() {
    alert('I was triggered by an event');
  }
}
