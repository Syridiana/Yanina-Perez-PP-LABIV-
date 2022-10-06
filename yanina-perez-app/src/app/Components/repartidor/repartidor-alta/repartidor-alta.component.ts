import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import PaisI from 'src/app/Entities/pais-interface';
import RepartidorInterface from 'src/app/Entities/repartidor-interface';
import { RepartidorService } from 'src/app/Servicios/repartidor.service';
import { RepartidorRoutingModule } from '../repartidor-routing.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-repartidor-alta',
  templateUrl: './repartidor-alta.component.html',
  styleUrls: ['./repartidor-alta.component.css']
})
export class RepartidorAltaComponent implements OnInit {
  newRepartidorForm: FormGroup;
  nacionalidad?: PaisI;

  constructor(private repartidorFirestoreService: RepartidorService, private fb: FormBuilder) {
    this.newRepartidorForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      age: ['', [Validators.min(18), Validators.max(130), Validators.required]],
      transportCapacity: ['', [Validators.min(0), Validators.required]],
      countryOfBirth: ['', Validators.required],
      ownerUnit: ['', [Validators.min(1), Validators.max(100000000), Validators.required]]
    });
    this.newRepartidorForm.controls['ownerUnit'].setValue('false');
    this.newRepartidorForm.controls['countryOfBirth'].disable();

   }

  ngOnInit(): void {
  }

  agregarNacionalidad(pais: any){
    this.nacionalidad = pais;
  }

  agregarRepartidor(){
    this.repartidorFirestoreService.addUser({
      'age': this.newRepartidorForm.value.age,
      'countryOfBirth': this.nacionalidad?.nombre,
      'id': this.newRepartidorForm.value.id,
      'name': this.newRepartidorForm.value.name,
      'ownerUnit': this.newRepartidorForm.value.ownerUnit,
      'transportCapacity': this.newRepartidorForm.value.transportCapacity,
      'countryId': this.nacionalidad?.codigo
    }).then( (v) => {
      Swal.fire({
        title: 'Exito',
        text: "Exito",
        icon: 'success',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        background: "#00af00",
        iconColor: "#fff",
        color: "#fff"
      })
    },
    (e) => {
      Swal.fire({
        title: 'Error!',
        text:e,
        icon: 'error',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        background: "#ff3030",
        iconColor: "#fff",
        color: "#fff"
      })
    })
  }
  }


