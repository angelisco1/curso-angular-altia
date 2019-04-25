import { Directive, HostListener, HostBinding, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPintarFondo]'
})
export class PintarFondoDirective implements OnInit {
  @Input('appPintarFondo') colorFondo: string;
  @HostBinding('style.backgroundColor') color: string;

  constructor(private element: ElementRef) {
    console.log(this.color);
    console.log(this.colorFondo);
    // element.nativeElement.style.backgroundColor = this.colorFondo;
  }

  ngOnInit() {
    this.colorFondo = this.colorFondo ? this.colorFondo : 'yellowgreen';
  }

  @HostListener('mouseover') onMouseOver() {
    this.color = this.colorFondo;
  }

  @HostListener('mouseout') onMouseOut() {
    this.color = 'white';
  }
}
