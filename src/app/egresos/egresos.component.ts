import { Component, Input } from '@angular/core';
import { Movimiento } from '../cabecera/movimiento.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {

  @Input() egreso: Movimiento;

  ngOnInit(){

  }

}
