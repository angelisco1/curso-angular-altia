import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css']
})
export class CmpServiciosComponent implements OnInit {

  constructor(private logServ: LogService) { }

  ngOnInit() {
  }

  mostrarMsg() {
    this.logServ.mostrar('Hola mundo!');
  }

}
