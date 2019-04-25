import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDesplegar]'
})
export class DesplegarDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.children[1].classList.remove('oculto');
  }

  @HostListener('mouseout') onMouseOut() {
    this.element.nativeElement.children[1].classList.add('oculto');
  }

}
