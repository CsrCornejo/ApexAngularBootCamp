import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-nombre-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './nombre-dialog.component.html',
  styleUrl: './nombre-dialog.component.sass'
})
export class NombreDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NombreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
