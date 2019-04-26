import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() meme: Meme;

  constructor(private memesService: MemesService) { }

  ngOnInit() {
  }

  cambiarMeme(event): void {
    this.meme[event.target.name] = event.target.value;
  }

  guardar(): void {
    this.memesService.addMeme(this.meme);
  }
}
