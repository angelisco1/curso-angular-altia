import { Injectable } from '@angular/core';

export class TimeLogService {

  constructor() { }

  mostrar(msg: string): void {
    // console.log('MSG: ' + msg);
    console.log(`${new Date().toDateString()} MSG: ${msg}`);
  }

}

@Injectable({
  providedIn: 'root',
  useClass: TimeLogService
})
export class LogService {

  constructor() { }

  mostrar(msg: string): void {
    // console.log('MSG: ' + msg);
    console.log(`MSG: ${msg}`);
  }

}
