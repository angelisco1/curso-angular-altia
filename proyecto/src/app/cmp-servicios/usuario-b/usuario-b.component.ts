import { Component, OnInit } from '@angular/core';
import { IMsg, ChatService } from '../chat.service';

@Component({
  selector: 'app-usuario-b',
  templateUrl: './usuario-b.component.html',
  styleUrls: ['./usuario-b.component.css']
})
export class UsuarioBComponent implements OnInit {
  mensajesChat: Array<IMsg> = [];

  constructor(private chatServ: ChatService) { }

  ngOnInit() {
    this.mensajesChat = this.chatServ.getChat();
  }

  enviar(msg) {
    const nuevoMsg: IMsg = {msg: msg, user: 'B'};
    this.chatServ.addMsg(nuevoMsg);
  }
}
