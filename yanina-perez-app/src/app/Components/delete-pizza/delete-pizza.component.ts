import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import PizzaI from 'src/app/Entities/pizza-interface';
import { PizzaService } from 'src/app/Servicios/pizza.service';
import { RepartidorService } from 'src/app/Servicios/repartidor.service';

@Component({
  selector: 'app-delete-pizza',
  templateUrl: './delete-pizza.component.html',
  styleUrls: ['./delete-pizza.component.css']
})
export class DeletePizzaComponent implements OnInit {
  @Output() emitMovieToAdd: EventEmitter<PizzaI> =  new EventEmitter<PizzaI>();
  deletePizzaForm: FormGroup;
/*   pizzaToDelete?: PizzaI; */
  @Input() pizzaRecibida?:PizzaI;

  constructor(private fb: FormBuilder, private pizzaService: PizzaService) { 
    this.deletePizzaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      ingredientes: ['', [Validators.required]],
      precio: ['', Validators.required],
      peso: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  deletePizza(){
    this.pizzaService.deletePizza(this.pizzaRecibida?.nombre);

    this.deletePizzaForm.controls['nombre'].setValue("");
    this.deletePizzaForm.controls['ingredientes'].setValue("");
    this.deletePizzaForm.controls['precio'].setValue("");
    this.deletePizzaForm.controls['peso'].setValue("");
  }

}
