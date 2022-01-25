"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(dni, nombre, telefono, sueldo) {
        this._dni = dni,
            this._nombre = nombre,
            this._telefono = telefono,
            this._sueldo = sueldo;
    }
    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._nombre;
    }
    get telefono() {
        return this._telefono;
    }
    get sueldo() {
        return this._sueldo;
    }
    salario() {
    }
}
exports.Empleado = Empleado;
