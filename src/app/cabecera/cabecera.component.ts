import { Component } from '@angular/core';
import { OperacionesService } from '../operaciones.service';
import { Movimiento } from './movimiento.model';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  balance: Movimiento[] = [];
  ingreso:number;
  egreso:number;
  presupuesto:number;
  porcentaje:number;

  constructor(private operaciones: OperacionesService){}

  ngOnInit(){
    this.balance = this.operaciones.balanceSer;
    this.ingreso = this.operaciones.ingresoSer;
    this.egreso = this.operaciones.egresoSer;
    this.presupuesto = this.operaciones.presupuestoSer;
    this.operaciones.totalSer();
  }

}
