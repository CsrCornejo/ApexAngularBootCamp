import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-de-atributo',
  standalone: true,
  imports: [],
  templateUrl: './directivas-de-atributo.component.html',
  styleUrl: './directivas-de-atributo.component.sass',
})
export class DirectivasDeAtributoComponent {
  public active: boolean = false;

  toggleActive() {
    this.active = !this.active;
  }

  get redTextStyle(): { [key: string]: string } {
    return { color: this.active ? 'red' : 'black' };
  }
}
