import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFirestoreService } from 'src/app/Servicios/user-firestore-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup;

  email: string | undefined;
  password: string | undefined;
  passwordRepeat: string | undefined;
  name: string | undefined;

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder, private router: Router,
    private userF: UserFirestoreService) {
    this.userLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  login(): void {

    this.email = this.userLogin.value.email;
    this.password = this.userLogin.value.password;

    this.afAuth.signInWithEmailAndPassword(this.email!, this.password!).then((user) => {

      Swal.fire({
        title: 'Usuario logueado',
        text: "Usuario logueado con éxito",
        icon: 'success',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        background: "#00af00",
        iconColor: "#fff",
        color: "#fff"
      })

      if(this.email === 'admin@admin.com'){
        localStorage.setItem('profile', 'admin')
      } else {
        localStorage.setItem('profile', 'empleado')
      }
      

    }).catch((error) => {

      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        background: "#ff3030",
        iconColor: "#fff",
        color: "#fff"
      })

    });

  }

  autoCompleteEmployee(): void {
    this.userLogin.controls['email'].setValue("empleado@empleado.com");
    this.userLogin.controls['password'].setValue("empleado123");
  }

  autoCompleteAdmin(): void {
    this.userLogin.controls['email'].setValue("admin@admin.com");
    this.userLogin.controls['password'].setValue("admin123");
  }

}
