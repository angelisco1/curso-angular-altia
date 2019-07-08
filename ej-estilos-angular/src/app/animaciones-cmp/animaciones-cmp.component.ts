import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animaciones-cmp',
  templateUrl: './animaciones-cmp.component.html',
  styleUrls: ['./animaciones-cmp.component.scss'],
  animations: [
    trigger('zoom', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('zoom', style({
        transform: 'scale(1.3)'
      })),
      state('inicial', style({
        transform: 'scale(0)'
      })),
      // transition('normal => zoom', animate(1000)),
      // transition('zoom => normal', animate(500))
      // transition('zoom <=> normal', animate(300))
      transition('* => *', animate(300)),
      transition('void => inicial', animate(200))
    ]),
    trigger('colorear', [
      state('color1', style({
        backgroundColor: 'red'
      })),
      state('color2', style({
        backgroundColor: 'blue'
      })),
      transition('color1 => color2', animate(1000, keyframes([
        style({
          backgroundColor: 'yellow',
          transform: 'rotate(360deg)',
          offset: 0.2
        }),
        style({ backgroundColor: 'red', offset: 0.25 }),
        style({ backgroundColor: 'black', offset: 0.5 }),
        style({ backgroundColor: 'white',offset: 0.6 }),
        style({
          backgroundColor: 'orange',
          transform: 'rotate(360deg)',
          offset: 0.9
        }),
      ])))
    ]),
  ]
})
export class AnimacionesCmpComponent implements OnInit {
  zoomImg: string;
  stateColor: string = 'color1';
  constructor() { }

  ngOnInit() {
    this.zoomImg = 'inicial';
    setTimeout(() => {
      this.zoomImg = 'normal';
    }, 300);
  }

  cambiarZoom() {
    this.zoomImg = this.zoomImg === 'normal' ? 'zoom' : 'normal';
    this.stateColor = this.stateColor === 'color1' ? 'color2' : 'color1';
  }

}
