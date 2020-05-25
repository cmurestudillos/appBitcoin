import { Component, OnInit } from '@angular/core';
// Servicios
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  monedaEur: any;
  monedaUsd: any;

  constructor(public _service: BitcoinService) { }

  ngOnInit(): void {
    this._service.getEurCurerency()
    .subscribe((data:any) => {
        this.monedaEur = data['bpi'].EUR;
      }
    );


    this._service.getEurCurerency()
    .subscribe((data:any) => {
        this.monedaUsd = data['bpi'].USD;
      }
    );

  }

}
