import { Schema, model } from "mongoose";

//schemas por subclase
const BilletesSchema = new Schema({
    _dni:{
        type: String
    },
    _idTrenPasajeros:{
      type: String
    },
    _origen: {
      type: String
    },
    _destino: {
      type: String
    },
    _asiento: {
      type: String
    },
    _precio:{
      type: Number
    },
    _fecha:{
        type:Date
    }
});
export const Billetes = model("Billetes", BilletesSchema);

