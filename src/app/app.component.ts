import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootComponentComponent } from "./components/root-component/root-component.component";
import { InyectedModuleModule } from './modules/inyected-module/inyected-module.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, RootComponentComponent, InyectedModuleModule]
})
export class AppComponent {
  title = 'ApexAngularBootCamp';
}
