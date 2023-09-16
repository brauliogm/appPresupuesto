import { Component } from '@angular/core';
import { OperacionesService } from '../operaciones.service';
import { Movimiento } from '../cabecera/movimiento.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  accionSeleccionada:string = "ing";
  descripcion: string = "";
  valor:number;

  constructor(private operaciones: OperacionesService){}
  
  total(){
    if (this.accionSeleccionada == "ing") {
      this.operaciones.ingresoSer = this.valor;
      console.log(this.valor);
      console.log(this.accionSeleccionada);
      
      
    } else if(this.accionSeleccionada == "egr") {
      this.operaciones.egresoSer = (this.valor * (-1));
      console.log(this.valor);
      console.log(this.accionSeleccionada);
    }

    let movimineto1 = new Movimiento(this.descripcion, this.valor);
    this.operaciones.totalSer();
  }

}
