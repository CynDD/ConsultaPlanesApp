import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListaPlanesComponent } from './pages/lista-planes/lista-planes.component';
import { VerPlanComponent } from './pages/ver-plan/ver-plan.component';
import { BuscadorPlanesComponent } from './pages/buscador-planes/buscador-planes.component';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [
    ListaPlanesComponent,
    VerPlanComponent,
    BuscadorPlanesComponent
  ],
  exports: [
    ListaPlanesComponent,
    VerPlanComponent,
    BuscadorPlanesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PlanModule { }
