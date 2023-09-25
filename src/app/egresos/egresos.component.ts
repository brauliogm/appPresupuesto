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
  @Input() ingreso:number;
  porcentaje:number;
  
  
  constructor(private operaciones: OperacionesService){}

  ngOnChanges() {
    if (this.egreso.valor == 0) {
      this.porcentaje = 0;
    } else if (this.ingreso == 0) {
      this.porcentaje = 100;
    } else{
      this.porcentaje = Math.round((this.egreso.valor / this.ingreso) * 100);      
    }
  }
  
  eliminarEgreso(){
    this.operaciones.movimientoEliminado.emit(this.egreso);
    this.operaciones.eliminarMovimiento(this.egreso, this.index);
  }
}
