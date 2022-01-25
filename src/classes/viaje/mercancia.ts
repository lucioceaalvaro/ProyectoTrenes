import { Viajes } from "./viaje";

export  class Mercancias extends Viajes{
    
    private _tipoCarga:string;
    private _kilosCarga:number;
    
    constructor(
        tipoObjeto:string,
        id:string,
        origen:string,
        kilosCarga: number,
        destino:string,
        carga:string)
        {
            super(tipoObjeto,id,origen,destino)
            this._tipoCarga=carga
            this._kilosCarga=kilosCarga
        }
        
    
    
    get carga(){
        return this._tipoCarga
    }
    get KilosCarga(){
        return this._kilosCarga
    }
    
    //Futuro: cargar() y descargar()
    



}