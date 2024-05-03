import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RESUME_FORM_LABELS } from './item-form.labels';
import { ItemFormGroupT, PhotoFormControlT } from './item-form.type';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgTemplateOutlet } from '@angular/common';
import { ItemsService } from '../../app-data/items/item.service';
import { Router } from '@angular/router';
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

  private sentenceValidators: Array<ValidatorFn> = [Validators.required];

  private sentenceUrlValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.pattern(
      '^(https?|ftp)://[\\w.-]+(\\.[\\w.-]+)+([/?#][\\w\\.-]*)*$',
    ),
  ];

  protected itemForm: ItemFormGroupT = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', {
      nonNullable: true,
      validators: this.sentenceValidators,
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: this.sentenceValidators,
    }),
    photos: new FormArray([this.getNewPhoto()], Validators.minLength(1)),
  });

  private getNewPhoto(): PhotoFormControlT {
    return new FormControl('http://', {
      nonNullable: true,
      validators: this.sentenceUrlValidators,
    });
  }
  protected addPhoto(): void {
    this.itemForm.controls.photos.push(this.getNewPhoto());
  }

  protected removePhoto(skillIndex: number): void {
    if (this.itemForm.controls.photos.length > 1) {
      this.itemForm.controls.photos.removeAt(skillIndex);
    }
  }

  public constructor(
    private readonly itemsService: ItemsService,
    private router: Router
  ) {}

  protected onSubmit(event: SubmitEvent, form: ItemFormGroupT): void {
    console.log('%c\nonSubmit', 'color: SpringGreen');
    console.log('event: %O', event);
    console.log('form: %O', form);
    console.log('this.itemForm: %O', this.itemForm);
    console.log(this.itemForm.value);
    const exampleItem = {
      title: 'Song of the day past',
      prices: {
        'Eng': 50.12,
        'Esp': 50.12,
        'Tuk': 50.12,
      },
      photos: [
        "https://api.slingacademy.com/public/sample-photos/2.jpeg",
        "https://api.slingacademy.com/public/sample-photos/2.jpeg",
        "https://api.slingacademy.com/public/sample-photos/2.jpeg",
      ],
      description: 'Song in different languages perfect for education.',
      offerDiscount: 20,
    };
    this.itemsService.addItem(exampleItem);
    this.router.navigate(['/', 'items']);
  }
}
