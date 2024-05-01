import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'ApexAngularBootCamp';
  public appName: string = 'Final Exercise';

  private http: HttpClient = inject(HttpClient);

  ngOnInit() {
    this.http.get('/api/items').subscribe((data) => {
      console.log(data);
    });
  }
}
