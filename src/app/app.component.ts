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

  constructor(private operaciones: OperacionesService){}

  ngOnInit(){
    this.ingresosLista = this.operaciones.ingresosLista;
    this.egresosLista = this.operaciones.egresosLista;
  }
}
