import { EventEmitter } from "@angular/core";
import { Movimiento } from "./cabecera/movimiento.model";
import { Injectable } from '@angular/core';

@Injectable()
export class OperacionesService{
    ingresosLista:Movimiento[] = [];
    egresosLista:Movimiento[] = [];

    movimientoEmitido = new EventEmitter<Movimiento>();
    movimientoEliminado = new EventEmitter<Movimiento>();

    agregarMovimiento(movimiento: Movimiento){
        if (movimiento.tipo == "ing") {

            this.ingresosLista.push(movimiento);
            
        } else if (movimiento.tipo == "egr"){
            
            this.egresosLista.push(movimiento);
            
        }
        
    }

    eliminarMovimiento(movimiento: Movimiento, index:number){
        if (movimiento.tipo == "ing") {     

            this.ingresosLista.splice(index, 1);

        } else if (movimiento.tipo == "egr"){
            
            this.egresosLista.splice(index, 1);
            
        }
        
    }

}