import { Viajes } from "./viaje";

export  class Pasajeros extends Viajes{
    
    private _nPasajeros:number;
    private _nPlazas:number;
    private _precio:number;
    
    constructor(
        tipoObjeto:string,
        id:string,
        origen:string,
        destino:string,
        nPasajeros:number,
        precio:number,
        nPlazas:number)
        {
            super(tipoObjeto,id,origen,destino)
            
            this._nPasajeros = nPasajeros
            this._precio = precio
            this._nPlazas= nPlazas
        }

    get nPasajeros(){
        return this._nPasajeros
    }
    get precio(){
        return this._precio
    }
    get nPlazas(){
        return this._nPlazas
    }
    //SI es de pasajeros *2 mercancias por *3
    
    



}