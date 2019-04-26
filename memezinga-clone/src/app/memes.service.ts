import { Injectable } from '@angular/core';
import { Meme } from './meme';

@Injectable({
  providedIn: 'root'
})
export class MemesService {
  private listaMemes: Array<Meme> = [];

  constructor() { }

  getMemes(): Array<Meme> {
    return this.listaMemes;
  }

  addMeme(meme: Meme): void {
    const nuevoMeme = Object.assign({}, meme);
    this.listaMemes.push(nuevoMeme);
  }
}
