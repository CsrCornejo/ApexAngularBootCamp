import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialExComponent } from "./components/material-ex/material-ex.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, MaterialExComponent]
})
export class AppComponent {
  title = 'ApexAngularBootCamp';
}
