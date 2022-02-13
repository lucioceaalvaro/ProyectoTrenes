import { Schema, model } from "mongoose";

//schemas por subclase
const RegistroSchema = new Schema({
    _id:{
        type: String
    },
    _tren_id:{
        type: String
    },
    _origen: {
      type: String
    },
    _destino: {
      type: String
    },
    _fecha:{
        type:Date
    },
    _tipoCarga:{
        type:String
    },
    _kilosCarga:{
        type:Number
    },
    _kilometros: {
        type: Number
    }

});
export const Registros = model("Registros", RegistroSchema);