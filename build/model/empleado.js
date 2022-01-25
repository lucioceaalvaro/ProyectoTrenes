"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const mongoose_1 = require("mongoose");
const EmpleadosSchema = new mongoose_1.Schema({
    //caracteristicas del objeto
    _tipoObjeto: {
        type: String //Valores "A, "T"...
    },
    _dni: {
        type: String
    },
    _nombre: {
        type: String
    },
    _sueldo: {
        type: Number
    },
    _telefono: {
        type: Number
    },
    _horas: {
        type: Number
    },
    _hora: {
        type: Number
    },
    _viajes: {
        type: Number
    },
    _tren: {
        type: String
    }
});
// La colección de la BD (Plural siempre)
exports.Empleado = (0, mongoose_1.model)('Empleados', EmpleadosSchema);
