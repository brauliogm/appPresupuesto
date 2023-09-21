import { Component, Input } from '@angular/core';
import { OperacionesService } from '../operaciones.service';
import { Movimiento } from './movimiento.model';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Input() ingreso:number;
  @Input() egreso:number;
  @Input() presupuesto:number;
  @Input() porcentaje:number;
}
