"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billetes = void 0;
const mongoose_1 = require("mongoose");
//schemas por subclase
const BilletesSchema = new mongoose_1.Schema({
    _dni: {
        type: String
    },
    _idTrenPasajeros: {
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
    _precio: {
        type: Number
    },
    _fecha: {
        type: Date
    }
});
exports.Billetes = (0, mongoose_1.model)("Billetes", BilletesSchema);
