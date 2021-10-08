import { Component, OnInit } from '@angular/core';
import { Plan } from '../../interfaces/plan.interfaces';

@Component({
  selector: 'app-ver-plan',
  templateUrl: './ver-plan.component.html',
  styles: [
  ]
})
export class VerPlanComponent implements OnInit {

  plan!: Plan;

  constructor() { }

  ngOnInit(): void {
  }

}
