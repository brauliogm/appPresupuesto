import { Movimiento } from "./cabecera/movimiento.model";

export class OperacionesService{
    balanceSer: Movimiento[] = [];
    ingresoSer:number = 0;
    egresoSer:number = 0;
    presupuestoSer:number;
    porcentajeSer:number;


    totalSer(){
        this.presupuestoSer = this.ingresoSer + this.egresoSer;
        console.log(this.ingresoSer);
        console.log(this.egresoSer);
        console.log(this.presupuestoSer);
        
    }

    agregarMovimiento(movimiento: Movimiento){
        this.balanceSer.push( movimiento );
    }

}