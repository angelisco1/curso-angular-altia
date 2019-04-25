import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  texto: string = "Hola mundo!";
  mensaje: string = 'Minions ipsum gato tatata bala tu hahaha underweaaar poopayee belloo! Butt. Underweaaar potatoooo butt butt me want bananaaa! Bananaaaa canario bananaaaa hana dul sae bappleees pez. Poopayee ti aamoo!';
  precio: number = 4;
  fecha: Date = new Date();
  mascotas: Array<string> = ['Canario', 'Pez', 'Perro', 'Gato'];

  mensajeAsinc = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('El canario está en la jaula...');
    }, 2000);
  });


  constructor() { }

  ngOnInit() {
  }

}
