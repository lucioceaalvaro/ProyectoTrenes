import { query } from "express"
import { Operario } from "./classes/empleado/operario"
import { Mercancias } from "./classes/viaje/mercancia"
import { Pasajeros } from "./classes/viaje/pasajeros"
import { Viajes } from "./classes/viaje/viaje"
import { db } from "./database/database"

import {Empleado} from './model/empleado'
import { Viaje } from "./model/viaje"
export let calcularSueldo =async(dni:string,salariobase:number)=>{
        let salariocalculado=0
        
        
        let query: any =  await Empleado.findOne({_dni:dni})
        let query1 =  await Viaje.findOne({_id:query._tren})
        
                
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
            
       
       

        

    return salariocalculado
    
}