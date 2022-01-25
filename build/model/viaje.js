"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viaje = void 0;
const mongoose_1 = require("mongoose");
const TrenSchema = new mongoose_1.Schema({
    //caracteristicas del objeto
    _tipoObjeto: {
        type: String //Valores "A, "T"...
    },
    _id: {
        type: String
    },
    _origen: {
        type: String
    },
    _destino: {
        type: String
    },
    _nPasajeros: {
        type: Number
    },
    _nPlazas: {
        type: Number
    },
    _precio: {
        type: Number
    },
    _tipoCarga: {
        type: String
    },
    _kilosCarga: {
        type: Number
    },
    _asiento: {
        type: String
    }
});
exports.Viaje = (0, mongoose_1.model)('Viajes', TrenSchema);
