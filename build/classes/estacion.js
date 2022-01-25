"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estacion = void 0;
class Estacion {
    constructor(nombre, ciudad, id, capacidadAlmacenes) {
        this._nombre = nombre;
        this._ciudad = ciudad;
        this._id = id;
        this._capacidadAlmacenes = capacidadAlmacenes;
    }
    get ciudad() {
        return this._ciudad;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get capacidadAlmacenes() {
        return this._capacidadAlmacenes;
    }
}
exports.Estacion = Estacion;
