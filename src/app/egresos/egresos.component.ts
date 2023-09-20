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
  porcentajeEgreso:number;

  constructor(private operaciones: OperacionesService){}

  eliminarEgreso(){
    this.operaciones.movimientoEliminado.emit(this.egreso);
    this.operaciones.eliminarMovimiento(this.egreso, this.index);
  }

}
