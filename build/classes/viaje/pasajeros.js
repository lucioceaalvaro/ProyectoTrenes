"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pasajeros = void 0;
const viaje_1 = require("./viaje");
class Pasajeros extends viaje_1.Viajes {
    constructor(tipoObjeto, id, origen, destino, nPasajeros, precio, nPlazas) {
        super(tipoObjeto, id, origen, destino);
        this._nPasajeros = nPasajeros;
        this._precio = precio;
        this._nPlazas = nPlazas;
    }
    get nPasajeros() {
        return this._nPasajeros;
    }
    get precio() {
        return this._precio;
    }
    get nPlazas() {
        return this._nPlazas;
    }
}
exports.Pasajeros = Pasajeros;
