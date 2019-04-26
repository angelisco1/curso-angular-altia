import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {
  miFormulario: FormGroup;
  constructor(private formBuild: FormBuilder) { }

  ngOnInit() {
    this.miFormulario = this.formBuild.group({
      nombre: this.formBuild.control('Angel', [Validators.required, Validators.minLength(3), this.nombreValido(['arya', 'rickon', 'bran', 'robb', 'sansa', 'jon'])]),
      email: this.formBuild.control('', Validators.required),
      password: this.formBuild.control('', Validators.required),
      skills: this.formBuild.array([
        this.formBuild.control('JavaScript'),
        this.formBuild.control('Angular'),
      ])
    });
  }

  guardar() {
    console.log(this.miFormulario);
  }

  // nombreValido(campo: FormControl) {
  //   const nombresValidos = ['arya', 'rickon', 'bran', 'robb', 'sansa', 'jon'];
  //   if (nombresValidos.includes(campo.value.trim().toLowerCase())) {
  //     // Es valido si devolvemos null
  //     return null;
  //   }
  //   // Es invalido devolviendo cualquier cosa que no sea null
  //   return {
  //     nombreValido: false
  //   }
  // }

  nombreValido(nombresValidos: Array<string>) {
    return function(campo: FormControl) {
      if (nombresValidos.includes(campo.value.trim().toLowerCase())) {
        // Es valido si devolvemos null
        return null;
      }
      // Es invalido devolviendo cualquier cosa que no sea null
      return {
        nombreValido: false
      }
    }
  }
}