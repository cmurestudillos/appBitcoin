import { Injectable } from '@angular/core';
// Peticiones Http
import { HttpClient } from '@angular/common/http';
// Url de API
import { Global } from "./global";
// Operadores
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
// Modelo/Interface de Datos
import { Bitcoin } from '../models/bitcoin';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  public url:string;
  monedas:any [] = [];

  constructor(private _http: HttpClient) { 
    this.url = Global.url;
  }

  // Peticion para obtener los datos de la API
  getAllCurerencies():Observable<any>{
    return this._http.get(`${this.url}/currentprice/EUR.json`).pipe(map(
      (response:any) => {
        let listaMonedas: Bitcoin[] = [];

        for (let index = 0; index < response.body.length; index++) {
          const moneda: Bitcoin = {
            code: response.body[index].login,
            rate: response.body[index].avatar_url,
            description: response.body[index].description,
            rate_float: response.body[index].rate_float
          };
          // push de los datos mediante spread
          listaMonedas = [...listaMonedas, moneda];
        }
        return listaMonedas;
      }
    ));
  }
}
