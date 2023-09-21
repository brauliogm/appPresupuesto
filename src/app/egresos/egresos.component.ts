import { Component, Input } from '@angular/core';
import { Movimiento } from '../cabecera/movimiento.model';
import { OperacionesService } from '../operaciones.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {

  @Input() index: number;
  @Input() egreso: Movimiento;
  ingreso:number = 0;
  egreso2:number = 0;
  presupuesto:number = 0;
  porcentaje:number;
  
  
  constructor(private operaciones: OperacionesService){
    operaciones.movimientoEmitido.subscribe(
      (movimiento: Movimiento) => {
        if (movimiento.tipo == "ing") {
          this.ingreso = this.ingreso + movimiento.valor
        } else if(movimiento.tipo == "egr") {
          this.egreso2 = this.egreso2 + movimiento.valor
        }
        this.porcentajeYPresupuesto();
      }
    )
    operaciones.movimientoEliminado.subscribe(
      (movimiento: Movimiento) => {
        if (movimiento.tipo == "ing") {
          this.ingreso = this.ingreso - movimiento.valor
        } else if(movimiento.tipo == "egr") {
          this.egreso2 = this.egreso2 - movimiento.valor
        }
        this.porcentajeYPresupuesto();
      }
    )
    
  }
      
  ngOnInit(){
  }
      
  eliminarEgreso(){
    this.operaciones.movimientoEliminado.emit(this.egreso);
    this.operaciones.eliminarMovimiento(this.egreso, this.index);
  }

  porcentajeYPresupuesto(){
    if (this.egreso2 == 0) {
      this.porcentaje = 0;
    } else if (this.ingreso == 0) {
      this.porcentaje = 100;
    } else{
      this.porcentaje = Math.round((this.egreso2 / this.ingreso) * 100);
    }
    this.presupuesto = this.ingreso - this.egreso2;
  }
}
