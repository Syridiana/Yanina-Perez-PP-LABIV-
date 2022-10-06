import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { WelcomeComponent } from './Views/welcome/welcome.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { MyGuardGuard } from './my-guard.guard';
import { SalenPizzasComponent } from './Components/salen-pizzas/salen-pizzas.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'repartidor',
    loadChildren: () => import('../app/Components/repartidor/repartidor-routing.module')
      .then(m => m.RepartidorRoutingModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
 { path: 'login', component: LoginComponent },
 {
  path: 'pizzas',
  component: SalenPizzasComponent,
  canActivate: [MyGuardGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
