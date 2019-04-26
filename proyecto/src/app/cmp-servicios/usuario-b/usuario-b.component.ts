import { Component, OnInit } from '@angular/core';
import { IMsg, ChatService } from '../chat.service';

@Component({
  selector: 'app-usuario-b',
  templateUrl: './usuario-b.component.html',
  styleUrls: ['./usuario-b.component.css']
})
export class UsuarioBComponent implements OnInit {
  mensajesChat: Array<IMsg> = [];
  mensajeRecibido: IMsg = {msg: '', user: ''};

  constructor(private chatServ: ChatService) { }

  ngOnInit() {
    this.mensajesChat = this.chatServ.getChat();
    this.chatServ.msgEmitido.subscribe((msg: IMsg) => {
      // Se ejecuta cuando se hace un msgEmitido.emit(...)
      this.mensajeRecibido = msg;
    })
  }

  enviar(msg) {
    const nuevoMsg: IMsg = {msg: msg, user: 'B'};
    this.chatServ.addMsg(nuevoMsg);
  }
}
