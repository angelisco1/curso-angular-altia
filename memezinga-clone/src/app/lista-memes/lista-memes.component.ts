import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-lista-memes',
  templateUrl: './lista-memes.component.html',
  styleUrls: ['./lista-memes.component.css']
})
export class ListaMemesComponent implements OnInit {
  memes: Array<Meme> = [];

  constructor(private memesService: MemesService) { }

  ngOnInit() {
    this.memes = this.memesService.getMemes();
  }

}
