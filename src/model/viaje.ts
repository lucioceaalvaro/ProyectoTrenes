import {Schema, model } from 'mongoose'
import { type } from 'os'


const TrenSchema = new Schema({
    //caracteristicas del objeto
    _tipoObjeto: {
        type: String  //Valores "A, "T"...
    },
    _id: {
        type: String 
    },
    _origen:{
        type: String
    },
    _destino:{
        type: String
    },
    _nPasajeros:{
        type: Number
    },
    _nPlazas:{
        type: Number
    },
    _precio:{
        type: Number
    },
    _tipoCarga:{
        type: String
    },
    _kilosCarga:{
        type: Number
    },
    _asiento:{
        type:String
    }
    

   
})
export type todoTren={
    _tipoObjeto:string,
    _id: string,
    _origen: string,
    _destino: string,
    _nPasajeros: number,
    _precio: number,
    _tipoCarga: string,
    _kilosCarga:number,
    _asiento:string,
    _nPlazas:number
}
export type ipasajeros={
    //caracteristicas tipo
    _tipoObjeto:string,
    _id: string,
    _origen: string,
    _destino: string,
    _nPasajeros: number,
    _precio: number
}
export type imercancias={
    //caracteristicas tipo
    _tipoObjeto:string,
    _id: string,
    _origen: string,
    _destino: string,
    _tipoCarga: string,
    _kilosCarga:number
}


export const Viaje = model('Viajes', TrenSchema)