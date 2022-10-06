import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import PaisI from 'src/app/Entities/pais-interface';
import RepartidorInterface from 'src/app/Entities/repartidor-interface';
import { PaisServiceService } from 'src/app/Servicios/pais-service.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() reRecibido?: RepartidorInterface;
  pais?: PaisI;

  constructor(private paisService: PaisServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.reRecibido) {
      this.paisService.obtenerPais(this.reRecibido?.countryId).subscribe({
        next: (pais: any) => {
          this.pais = {
            codigo: this.reRecibido?.countryId,
            nombre: pais[0].translations.spa.common,
            imagenUrl: pais[0].flags.svg
          }
        },
        error: error => { console.log(error) }
      });

    }
  }

}



