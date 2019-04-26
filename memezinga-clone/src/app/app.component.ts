import { Component } from '@angular/core';
import { Meme } from './meme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  meme: Meme = new Meme('Arriba', 'Abajo', '#ffffff', 'https://i.imgflip.com/12dxv.jpg', '0');
}
