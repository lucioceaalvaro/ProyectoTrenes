"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mercancias = void 0;
const viaje_1 = require("./viaje");
class Mercancias extends viaje_1.Viajes {
    constructor(tipoObjeto, id, origen, kilosCarga, destino, carga) {
        super(tipoObjeto, id, origen, destino);
        this._tipoCarga = carga;
        this._kilosCarga = kilosCarga;
    }
    get carga() {
        return this._tipoCarga;
    }
    get KilosCarga() {
        return this._kilosCarga;
    }
}
exports.Mercancias = Mercancias;
