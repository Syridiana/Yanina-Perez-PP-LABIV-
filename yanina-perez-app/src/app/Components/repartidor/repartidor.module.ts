import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorRoutingModule } from './repartidor-routing.module';
import { RepartidorDetalleComponent } from './repartidor-detalle/repartidor-detalle.component';
import { TablaRepartidorComponent } from './tabla-repartidor/tabla-repartidor.component';
import { MasDetalleRepartidorComponent } from './mas-detalle-repartidor/mas-detalle-repartidor.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule
  ]
})
export class ActorModule { }
