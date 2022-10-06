import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import PaisI from 'src/app/Entities/pais-interface';
import { PaisServiceService } from 'src/app/Servicios/pais-service.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() emitPais: EventEmitter<PaisI> =  new EventEmitter<PaisI>();
  listaPaises = new Array<PaisI>();
  paisSeleccionado: PaisI | undefined;

  constructor(private paisService: PaisServiceService) { }

  ngOnInit(): void {
    this.cargarPaises();

  }

  cargarPaises() {

      this.paisService.obtenerPaisContinente('EU').subscribe({
        next: (paises: any) => {

          this.listaPaises.push({
            codigo: paises[2].alpha3Code,
            nombre: paises[2].translations.es,
            imagenUrl: paises[2].flags.svg
          });

          this.listaPaises.push({
            codigo: paises[7].alpha3Code,
            nombre: paises[7].translations.es,
            imagenUrl: paises[7].flags.svg
          });
        },
        error: error => { console.log(error) }
      });


      this.paisService.obtenerPaisContinente('AU').subscribe({
        next: (paises: any) => {

          this.listaPaises.push({
            codigo: paises[2].alpha3Code,
            nombre: paises[2].translations.es,
            imagenUrl: paises[2].flags.svg
          });

          this.listaPaises.push({
            codigo: paises[7].alpha3Code,
            nombre: paises[7].translations.es,
            imagenUrl: paises[7].flags.svg
          });
        },
        error: error => { console.log(error) }
      });


  }


  seleccionar(e: any) {
    this.paisSeleccionado = this.listaPaises.find(p => p.codigo === e.target.getAttribute('data'));
  }

  agregar() {
    this.emitPais.emit(this.paisSeleccionado);
  }
}