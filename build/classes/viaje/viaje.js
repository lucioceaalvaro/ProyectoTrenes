"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viajes = void 0;
class Viajes {
    constructor(tipoObjeto, id, origen, destino) {
        this._tipoObjeto = tipoObjeto,
            this._id = id,
            this._origen = origen,
            this._destino = destino;
    }
    get tipoObjeto() {
        return this._tipoObjeto;
    }
    get id() {
        return this._id;
    }
    get origen() {
        return this._origen;
    }
    get destino() {
        return this._destino;
    }
    mover() {
        //
    }
}
exports.Viajes = Viajes;
