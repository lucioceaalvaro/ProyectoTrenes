import {Schema, model } from 'mongoose'
import { type } from 'os'
const EmpleadosSchema = new Schema({
    //caracteristicas del objeto
    _tipoObjeto: {
        type: String  //Valores "A, "T"...
    },
    _dni: {
        type: String
    },
    _nombre:{
        type: String
    },
    _sueldo:{
        type: Number
    },
    _telefono:{
        type: Number
    },
    _horas:{
        type: Number
    },
    _hora:{
        type: Number
    },
    _viajes:{
        type: Number
    },
    _tren:{
        type: String
    }
    
})


export type iEmpleado = {
    //los mismos de arriba
    _tipoObjeto: string | null,
    _dni: string | null,
    _sueldo: number | null,
    _telefono:number| null
}
export type tEmpleado={
    _tipoObjeto: string ,
    _dni: string ,
    _sueldo: number 
    _telefono:number,
    _horas:string| null,
    _viajes: number| null,
    _hora:number| null,
    _tren:string| null,
    

}
export type iOperario={
    //caracteristicas tipo
    _tipoObjeto: string | null,
    _dni: string | null,
    _nombre:string | null,
    _telefono:number | null,
    _sueldo: number | null,
    _tren:string | null,
    _viajes: number | null
}
export type iRevisor={
    //caracteristicas tipo
    _tipoObjeto: string | null,
    _dni: string | null,
    _nombre:string | null,
    _telefono:number | null,
    _sueldo: number | null,
    _horas:string| null,
    _viajes: number| null
}
export type iLimpiador={
    //caracteristicas tipo
    _tipoObjeto: string | null,
    _dni: string | null,
    _nombre:string | null,
    _telefono:number | null,
    _sueldo: number | null,
    _horas:number| null
    
}


// La colección de la BD (Plural siempre)
export const Empleado = model('Empleados', EmpleadosSchema)