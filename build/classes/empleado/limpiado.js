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
exports.Limpiador = void 0;
const funcioenes_1 = require("../../funcioenes");
const empleado_1 = require("./empleado");
class Limpiador extends empleado_1.Empleado {
    constructor(dni, nombre, telefono, sueldo, horas, tren) {
        super(dni, nombre, telefono, sueldo);
        this._horas = horas;
        this._tren = tren;
    }
    get horas() {
        return this._horas;
    }
    get tren() {
        return this._tren;
    }
    //SI es de pasajeros *2 mercancias por *3
    salario() {
        return __awaiter(this, void 0, void 0, function* () {
            let sueldocalculado;
            sueldocalculado = yield (0, funcioenes_1.calcularSueldo)(this.dni, this.sueldo);
            if (this._horas >= 200) {
                sueldocalculado = this.sueldo * 1.20;
            }
            else if (this._horas >= 100) {
                sueldocalculado = this.sueldo * 1.10;
            }
            else {
                sueldocalculado = this.sueldo * 1.02;
            }
            let sueldofinal = sueldocalculado;
            return sueldofinal;
        });
    }
}
exports.Limpiador = Limpiador;
