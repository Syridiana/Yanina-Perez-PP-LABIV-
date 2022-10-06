import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/shared/nav-bar/nav-bar.component';
import { WelcomeComponent } from './Views/welcome/welcome.component';
import { LoginComponent } from './Views/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule }  from '@angular/fire/compat';
import { RepartidorAltaComponent } from './Components/repartidor/repartidor-alta/repartidor-alta.component';
import { TablaPaisesComponent } from './Components/tabla-paises/tabla-paises.component';
import { TablaRepartidorComponent } from './Components/repartidor/tabla-repartidor/tabla-repartidor.component';
import { RepartidorDetalleComponent } from './Components/repartidor/repartidor-detalle/repartidor-detalle.component';
import { MasDetalleRepartidorComponent } from './Components/repartidor/mas-detalle-repartidor/mas-detalle-repartidor.component';
import { DetallePaisComponent } from './Components/repartidor/detalle-pais/detalle-pais.component';
import { SalenPizzasComponent } from './Components/salen-pizzas/salen-pizzas.component';
import { AltaPizzaComponent } from './Components/alta-pizza/alta-pizza.component';
import { ModificaPizzaComponent } from './Components/modifica-pizza/modifica-pizza.component';
import { DeletePizzaComponent } from './Components/delete-pizza/delete-pizza.component';
import { PizzaListComponent } from './Components/pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent,
    LoginComponent,
    RepartidorAltaComponent,
    TablaPaisesComponent,
    RepartidorDetalleComponent,
    TablaRepartidorComponent,
    MasDetalleRepartidorComponent,
    DetallePaisComponent,
    SalenPizzasComponent,
    AltaPizzaComponent,
    ModificaPizzaComponent,
    DeletePizzaComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
