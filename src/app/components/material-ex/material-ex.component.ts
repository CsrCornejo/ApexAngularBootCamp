import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { NombreDialogComponent } from '../nombre-dialog/nombre-dialog.component';

@Component({
  selector: 'app-material-ex',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './material-ex.component.html',
  styleUrl: './material-ex.component.sass',
})
export class MaterialExComponent {
  public name: string = '';
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(NombreDialogComponent, {
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}
