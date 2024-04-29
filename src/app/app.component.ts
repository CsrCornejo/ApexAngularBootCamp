import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesComponent } from "./components/pipes/pipes.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, PipesComponent]
})
export class AppComponent {
  title = 'ApexAngularBootCamp';
}
