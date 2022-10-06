import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import PizzaI from 'src/app/Entities/pizza-interface';
import RepartidorInterface from 'src/app/Entities/repartidor-interface';
import { RepartidorService } from 'src/app/Servicios/repartidor.service';

@Component({
  selector: 'app-tabla-repartidor',
  templateUrl: './tabla-repartidor.component.html',
  styleUrls: ['./tabla-repartidor.component.css']
})
export class TablaRepartidorComponent implements OnInit {
  @Output() eventoSeleccioneRe: EventEmitter<RepartidorInterface> =  new EventEmitter<RepartidorInterface>();
  @Input() peliRecibidaABorrar?:RepartidorInterface;
  @Input() movieReceivedToAdd?: RepartidorInterface;
  
  random: any;
  pickedRe?: RepartidorInterface;
  reparList?: RepartidorInterface[];
  pizzas?: PizzaI[];

  imageUrl = '';
  movieName = "";

  constructor(public repartidorService: RepartidorService) {
    
     this.repartidorService.getUsers().subscribe(re => { 
       this.reparList = re as Array<RepartidorInterface>; 
     }) 

/*      this.repartidorService.getPizzas().subscribe(re => { 
      this.pizzas = re as Array<PizzaI>; 
    }) 

 
 */

  }

  ngOnInit(): void {

  }


  compare(a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  seleccionoRe(id: any) {
    this.pickedRe = this.reparList?.find(re => re.id === id);
    this.eventoSeleccioneRe.emit(this.pickedRe);
  }

}
