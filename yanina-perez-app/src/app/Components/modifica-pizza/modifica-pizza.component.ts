import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import PizzaI from 'src/app/Entities/pizza-interface';

@Component({
  selector: 'app-modifica-pizza',
  templateUrl: './modifica-pizza.component.html',
  styleUrls: ['./modifica-pizza.component.css']
})
export class ModificaPizzaComponent implements OnInit {
  @Output() pizzaReceivedToModify: EventEmitter<PizzaI> =  new EventEmitter<PizzaI>();
  modificaPizzaForm: FormGroup;
  pizzaToModify: PizzaI = {
    nombre: undefined,
    ingredientes: undefined,
    precio: undefined,
    peso: undefined
  };
  @Input() pizzaRecibida?:PizzaI;

  constructor(private fb: FormBuilder) { 
    this.modificaPizzaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      ingredientes: ['', [Validators.required]],
      precio: ['', Validators.required],
      peso: ['', Validators.required]
    });

    this.modificaPizzaForm.controls['nombre'].disable();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['pizzaRecibida'].currentValue) {
      this.modificaPizzaForm.controls['nombre'].setValue(changes['pizzaRecibida'].currentValue['nombre']);
      this.modificaPizzaForm.controls['ingredientes'].setValue(changes['pizzaRecibida'].currentValue['ingredientes']);
      this.modificaPizzaForm.controls['precio'].setValue(changes['pizzaRecibida'].currentValue['precio']);
      this.modificaPizzaForm.controls['peso'].setValue(changes['pizzaRecibida'].currentValue['peso']);
    }

    // 

  }


  modificaPizza(){
    this.pizzaToModify!.nombre = this.modificaPizzaForm.get('nombre')!.value;
    this.pizzaToModify!.ingredientes = this.modificaPizzaForm.get('ingredientes')!.value;
    this.pizzaToModify!.precio = this.modificaPizzaForm.get('precio')!.value;
    this.pizzaToModify!.peso = this.modificaPizzaForm.get('peso')!.value;
    this.pizzaReceivedToModify.emit(this.pizzaToModify);
  }

}
