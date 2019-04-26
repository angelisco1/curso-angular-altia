import { Injectable } from '@angular/core';
import { LogService } from './log.service';

export interface IMsg {
  msg: string,
  user: string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chat: Array<IMsg> = [
    {msg: 'Hola Usuario B', user: 'A'},
    {msg: 'Hola A, que tal?', user: 'B'},
  ];

  constructor(private logServ: LogService) { }

  getChat(): Array<IMsg> {
    return this.chat;
  }

  addMsg(msg: IMsg): void {
    this.chat.push(msg);
    this.logServ.mostrar('Nuevo mensaje...')
  }

}
