import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RESUME_FORM_LABELS } from './item-form.labels';
import { ItemFormGroupT } from './item-form.type';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgTemplateOutlet } from '@angular/common';
// import {
//   MatAccordion,
//   MatExpansionModule,
//   MatExpansionPanel,
// } from '@angular/material/expansion';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    NgTemplateOutlet,
  ],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.sass',
})
export class ItemFormComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected label: any = RESUME_FORM_LABELS;

  protected itemForm: ItemFormGroupT = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [
      Validators.required
      // Validators.pattern(/^[a-zA-Z0-9]+$/),
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
  });

  protected onSubmit(event: SubmitEvent, form: ItemFormGroupT): void {
    console.log('%c\nonSubmit', 'color: SpringGreen');
    console.log('event: %O', event);
    console.log('form: %O', form);
    console.log('this.itemForm: %O', this.itemForm);
    console.log(this.itemForm.value);
  }
}
