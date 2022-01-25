import {Schema, model } from 'mongoose'
// Definimos el Schema
const ClientesSchema = new Schema({
    //caracteristicas del objeto
    _dni: {
        type: String  //Valores "A, "T"...
    },
    _nombre: {
        type: String
    },
    _email: {
        types:String
    },
    _telefono: {
        type: Number
    },
    
})





// La colección de la BD (Plural siempre)
export const Clientes = model('Clientes', ClientesSchema)