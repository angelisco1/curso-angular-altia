import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ITarea {
  nombre: string,
  completada: boolean
};

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  URL: string = 'https://todo-list-603ba.firebaseio.com/tasks';

  constructor(private http: HttpClient) { }

  getTareas(): Observable<any> {
    return this.http.get(`${this.URL}.json`)
      .pipe(
        map(tareas => {
          let arTareas = [];
          for (let id in tareas) {
            arTareas.push(Object.assign({}, {id: id}, tareas[id]));
          }
          return arTareas;
        })
      );
  }

  addTarea(tarea: ITarea) {
    return this.http.post(`${this.URL}.json`, tarea);
  }

  deleteTarea(id: string) {
    return this.http.delete(`${this.URL}/${id}.json`);
  }

  updateTarea(id: string, tareaActualizada: ITarea) {
    return this.http.put(`${this.URL}/${id}.json`, tareaActualizada);
  }
}
