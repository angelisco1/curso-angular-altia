import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs-cmp',
  templateUrl: './inputs-cmp.component.html',
  styleUrls: ['./inputs-cmp.component.scss']
})
export class InputsCmpComponent implements OnInit {
  nombre = new FormControl('Angel', Validators.required);
  constructor() { }

  ngOnInit() {
  }

}
