import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  starks = ['Arya', 'Rickon', 'Robb', 'Sansa'];

  personaje = {
    nombre: 'Ramsay',
    apellido: 'Bolton'
  }

  mostrar = true;

  constructor() { }

  ngOnInit() {
  }

  getClases() {
    return {
      letraAmarilla: this.mostrar,
      subrayado: this.mostrar
    };
  }

}
