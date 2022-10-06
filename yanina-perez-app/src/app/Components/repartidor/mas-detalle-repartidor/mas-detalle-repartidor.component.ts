import { Component, OnInit, Input } from '@angular/core';
import RepartidorInterface from 'src/app/Entities/repartidor-interface';

@Component({
  selector: 'app-mas-detalle-repartidor',
  templateUrl: './mas-detalle-repartidor.component.html',
  styleUrls: ['./mas-detalle-repartidor.component.css']
})
export class MasDetalleRepartidorComponent implements OnInit {
  @Input() reRecibido?:RepartidorInterface;

  constructor() { }

  ngOnInit(): void {
  }

  limpiar(){
    this.reRecibido = undefined;
  }

}
