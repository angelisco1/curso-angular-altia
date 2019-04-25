import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {
  @Input() nombre: string = 'Angel';
  @Input() modoEdicion: boolean = false;
  @Output() miEvento = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(event) {
    // console.log(event);
    this.nombre = event.target.value;
    this.miEvento.emit('Nombre cambiado!');
  }

  cambiarNombreRef(refInput) {
    // console.dir(refInput);
    this.nombre = refInput.value;
  }

  cambiarModoEdicion() {
    this.modoEdicion = !this.modoEdicion;
  }

}
