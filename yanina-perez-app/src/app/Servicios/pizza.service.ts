import { Injectable } from '@angular/core';
import PizzaI from '../Entities/pizza-interface';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzaList = new Array<PizzaI>();

  constructor() { 
    this.pizzaList.push({
      nombre: 'Fugazzeta',
      ingredientes: 'cebolla',
      precio: '1500',
      peso: '800gr'
    })

    this.pizzaList.push({
      nombre: 'Napolitana',
      ingredientes: 'Tomate',
      precio: '1600',
      peso: '700gr'
    })
  }

  addPizza(pizza: PizzaI){
    this.pizzaList.push(pizza);
  }

  updatePizza(pizza: any){
    let index = this.pizzaList?.findIndex(p => p.nombre === pizza.nombre);
    if(index <= 0){
      this.pizzaList[index].precio = pizza.precio;
      this.pizzaList[index].peso = pizza.peso;
      this.pizzaList[index].ingredientes = pizza.ingredientes;
    }

  }

  deletePizza(nombre:any){
    let index = this.pizzaList?.findIndex(p => p.nombre === nombre);
    this.pizzaList.splice(index, index + 1);
  }
}
