import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootComponent } from "./components/root-component/root-component.component";
import { InyectedModule } from './modules/inyected-module/inyected-module.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, RootComponent, InyectedModule]
})
export class AppComponent {
  title = 'ApexAngularBootCamp';
}
