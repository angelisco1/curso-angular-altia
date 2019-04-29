import { Component, OnInit } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  tareas = [];
  constructor(private tareasServ: TareasService) { }

  ngOnInit() {
    this.tareasServ.getTareas().subscribe(tareas => {
      console.log(tareas);
      this.tareas = tareas;
    })
  }

  guardar(nombre: string): void {
    this.tareasServ.addTarea({nombre: nombre, completada: false}).subscribe((resp: any) => console.log('Id de la tarea: ' + resp.name));
  }

  eliminar(id: string) {
    this.tareasServ.deleteTarea(id).subscribe((resp) => {
      console.log(resp);
    });
  }

  actualizar(id: string) {
    this.tareasServ.updateTarea(id, {nombre: 'Tarea actualizada', completada: true}).subscribe((resp) => {
      // Aquí hacemos algo
      console.log(resp);
    });
  }

}
