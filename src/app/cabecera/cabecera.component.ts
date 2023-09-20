import { Component } from '@angular/core';
import { OperacionesService } from '../operaciones.service';
import { Movimiento } from './movimiento.model';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  ingreso:number = 0;
  egreso:number = 0;
  presupuesto:number = 0;
  porcentaje:number;

  constructor(private operaciones: OperacionesService){
    operaciones.movimientoEmitido.subscribe(
      (movimiento: Movimiento) => {
        if (movimiento.tipo == "ing") {
          this.ingreso = this.ingreso + movimiento.valor
        } else if(movimiento.tipo == "egr") {
          this.egreso = this.egreso + movimiento.valor
        }
        this.porcentajeYPresupuesto();
      }
      
    )
    operaciones.movimientoEliminado.subscribe(
      (movimiento: Movimiento) => {
        if (movimiento.tipo == "ing") {
          this.ingreso = this.ingreso - movimiento.valor
        } else if(movimiento.tipo == "egr") {
          this.egreso = this.egreso - movimiento.valor
        }
        this.porcentajeYPresupuesto();
      }
    )
    
  }

  ngOnInit(){

  }

  porcentajeYPresupuesto(){
    if (this.egreso == 0) {
      this.porcentaje = 0;
    } else if (this.ingreso == 0) {
      this.porcentaje = 100;
    } else{
      this.porcentaje = Math.round((this.egreso / this.ingreso) * 100);
    }
    this.presupuesto = this.ingreso - this.egreso;
  }
}
