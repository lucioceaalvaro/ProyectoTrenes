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
exports.routes = void 0;
const express_1 = require("express");
const operario_1 = require("../classes/empleado/operario");
const empleado_1 = require("../model/empleado");
const database_1 = require("../database/database");
const viaje_1 = require("../model/viaje");
const clientes_1 = require("../model/clientes");
const billetes_1 = require("../model/billetes");
const registro_1 = require("../model/registro");
//import { Empleado } from '../classes/empleado/empleado'
const revisor_1 = require("../classes/empleado/revisor");
const limpiado_1 = require("../classes/empleado/limpiado");
//import { Empleado } from '../classes/empleado/empleado'
class DatoRoutes {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(html);
        });
        this.getEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield empleado_1.Empleado.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield clientes_1.Clientes.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getViajes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield viaje_1.Viaje.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getBilletes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield billetes_1.Billetes.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getRegistros = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield registro_1.Registros.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        //POST
        this.crearOperario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _dni, _nombre, _telefono, _sueldo, _tren, _viajes } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "operario",
                _dni: _dni,
                _nombre: _nombre,
                _telefono: _telefono,
                _sueldo: _sueldo,
                _tren: _tren,
                _viajes: _viajes
            };
            const oSchema = new empleado_1.Empleado(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearLimpiador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _dni, _nombre, _telefono, _sueldo, _horas, _tren } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "limpiador",
                _dni: _dni,
                _nombre: _nombre,
                _telefono: _telefono,
                _sueldo: _sueldo,
                _horas: _horas,
                _tren: _tren
            };
            const oSchema = new empleado_1.Empleado(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearRevisor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _dni, _nombre, _telefono, _sueldo, _horas, _viajes } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "revisor",
                _dni: _dni,
                _nombre: _nombre,
                _telefono: _telefono,
                _sueldo: _sueldo,
                _horas: _horas,
                _viajes: _viajes
            };
            const oSchema = new empleado_1.Empleado(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _dni, _nombre, _telefono, _email } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _dni: _dni,
                _nombre: _nombre,
                _telefono: _telefono,
                _email: _email,
            };
            const oSchema = new clientes_1.Clientes(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Viaje
        this.crearTrenPasajeros = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _origen, _destino, _nPasajeros, _nPlazas, _precio } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "pasajeros",
                _id: _id,
                _origen: _origen,
                _destino: _destino,
                _nPasajeros: _nPasajeros,
                _nPlazas: _nPlazas,
                _precio: _precio
            };
            const oSchema = new viaje_1.Viaje(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearTrenMercancias = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _origen, _destino, _tipoCarga, _kilosCarga } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "mercancias",
                _id: _id,
                _origen: _origen,
                _destino: _destino,
                _tipoCarga: _tipoCarga,
                _kilosCarga: _kilosCarga
            };
            const oSchema = new viaje_1.Viaje(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearBillete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _dni, _idTrenPasajeros, _asiento } = req.body;
            yield database_1.db.conectarBD();
            let dSchema;
            let busquedatren = yield viaje_1.Viaje.findOne({ _id: _idTrenPasajeros });
            //res.send(busquedatren)
            if (busquedatren._tipoObjeto == "pasajeros") {
                let busquedacli = yield clientes_1.Clientes.findOne({ _dni: _dni });
                if (busquedacli) {
                    dSchema = {
                        _dni: _dni,
                        _idTrenPasajeros: _idTrenPasajeros,
                        _origen: busquedatren._origen,
                        _destino: busquedatren._destino,
                        _asiento: _asiento,
                        _precio: busquedatren._precio,
                        _fecha: new Date
                    };
                }
            }
            else {
                res.send("Ese tren no es de pasajeros");
            }
            const oSchema = new billetes_1.Billetes(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearRegistro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id, _tren_id, _kilometros } = req.body;
            yield database_1.db.conectarBD();
            let dSchema;
            let busquedatren = yield viaje_1.Viaje.findOne({ _id: _tren_id });
            if (busquedatren._tipoObjeto == "mercancias") {
                dSchema = {
                    _id: _id,
                    _tren_id: _tren_id,
                    _origen: busquedatren._origen,
                    _destino: busquedatren._destino,
                    _fecha: new Date,
                    _tipoCarga: busquedatren._tipoCarga,
                    _kilosCarga: busquedatren._kilosCarga,
                    _kilometros: _kilometros
                };
            }
            else {
                res.send("Ese tren es de pasajeros");
            }
            const oSchema = new registro_1.Registros(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //DELETE
        //Cliente
        this.deleteCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _dni } = req.params;
            yield database_1.db.conectarBD();
            yield clientes_1.Clientes.findOneAndDelete({ _dni: _dni })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Empleados
        this.deleteEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _dni } = req.params;
            yield database_1.db.conectarBD();
            yield empleado_1.Empleado.findOneAndDelete({ _dni: _dni })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        //Trenes
        this.deleteTrenes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            yield database_1.db.conectarBD();
            yield viaje_1.Viaje.findOneAndDelete({ _id: _id })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Billetes
        this.deleteBilletes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _dni } = req.params;
            yield database_1.db.conectarBD();
            yield billetes_1.Billetes.findOneAndDelete({ _dni: _dni })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.deleteRegistros = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            yield database_1.db.conectarBD();
            yield registro_1.Registros.findOneAndDelete({ _id: _id })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Consulta selecta
        this.getempleadoDNI = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params._dni;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield empleado_1.Empleado.aggregate([
                    {
                        $match: { "_dni": valor }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getclienteDNI = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params._dni;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield clientes_1.Clientes.aggregate([
                    {
                        $match: { "_dni": valor }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getviajeID = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params._id;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield viaje_1.Viaje.aggregate([
                    {
                        $match: { "_id": valor }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.calcularSalario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.db.conectarBD();
                const id = req.params._dni;
                let tmpOperario;
                let tmpRevisor;
                let tmpLimpiador;
                //let prueba:ERecepcion
                const query = yield empleado_1.Empleado.findOne({ _dni: id });
                if (query._tipoObjeto == "operario") {
                    tmpOperario = new operario_1.Operario(query._dni, query._nombre, query._telefono, query._sueldo, query._tren, query._viajes);
                    let salario = Promise.resolve(tmpOperario.salario());
                    res.send((yield salario).toString());
                }
                else if (query._tipoObjeto == "revisor") {
                    tmpRevisor = new revisor_1.Revisor(query._dni, query._nombre, query._telefono, query._sueldo, query._horas, query._viajes);
                    let salario = tmpRevisor.salario().toString();
                    res.send(salario);
                }
                else if (query._tipoObjeto == "limpiador") {
                    tmpLimpiador = new limpiado_1.Limpiador(query._dni, query._nombre, query._telefono, query._sueldo, query._hora, query._tren);
                    let salario = Promise.resolve(tmpLimpiador.salario());
                    res.send((yield salario).toString());
                }
                yield database_1.db.desconectarBD();
            }
            catch (error) {
                res.send(error);
            }
        });
        //UPDATE
        this.actualizarTlfCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params._dni;
            const telefono = req.params._telefono;
            yield clientes_1.Clientes.findOneAndUpdate({ _dni: dni }, {
                _telefono: telefono
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Empleados
        this.actualizarSalarioEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params._dni;
            const salario = req.params._sueldo;
            yield empleado_1.Empleado.findOneAndUpdate({ _dni: dni }, {
                _sueldo: salario
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Operario
        this.actualizarTrenOperario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params._dni;
            const idTren = req.params._tren;
            yield empleado_1.Empleado.findOneAndUpdate({ _dni: dni,
                _tipoObjeto: "operario"
            }, {
                _tren: idTren
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarViajesOperario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params._dni;
            const nViajes = req.params._viajes;
            yield empleado_1.Empleado.findOneAndUpdate({ _dni: dni,
                _tipoObjeto: "operario"
            }, {
                _viajes: nViajes
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Revisor
        this.actualizarViajesHorasRevisor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params._dni;
            const nViajes = req.params._viajes;
            const horas = req.params._horas;
            yield empleado_1.Empleado.findOneAndUpdate({ _dni: dni,
                _tipoObjeto: "revisor"
            }, {
                _horas: horas,
                _viajes: nViajes
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Limpiador
        this.actualizarHorasTrenLimpiador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params._dni;
            const idTren = req.params._tren;
            const horas = req.params._horas;
            yield empleado_1.Empleado.findOneAndUpdate({ _dni: dni,
                _tipoObjeto: "limpiador"
            }, {
                _horas: horas,
                _tren: idTren
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Viajes
        this.actualizarOrigenViajes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const id = req.params._id;
            const origen = req.params._origen;
            yield viaje_1.Viaje.findOneAndUpdate({ _id: id
            }, {
                _origen: origen
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarDestinoViajes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const id = req.params._id;
            const destino = req.params._destino;
            yield viaje_1.Viaje.findOneAndUpdate({ _id: id
            }, {
                _destino: destino
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Mercancias
        this.actualizarCarga = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const id = req.params._id;
            const tipo = req.params._tipoCarga;
            const cantidad = req.params._kilosCarga;
            yield viaje_1.Viaje.findOneAndUpdate({ _id: id,
                _tipoObjeto: "mercancias"
            }, {
                _tipoCarga: tipo,
                _kilosCarga: cantidad
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        //Pasajeros
        this.actualizarPrecio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const id = req.params._id;
            const precio = req.params._precio;
            yield viaje_1.Viaje.findOneAndUpdate({ _id: id,
                _tipoObjeto: "pasajeros"
            }, {
                _precio: precio,
            })
                .then((doc) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/', this.index);
        //GET
        this._router.get('/clientes', this.getClientes);
        this._router.get('/empleados', this.getEmpleados);
        this._router.get('/viajes', this.getViajes);
        this._router.get('/billetes', this.getBilletes);
        this._router.get('/registro', this.getRegistros);
        //POST 
        this._router.post('/crearOperario', this.crearOperario);
        this._router.post('/crearLimpiador', this.crearLimpiador);
        this._router.post('/crearRevisor', this.crearRevisor);
        this._router.post('/crearRegistro', this.crearRegistro);
        this._router.post('/crearBilletes', this.crearBillete);
        this._router.post('/crearCliente', this.crearCliente);
        this._router.post('/crearTrenPasajeros', this.crearTrenPasajeros);
        this._router.post('/crearTrenMercancias', this.crearTrenMercancias);
        //GET con ID 
        this._router.get('/salarios/:_dni', this.calcularSalario);
        this._router.get('/viaje/:_id', this.getviajeID);
        this._router.get('/clientes/:_dni', this.getclienteDNI);
        this._router.get('/empleado/:_dni', this.getempleadoDNI);
        //DELETE
        this._router.delete('/deleteCliente/:_dni', this.deleteCliente);
        this._router.delete('/deleteEmpleado/:_dni', this.deleteEmpleados);
        this._router.delete('/deleteTrenes/:_id', this.deleteTrenes);
        this._router.delete('/deleteBilletes/:_dni', this.deleteBilletes);
        this._router.delete('/deleteRegistros/:_id', this.deleteRegistros);
        //UPDATE
        //Cliente
        this._router.put('/actualizarTlfCli/:_dni/:_telefono', this.actualizarTlfCliente);
        //Empleado
        this._router.put('/actualizarSalEmp/:_dni/:_sueldo', this.actualizarSalarioEmpleado);
        //Operario
        this._router.put('/actualizarTrenOpe/:_dni/:_tren', this.actualizarTrenOperario);
        this._router.put('/actualizarViajesOpe/:_dni/:_viajes', this.actualizarViajesOperario);
        //Revisor
        this._router.put('/actualizarViajeHoras/:_dni/:_viajes/:_horas', this.actualizarViajesHorasRevisor);
        //Limpiador
        this._router.put('/actualizarHorasTren/:_dni/:_horas/:_tren', this.actualizarHorasTrenLimpiador);
        //Viajes
        this._router.put('/actualizarOrigenViaje/:_id/:_origen', this.actualizarOrigenViajes);
        this._router.put('/actualizarDestinoViaje/:_id/:_destino', this.actualizarDestinoViajes);
        //Mercancias
        this._router.put('/actualizarCarga/:_id/:_tipoCarga/:_kilosCarga', this.actualizarCarga);
        //Pasajeros
        this._router.put('/actualizarPrecio/:_id/:_precio', this.actualizarPrecio);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
//Construccion de pagina por defecto
let title = '<h1>API-RES Trenes</h1><hr>Autor:Alvaro Lucio';
let explicacion = '<p>Para más información: <a href="https://github.com/lucioceaalvaro/ProyectoTrenes">Repositorio Github</a></p>';
let html = title + explicacion;
