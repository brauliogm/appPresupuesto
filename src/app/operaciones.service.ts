import { EventEmitter } from "@angular/core";
import { Movimiento } from "./cabecera/movimiento.model";
import { Injectable } from '@angular/core';

@Injectable()
export class OperacionesService{
    balanceSer: Movimiento[] = [];
    ingresosLista:Movimiento[] = [];
    egresosLista:Movimiento[] = [];
    ingresoSer:number = 5;
    egresoSer:number = 0;
    presupuestoSer:number = this.ingresoSer - this.egresoSer;
    porcentajeSer:number = (this.egresoSer / this.ingresoSer) * 100;

    cantidades = new EventEmitter<Movimiento>();

    agregarMovimiento(movimiento: Movimiento){
        this.balanceSer.push( movimiento );
        if (movimiento.tipo == "ing") {

            this.ingresosLista.push(movimiento);
            
        } else if (movimiento.tipo == "egr"){
            
            this.egresosLista.push(movimiento);
            
        }
        this.ingresoSer= this.ingresoSer + 4;
        console.log(this.ingresoSer);
        
        console.log(this.ingresosLista);
        console.log(this.egresosLista);
        
        
    }






    eliminarMovimiento(movimiento: Movimiento){
        this.balanceSer.push( movimiento );
        if (movimiento.tipo == "ing") {

            this.ingresosLista.push(movimiento);
            
        } else if (movimiento.tipo == "egr"){
            
            this.egresosLista.push(movimiento);
            
        }

        console.log(this.ingresosLista);
        console.log(this.egresosLista);
        
        
    }

}