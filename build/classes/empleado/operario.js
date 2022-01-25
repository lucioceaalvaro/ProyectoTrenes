"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operario = void 0;
const funcioenes_1 = require("../../funcioenes");
const empleado_1 = require("./empleado");
class Operario extends empleado_1.Empleado {
    constructor(dni, nombre, telefono, sueldo, tren, viajes) {
        super(dni, nombre, telefono, sueldo);
        this._tren = tren;
        this._viajes = viajes;
    }
    get tren() {
        return this._tren;
    }
    salario() {
        return __awaiter(this, void 0, void 0, function* () {
            let sueldocalculado;
            sueldocalculado = yield (0, funcioenes_1.calcularSueldo)(this.dni, this.sueldo);
            let sueldofinal = sueldocalculado * 1;
            return sueldofinal;
        });
    }
    multiplicadorViajes() {
        let multiViaje;
        if (this._viajes <= 50)
            multiViaje = 1;
        else if (this._viajes > 50 && this._viajes <= 100)
            multiViaje = 1.1;
        else
            multiViaje = 1.2;
        return multiViaje;
    }
}
exports.Operario = Operario;
