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
import {
  ItemFormGroupT,
  PhotoFormControlT,
  PriceFormGroupT,
} from './item-form.type';
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
  private sentenceTagValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.pattern(/^[A-Za-z0-9]+$/),
  ];

  protected validatePercentage(
    control: AbstractControl,
  ): ValidationErrors | null {
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
    prices: new FormArray([this.getNewPrice()], Validators.minLength(1)),
  });

  private getNewPhoto(): PhotoFormControlT {
    return new FormControl('http://', {
      nonNullable: true,
      validators: this.sentenceUrlValidators,
    });
  }
  private getNewPrice(): PriceFormGroupT {
    return new FormGroup({
      tag: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceTagValidators,
      }),
      price: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)],
      }),
    });
  }
  protected addPhoto(): void {
    this.itemForm.controls.photos.push(this.getNewPhoto());
  }
  protected addPrice(): void {
    this.itemForm.controls.prices.push(this.getNewPrice());
  }

  protected removePhoto(skillIndex: number): void {
    if (this.itemForm.controls.photos.length > 1) {
      this.itemForm.controls.photos.removeAt(skillIndex);
    }
  }

  protected removePrice(capabilityIndex: number): void {
    if (this.itemForm.controls.prices.controls.length > 1) {
      this.itemForm.controls.prices.removeAt(capabilityIndex);
    }
  }

  public constructor(
    private readonly itemsService: ItemsService,
    private router: Router,
  ) {}
  ngOnDestroy(): void {
    this.itemsUpdatedSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.itemsUpdatedSubscription = this.itemsService.itemsUpdated$.subscribe(
      (e) => {
        this.router.navigate(['/items', e]);
      },
    );
  }

  // This removes the attributes that have null values
  // Ex if the offerDiscount: null, it will not be included so the object has the expected type for the service
  // offerDiscount service type is optional or number, cannot be null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private cleanEmpty(obj: any): any {
    if (Array.isArray(obj)) {
      return obj
        .map((v) => (v && typeof v === 'object' ? this.cleanEmpty(v) : v))
        .filter((v) => !(v == null));
    } else {
      return Object.entries(obj)
        .map(([k, v]) => [
          k,
          v && typeof v === 'object' ? this.cleanEmpty(v) : v,
        ])
        .reduce((a, [k, v]) => (v == null ? a : { ...a, [k]: v }), {});
    }
  }

  private arrayToObject(arr: { tag: string; price: number }[]) {
    const pricesObject: { [tag: string]: number } = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arr.forEach((item: { tag: string; price: number }) => {
      pricesObject[item.tag] = item.price;
    });
    return pricesObject;
  }

  protected onSubmit(): void {
    // console.log('%c\nonSubmit', 'color: SpringGreen');
    // console.log('event: %O', event);
    // console.log('form: %O', form);
    // console.log('this.itemForm: %O', this.itemForm);
    console.log('this.itemForm value: %O', this.itemForm.value);
    const cleanedObj = this.cleanEmpty(this.itemForm.value);

    const priceArray = cleanedObj.prices;
    const pricesObj = this.arrayToObject(priceArray);

    const finalObj = {
      ...cleanedObj,
      prices: pricesObj,
    };
    this.itemsService.addItem(finalObj);
  }
}
