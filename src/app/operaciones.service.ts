import { EventEmitter } from "@angular/core";
import { Movimiento } from "./cabecera/movimiento.model";
import { Injectable } from '@angular/core';

@Injectable()
export class OperacionesService{
    balanceSer: Movimiento[] = [];
    ingresosLista:Movimiento[] = [];
    egresosLista:Movimiento[] = [];
    ingresoSer:number = 0;
    egresoSer:number = 0;
    presupuestoSer:number = this.ingresoSer - this.egresoSer;
    porcentajeSer:number = (this.egresoSer / this.ingresoSer) * 100;

    movimientoEmitido = new EventEmitter<Movimiento>();

    agregarMovimiento(movimiento: Movimiento){
        this.balanceSer.push( movimiento );
        if (movimiento.tipo == "ing") {

            this.ingresosLista.push(movimiento);
            this.ingresoSer = this.ingresoSer + movimiento.valor;
            
        } else if (movimiento.tipo == "egr"){
            
            this.egresosLista.push(movimiento);
            this.egresoSer = this.egresoSer + movimiento.valor;
            
        }
        
    }






    eliminarMovimiento(movimiento: Movimiento){
        this.balanceSer.push( movimiento );
        
        
    }

}