import { Component, Input, OnInit } from '@angular/core';
import { Plan } from '../../interfaces/plan.interfaces';

@Component({
  selector: 'app-lista-planes',
  templateUrl: './lista-planes.component.html',
  styles: [
  ]
})
export class ListaPlanesComponent implements OnInit {

  @Input() planes: Plan[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
