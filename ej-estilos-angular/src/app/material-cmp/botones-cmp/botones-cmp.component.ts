import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones-cmp',
  templateUrl: './botones-cmp.component.html',
  styleUrls: ['./botones-cmp.component.scss']
})
export class BotonesCmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarMsg(msg) {
    console.log(msg);
  }

}
