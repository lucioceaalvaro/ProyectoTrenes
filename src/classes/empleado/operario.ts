import { calcularSueldo } from "../../funcioenes";
import { Viaje } from "../../model/viaje";
import { Empleado } from "./empleado"

export  class Operario extends Empleado{
    private _tren:string;
    private _viajes:number;
    
    constructor(dni:string,
        nombre:string,
        telefono:number,
        sueldo:number,tren:string,viajes:number){
            super(dni,nombre,telefono,sueldo)
            this._tren=tren
            this._viajes=viajes
        }
    
    get tren(){
        return this._tren
    }
    

    async salario(){
        let sueldocalculado:any
        sueldocalculado= await calcularSueldo(this.dni,this.sueldo)
        let sueldofinal=sueldocalculado*1
        
        return sueldofinal;
    }

    multiplicadorViajes(){
        let multiViaje:number;
        if (this._viajes<=50)
            multiViaje=1; 
        else if(this._viajes>50&&this._viajes<=100)
        multiViaje=1.1;
        else
        multiViaje=1.2;

        return multiViaje;
    }

    //SI es de pasajeros *2 mercancias por *3
    
    



}