import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  URL: string = 'https://todo-list-603ba.firebaseio.com/tasks';
  constructor() { }
}
