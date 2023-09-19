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
  
  nuevoMovimiento(){
    let movimiento1 = new Movimiento(this.descripcion, this.valor, this.accionSeleccionada);
    this.operaciones.agregarMovimiento(movimiento1);
    if (movimiento1.tipo == "ing") {

      this.operaciones.ingresoEmitido.emit(movimiento1);
      
    } else if (movimiento1.tipo == "egr"){
      
      this.operaciones.egresoEmitido.emit(movimiento1);
      
    }

    this.descripcion = "";
    this.valor = 0;
    
  }

}
