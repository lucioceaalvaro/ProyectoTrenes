"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registros = void 0;
const mongoose_1 = require("mongoose");
//schemas por subclase
const RegistroSchema = new mongoose_1.Schema({
    _id: {
        type: String
    },
    _tren_id: {
        type: String
    },
    _origen: {
        type: String
    },
    _destino: {
        type: String
    },
    _fecha: {
        type: Date
    },
    _kilometros: {
        type: Number
    }
});
exports.Registros = (0, mongoose_1.model)("Registros", RegistroSchema);
