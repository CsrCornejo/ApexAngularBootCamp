import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, DataBindingComponent]
})
export class AppComponent {
  title = 'ApexAngularBootCamp';
}
