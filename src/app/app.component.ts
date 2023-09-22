import { Component } from '@angular/core';
import { Movimiento } from './cabecera/movimiento.model';
import { OperacionesService } from './operaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresosLista:Movimiento[] = [];
  egresosLista:Movimiento[] = [];
  ingreso:number = 0;
  egreso:number = 0;
  presupuesto:number = 0;
  porcentaje:number;

  constructor(private operaciones: OperacionesService){
    operaciones.movimientoEmitido.subscribe(
      (movimiento: Movimiento) => {
        if (movimiento.tipo == "ing") {
          this.ingreso += movimiento.valor
        } else if(movimiento.tipo == "egr") {
          this.egreso += movimiento.valor
        }
        this.porcentajeYPresupuesto();
      }
    )
    operaciones.movimientoEliminado.subscribe(
      (movimiento: Movimiento) => {
        if (movimiento.tipo == "ing") {
          this.ingreso -= movimiento.valor
        } else if(movimiento.tipo == "egr") {
          this.egreso -= movimiento.valor
        }
        this.porcentajeYPresupuesto();
      }
    )
  }

  ngOnInit(){
    this.ingresosLista = this.operaciones.ingresosLista;
    this.egresosLista = this.operaciones.egresosLista;
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
