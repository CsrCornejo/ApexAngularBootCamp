import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true
})
export class CapitalizeDirectiveDirective {

  constructor(private eleRef: ElementRef) { 
    eleRef.nativeElement.style.textTransform = 'capitalize';
   }

}
