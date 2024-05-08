import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivasEstructuralesComponent } from "./components/directivas-estructurales/directivas-estructurales.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, DirectivasEstructuralesComponent]
})
export class AppComponent {
  title = 'ApexAngularBootCamp';
}
