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
  ingreso:number = this.operaciones.ingresoSer;
  egreso:number = this.operaciones.egresoSer;
  presupuesto:number = 0;
  porcentaje:number = this.operaciones.porcentajeSer;

  constructor(private operaciones: OperacionesService){
  }

  ngOnInit(){
    this.ingresosLista = this.operaciones.ingresosLista;
    this.ingresosLista.forEach(cantidad => {this.ingreso =+ cantidad.valor});
    console.log(this.ingreso);
    
    this.egresosLista = this.operaciones.egresosLista;
    this.egresosLista.forEach(cantidad => {
      this.egreso =+ cantidad.valor;
    });
  }


}
