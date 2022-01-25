"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(dni, nombre, email, telefono) {
        this._dni = dni;
        this._nombre = nombre;
        this._email = email;
        this._telefono = telefono;
    }
    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._nombre;
    }
    get email() {
        return this._email;
    }
    get telefono() {
        return this._telefono;
    }
}
exports.Cliente = Cliente;
