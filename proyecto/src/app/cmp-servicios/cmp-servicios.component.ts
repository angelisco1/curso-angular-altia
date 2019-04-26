import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { ChatService, IMsg } from './chat.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css']
})
export class CmpServiciosComponent implements OnInit {
  mensajeRecibido: IMsg = {msg: '', user: ''};

  constructor(private logServ: LogService, private chatServ: ChatService) { }

  ngOnInit() {
    this.chatServ.msgEmitido.subscribe((msg: IMsg) => {
      // Se ejecuta cuando se hace un msgEmitido.emit(...)
      this.mensajeRecibido = msg;
    })
  }

  mostrarMsg() {
    this.logServ.mostrar('Hola mundo!');
  }

}
