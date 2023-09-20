import { Component , Input } from '@angular/core';
import { Movimiento } from '../cabecera/movimiento.model';
import { OperacionesService } from '../operaciones.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  
  @Input() ingreso: Movimiento;

  constructor(private operaciones: OperacionesService){}

  eliminarIngreso(){
    //this.operaciones.eliminarMovimiento();
  }

}
