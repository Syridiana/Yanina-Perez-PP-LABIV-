import { Component, OnInit } from '@angular/core';
import PizzaI from 'src/app/Entities/pizza-interface';

@Component({
  selector: 'app-salen-pizzas',
  templateUrl: './salen-pizzas.component.html',
  styleUrls: ['./salen-pizzas.component.css']
})
export class SalenPizzasComponent implements OnInit {
  pizzaAPasar?: PizzaI;
  pizzaToModify?: PizzaI;
  pizzaToAdd?: PizzaI;

  constructor() { }

  ngOnInit(): void {
  }

  
  cambiarPizza(pizza:any){
    this.pizzaAPasar = pizza;
   }

   modifyPizza(e: any){
    this.pizzaToModify = e;
   }

   addPizza(e: any){
    this.pizzaToAdd = e;
   }

}
