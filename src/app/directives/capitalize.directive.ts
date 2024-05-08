import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[capitalize]',
  standalone: true
})
export class CapitalizeDirective implements AfterViewInit {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const text = this.eleRef.nativeElement.textContent;
    const capitalizedText = text.split(' ').map((word: string) => word[0].toUpperCase() + word.substring(1)).join(' ');
    this.renderer.setProperty(this.eleRef.nativeElement, 'textContent', capitalizedText);
  }

}
