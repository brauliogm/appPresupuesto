import { Component } from '@angular/core';
import { OperacionesService } from '../operaciones.service';
import { Movimiento } from './movimiento.model';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  ingresosLista:Movimiento[] = [];
  egresosLista:Movimiento[] = [];
  ingreso:number = 0;
  egreso:number = 0;
  porcentaje:number = (this.egreso / this.ingreso) * 100;

  constructor(private operaciones: OperacionesService){
    operaciones.ingresoEmitido.subscribe(
      (ingreso: Movimiento) => {this.ingreso = this.ingreso + ingreso.valor}
    )
    operaciones.egresoEmitido.subscribe(
      (egreso: Movimiento) => {this.egreso = this.egreso + egreso.valor}
    )
  }

  ngOnInit(){
    this.ingresosLista = this.operaciones.ingresosLista;
    
    this.egresosLista = this.operaciones.egresosLista;    
  }


}
