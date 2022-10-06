import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import PizzaI from 'src/app/Entities/pizza-interface';
import { RepartidorService } from 'src/app/Servicios/repartidor.service';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {
  @Output() emitPizzaToAdd: EventEmitter<PizzaI> =  new EventEmitter<PizzaI>();
  altaPizzaForm: FormGroup;
  pizzaToAdd: PizzaI = {
    nombre: "",
    ingredientes: "",
    precio: "",
    peso: ""
  };

  constructor(private fb: FormBuilder, private pizzaService: RepartidorService) { 
    this.altaPizzaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      ingredientes: ['', [Validators.required]],
      precio: ['', Validators.required],
      peso: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addPizza(){
    this.pizzaToAdd!.nombre = this.altaPizzaForm.get('nombre')!.value;
    this.pizzaToAdd!.ingredientes = this.altaPizzaForm.get('ingredientes')!.value;
    this.pizzaToAdd!.precio = this.altaPizzaForm.get('precio')!.value;
    this.pizzaToAdd!.peso = this.altaPizzaForm.get('peso')!.value;
    this.emitPizzaToAdd.emit(this.pizzaToAdd);
  }
}
