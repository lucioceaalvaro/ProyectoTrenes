"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revisor = void 0;
const empleado_1 = require("./empleado");
class Revisor extends empleado_1.Empleado {
    constructor(dni, nombre, telefono, sueldo, horas, viajes) {
        super(dni, nombre, telefono, sueldo);
        this._horas = horas;
        this._viajes = viajes;
    }
    get horas() {
        return this._horas;
    }
    get viajes() {
        return this._viajes;
    }
    salario() {
        let sueldocalculado;
        if (this._viajes >= 15) {
            sueldocalculado = this.sueldo * 1.10;
        }
        else if (this._viajes >= 50) {
            sueldocalculado = this.sueldo * 1.25;
        }
        else {
            sueldocalculado = this.sueldo * 1.05;
        }
        if (this._horas >= 200) {
            sueldocalculado = this.sueldo * 1.20;
        }
        else if (this._horas >= 100) {
            sueldocalculado = this.sueldo * 1.10;
        }
        else {
            sueldocalculado = this.sueldo * 1.02;
        }
        return sueldocalculado;
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
exports.Revisor = Revisor;
