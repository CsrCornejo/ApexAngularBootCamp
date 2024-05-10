import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'Apex Angular BootCamp';
  public appName: string = 'Final Exercise';

  public constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit() {
    this.document.title = `${this.title} - ${this.appName}`;
  }
}
