import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGuardGuard } from 'src/app/my-guard.guard';
import { RepartidorAltaComponent } from './repartidor-alta/repartidor-alta.component';
import { RepartidorDetalleComponent } from './repartidor-detalle/repartidor-detalle.component';

const routes: Routes = [
  { path: 'alta', 
  component: RepartidorAltaComponent
 },
 { path: 'detalle', 
 component: RepartidorDetalleComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
