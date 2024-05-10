import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.sass'
})
export class NotFoundComponent {
  protected titleLabel: string = 'Not Found';
  protected contentLabel: string =
    'The path you are looking for does not exist';

  protected actionButtonLabel: string = 'Go Items List';
}
