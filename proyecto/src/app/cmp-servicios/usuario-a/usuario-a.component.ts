import { Component, OnInit } from '@angular/core';
import { ChatService, IMsg } from '../chat.service';

@Component({
  selector: 'app-usuario-a',
  templateUrl: './usuario-a.component.html',
  styleUrls: ['./usuario-a.component.css']
})
export class UsuarioAComponent implements OnInit {
  mensajesChat: Array<IMsg> = [];

  constructor(private chatServ: ChatService) { }

  ngOnInit() {
    this.mensajesChat = this.chatServ.getChat();
  }

  enviar(msg) {
    const nuevoMsg: IMsg = {msg: msg, user: 'A'};
    this.chatServ.addMsg(nuevoMsg);
  }

}
