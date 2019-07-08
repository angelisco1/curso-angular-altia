import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-tabla-cmp',
  templateUrl: './tabla-cmp.component.html',
  styleUrls: ['./tabla-cmp.component.scss']
})
export class TablaCmpComponent implements OnInit {
  personas = [
    { id: '1', nombre: 'Angel', apellidos: 'Villalba' },
    { id: '2', nombre: 'Bud', apellidos: 'Spencer' },
    { id: '3', nombre: 'Charly', apellidos: 'Falco' },
    { id: '4', nombre: 'Json', apellidos: 'Statham' },
  ]
  datos = null;
  columnasAPintar = ['id', 'nombre'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  mostrar(dato) {
    alert(JSON.stringify(dato));
  }

  constructor() { }

  ngOnInit() {
    fetch('URL')
      .then(resp => resp.json())
      .then(datos => {
        this.datos = new MatTableDataSource(this.personas)
        this.datos.paginator = this.paginator;
        this.datos.sort = this.sort;
      })
  }

  filtrar(val) {
    this.datos.filter = val.trim();
  }

}
