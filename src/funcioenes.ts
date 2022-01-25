import { query } from "express"
import { Operario } from "./classes/empleado/operario"
import { Mercancias } from "./classes/viaje/mercancia"
import { Pasajeros } from "./classes/viaje/pasajeros"
import { Viajes } from "./classes/viaje/viaje"
import { db } from "./database/database"

import {Empleado} from './model/empleado'
import { todoTren, Viaje } from "./model/viaje"
export let calcularSueldo =async(dni:string,salariobase:number)=>{
        let salariocalculado=0
        let dViaje: todoTren;
        let tmpViaje: Viajes
        
        let query: any =  await Empleado.findOne({_dni:dni})
        let query1 =  await Viaje.findOne({_id:query._tren})
        //console.log(query1)

        //for (dViaje of query1) {

            // dViaje=query1
            // if (query1._tipoObjeto == "mercancias") {
            //     tmpViaje = new Mercancias (query1._tipoObjeto, query1._id, query1._origen,query1._kilosCarga,query1._destino,query1._tipoCarga);
            // } else { 
            //     tmpViaje = new Pasajeros (query1._tipoObjeto,query1._id,query1._origen,query1._destino,query1._nPasajeros,query1._precio,query1._nPlazas);
            // }
                
            if(query1._tipoObjeto == "pasajeros"){
                salariocalculado=salariobase*1.5
                
            }else{
                salariocalculado=salariobase*1.25
            }

            if(query._viajes>=20){
                salariocalculado=salariocalculado*1.15
            }else if(query._viajes>=50){
                salariocalculado=salariocalculado*1.25
            }
            
       // }
       

        

    return salariocalculado
    
}