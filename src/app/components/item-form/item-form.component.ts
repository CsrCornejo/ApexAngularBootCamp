import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
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
export class ItemFormComponent implements OnInit, OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected label: any = RESUME_FORM_LABELS;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private itemsUpdatedSubscription: any;

  private sentenceValidators: Array<ValidatorFn> = [Validators.required];

  private sentenceUrlValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.pattern(
      '^(https?|ftp)://[\\w.-]+(\\.[\\w.-]+)+([/?#][\\w\\.-]*)*$',
    ),
  ];

  protected validatePercentage(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const isValid = /^\d{1,2}$/.test(value); // Matches 1 or 2 digits
  
    return isValid ? null : { invalidPercentage: true };
  }

  protected itemForm: ItemFormGroupT = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: this.sentenceValidators,
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: this.sentenceValidators,
    }),
    offerDiscount: new FormControl(0, [this.validatePercentage]),
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
  ngOnDestroy(): void {
    this.itemsUpdatedSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.itemsUpdatedSubscription = this.itemsService.itemsUpdated$.subscribe((e) => {
      this.router.navigate(['/items', e]);
    });
  }

  // This removes the attributes that have null values
  // Ex if the offerDiscount: null, it will not be included so the object has the expected type for the service
  // offerDiscount service type is optional or number, cannot be null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private cleanEmpty(obj: any): any {
    if (Array.isArray(obj)) {
      return obj
        .map((v) => (v && typeof v === 'object') ? this.cleanEmpty(v) : v)
        .filter((v) => !(v == null));
    } else {
      return Object.entries(obj)
        .map(([k, v]) => [k, v && typeof v === 'object' ? this.cleanEmpty(v) : v])
        .reduce((a, [k, v]) => (v == null ? a : { ...a, [k]: v }), {});
    }
  }

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
      offerDiscount: 22,
    };
    const cleanedObj = this.cleanEmpty(exampleItem);
    console.log(cleanedObj);
    this.itemsService.addItem(cleanedObj);
  }
}
