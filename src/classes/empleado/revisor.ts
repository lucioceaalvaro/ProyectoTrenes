import { Empleado } from "./empleado"

export  class Revisor extends Empleado{
    private _horas:number;
    private _viajes:number;

    constructor(dni:string,
        nombre:string,
        telefono:number,
        sueldo:number,horas:number,viajes:number){
            super(dni,nombre,telefono,sueldo)
            this._horas=horas
            this._viajes=viajes
        }

    get horas(){
        return this._horas
    }
    get viajes(){
        return this._viajes
    }
    
    salario(){
        let sueldocalculado:number;
        if (this._viajes>=15) {
            sueldocalculado=this.sueldo*1.10
            
        }else if(this._viajes>=50){
            sueldocalculado=this.sueldo*1.25
        }else{
            sueldocalculado=this.sueldo*1.05
        }
        if (this._horas>=200) {
            sueldocalculado=this.sueldo*1.20

        }else if(this._horas>=100){
            sueldocalculado=this.sueldo*1.10
        }else{
            sueldocalculado=this.sueldo*1.02
        }
        return sueldocalculado;
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

}