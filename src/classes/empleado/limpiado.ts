import { db } from "../../database/database";
import { calcularSueldo } from "../../funcioenes";
import { Empleado } from "./empleado"
import { Viaje } from '../../model/viaje'


export  class Limpiador extends Empleado{
    
    private _horas:number;
    private _tren:string;

    constructor(dni:string,
        nombre:string,
        telefono:number,
        sueldo:number,horas:number,tren:string){
            super(dni,nombre,telefono,sueldo)
            this._horas=horas;
            this._tren=tren;
        }

    get horas(){
        return this._horas
    }
    get tren(){
        return this._tren
    }
    //SI es de pasajeros *2 mercancias por *3
    
    
    async salario(){
       
        let sueldocalculado:any
        sueldocalculado= await calcularSueldo(this.dni,this.sueldo)
        
        if (this._horas>=200) {
            sueldocalculado=this.sueldo*1.20

        }else if(this._horas>=100){
            sueldocalculado=this.sueldo*1.10
        }else{
            sueldocalculado=this.sueldo*1.02
        }
        let sueldofinal=sueldocalculado
        return sueldofinal;
    }

        


}