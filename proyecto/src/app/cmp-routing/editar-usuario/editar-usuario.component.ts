import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from './editar.guard';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, ComponentCanDeactivate {
  datosGuardados = false;
  constructor() { }

  ngOnInit() {
  }

  canDeactivate() {
    if (this.datosGuardados) {
      return true;
    }
    return confirm('Quieres salir? Perderas los datos');
  }

  guardar() {
    this.datosGuardados = !this.datosGuardados;
    console.log('Datos guardados?: ' + this.datosGuardados);
  }

}
