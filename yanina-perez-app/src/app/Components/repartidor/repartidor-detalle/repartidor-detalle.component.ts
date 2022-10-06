import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import PaisI from 'src/app/Entities/pais-interface';
import RepartidorInterface from 'src/app/Entities/repartidor-interface';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {
  @Output() peliSeleccionada: EventEmitter<RepartidorInterface>= new EventEmitter<RepartidorInterface>(); 
  ReAPasar?: RepartidorInterface;
  peliABorrar?: RepartidorInterface;
  movieToAdd?: RepartidorInterface;

  constructor() { }

  ngOnInit(): void {
  }

/*   emitirPeli() {
    console.log('Emitiendo ');
    console.log(this.peliAPasar);
    this.peliSeleccionada.emit(this.peliAPasar);
  } */

  cambiarRe(re:any){
    this.ReAPasar = re;
/*     this.emitirPeli(); */
   }

   cambiarPeliABorrar(peli:any){
    this.peliABorrar = peli;
/*     this.emitirPeli(); */
   }

   addMovieToList(peli:any){
    this.movieToAdd = {...peli};
   }

}
