import { Injectable } from '@angular/core';
// Peticiones Http
import { HttpClient } from '@angular/common/http';
// Endpoints de los datos
import dataEur from '../api/eur';
import dataUsd from '../api/usd';
import dataGbp from '../api/gbp';

@Injectable({
  providedIn: 'root'
})

export class BitcoinService {
  constructor(private _http: HttpClient) { }

  // Peticion para obtener los datos de la API
  getEurCurerency(){
    return this._http.get(dataEur.endpoint);
  }

  getUSDCurerency(){
    return this._http.get(dataUsd.endpoint);
  }

  getGBPCurerency(){
    return this._http.get(dataGbp.endpoint);
  }
}
