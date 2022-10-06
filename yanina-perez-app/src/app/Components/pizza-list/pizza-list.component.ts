import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import PizzaI from 'src/app/Entities/pizza-interface';
import { PizzaService } from 'src/app/Servicios/pizza.service';
import { RepartidorService } from 'src/app/Servicios/repartidor.service';
import { UserFirestoreService } from 'src/app/Servicios/user-firestore-service.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  @Output() eventoSeleccionePizza: EventEmitter<PizzaI> =  new EventEmitter<PizzaI>();
  @Input() pizzaReceivedToModify?:PizzaI;
  @Input() pizzaReceivedToAdd?:PizzaI;

  pizzaList = new Array<PizzaI>();
  pickedPizza? : PizzaI

  constructor(private pizzaService: PizzaService, private userService: UserFirestoreService, private repartidorService: RepartidorService) { 
    this.pizzaList = this.pizzaService.pizzaList;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['pizzaReceivedToModify'] && changes['pizzaReceivedToModify'].currentValue) {
      this.pizzaService.updatePizza(this.pizzaReceivedToModify);
    }

    if (changes['pizzaReceivedToAdd'] && changes['pizzaReceivedToAdd'].currentValue) {
      this.pizzaService.addPizza(this.pizzaReceivedToAdd as PizzaI);
    }

  }

  seleccionarPizza(nombre: any){
    this.pickedPizza = this.pizzaList?.find(pizza => pizza.nombre === nombre);
    this.eventoSeleccionePizza.emit(this.pickedPizza);
  }
}
