import { Component, OnInit } from '@angular/core';
// Servicios
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-inicio',
  templateUrl: '../../views/inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  monedaEur: any;
  monedaUsd: any;
  monedaGbp: any;

  constructor(public _service: BitcoinService) { }

  ngOnInit(): void {
    // Obtenemos Euro
    this._service.getEurCurerency()
    .subscribe((data:any) => {
        this.monedaEur = data['bpi'].EUR;
      }
    );

    // Obtenemos Dollar
    this._service.getEurCurerency()
    .subscribe((data:any) => {
        this.monedaUsd = data['bpi'].USD;
      }
    );

    // Obtenemos Libra
    this._service.getGBPCurerency()
    .subscribe((data:any) => {
        this.monedaGbp = data['bpi'].GBP;
      }
    );

  }

}
