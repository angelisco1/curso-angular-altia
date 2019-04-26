import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.css']
})
export class FormNormalComponent implements OnInit {

  datosForm = {
    nombre: 'Angel',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  guardar(miFormulario) {
    console.log(miFormulario);
  }
}
