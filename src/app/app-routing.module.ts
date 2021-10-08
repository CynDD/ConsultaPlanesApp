import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerPlanComponent } from './plan/pages/ver-plan/ver-plan.component';
import { BuscadorPlanesComponent } from './plan/pages/buscador-planes/buscador-planes.component';

const routes: Routes = [
  {
    path: '',
    component: BuscadorPlanesComponent,

    pathMatch: 'full'   
},
{
    path: 'plan',
    component: VerPlanComponent
},
{
    path: '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
