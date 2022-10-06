import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {
  listaCodigos: string[] = [];

  constructor(private http: HttpClient) {

  }

  


  public obtenerPais(codigo: any) {
    const url = 'https://restcountries.com/v3.1/alpha/' + codigo;
    return this.http.get(url);
  }

  public obtenerPaisContinente(codigo: any) {
    const url = 'https://restcountries.com/v2/regionalbloc/' + codigo;
    return this.http.get(url);
  }


}
