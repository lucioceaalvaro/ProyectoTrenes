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
        this.crearOperario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, telefono, sueldo, tren, viajes } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "operario",
                _dni: dni,
                _nombre: nombre,
                _telefono: telefono,
                _sueldo: sueldo,
                _tren: tren,
                _viajes: viajes
            };
            const oSchema = new empleado_1.Empleado(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearLimpiador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, telefono, sueldo, horas, idTren } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "limpiador",
                _dni: dni,
                _nombre: nombre,
                _telefono: telefono,
                _sueldo: sueldo,
                _horas: horas,
                _tren: idTren
            };
            const oSchema = new empleado_1.Empleado(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearRevisor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, telefono, sueldo, horas, viajes } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "revisor",
                _dni: dni,
                _nombre: nombre,
                _telefono: telefono,
                _sueldo: sueldo,
                _horas: horas,
                _viajes: viajes
            };
            const oSchema = new empleado_1.Empleado(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, telefono, email } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "Operario",
                _dni: dni,
                _nombre: nombre,
                _telefono: telefono,
                _email: email,
            };
            const oSchema = new clientes_1.Clientes(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearTrenPasajeros = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, origen, destino, nPasajeros, nPlazas, precio } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "pasajeros",
                _id: id,
                _origen: origen,
                _destino: destino,
                _nPasajeros: nPasajeros,
                _nPlazas: nPlazas,
                _precio: precio
            };
            const oSchema = new viaje_1.Viaje(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearTrenMercancias = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, origen, destino, carga, cantidad } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: "mercancias",
                _id: id,
                _origen: origen,
                _destino: destino,
                _tipoCarga: carga,
                _kilosCarga: cantidad
            };
            const oSchema = new viaje_1.Viaje(dSchema);
            yield oSchema.save()
                //res.send(nombre)
                .then((doc) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearBillete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, idTren, Asiento, Precio } = req.body;
            yield database_1.db.conectarBD();
            let dSchema;
            let busquedatren = yield viaje_1.Viaje.findOne({ _id: idTren });
            //res.send(busquedatren)
            if (busquedatren._tipoObjeto == "pasajeros") {
                let busquedacli = yield clientes_1.Clientes.findOne({ _dni: dni });
                if (busquedacli) {
                    dSchema = {
                        _dni: dni,
                        _idTrenPasajeros: idTren,
                        _origen: busquedatren._origen,
                        _destino: busquedatren._destino,
                        _asiento: Asiento,
                        _precio: busquedatren._precio,
                        _fecha: new Date
                    };
                    // const oSchema = new Viaje(dSchema)
                    // await oSchema.save()
                }
            }
            else {
                res.send("Ese tren no es de pasajeros");
            }
            //CONTADOR DE PLAZAS 
            // let tren=await Tren.fin
            // let contadorAsi=await Tren.findOneAndUpdate(
            //     {_id: idTren},
            //     {
            //         _tipoObjeto: "Pasajeros",
            //         _id:id,
            //         _origen:origen,
            //          _destino:destino,
            //         _nPasajeros:nPasajeros,
            //          _precio:precio
            //     }
            // )
            const oSchema = new billetes_1.Billetes(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.crearRegistro = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, tren_id, kilometros } = req.body;
            yield database_1.db.conectarBD();
            let dSchema;
            let busquedatren = yield viaje_1.Viaje.findOne({ _id: tren_id });
            if (busquedatren._tipoObjeto == "mercancias") {
                dSchema = {
                    _id: id,
                    _tren_id: tren_id,
                    _origen: busquedatren._origen,
                    _destino: busquedatren._destino,
                    _precio: busquedatren._precio,
                    _fecha: new Date,
                    _kilometros: kilometros
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
            const { dni } = req.params;
            yield database_1.db.conectarBD();
            yield clientes_1.Clientes.findOneAndDelete({ _dni: dni })
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
            const { dni } = req.params;
            yield database_1.db.conectarBD();
            yield empleado_1.Empleado.findOneAndDelete({ _dni: dni })
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
            const { idTren } = req.params;
            yield database_1.db.conectarBD();
            yield viaje_1.Viaje.findOneAndDelete({ _id: idTren })
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
            const { dni } = req.params;
            yield database_1.db.conectarBD();
            yield billetes_1.Billetes.findOneAndDelete({ _dni: dni })
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
            const { id } = req.params;
            yield database_1.db.conectarBD();
            yield registro_1.Registros.findOneAndDelete({ _id: id })
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
        this.getempleadoDNI = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.valor;
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
        this.calcularSalario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.db.conectarBD();
                const id = req.params.valor;
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
                    tmpRevisor = new revisor_1.Revisor(query._dni, query._nombre, query._telefono, query._sueldo, query.horas, query._viajes);
                    let salario = tmpRevisor.salario().toString();
                    res.send(salario);
                }
                else if (query._tipoObjeto == "limpiador") {
                    tmpLimpiador = new limpiado_1.Limpiador(query._dni, query._nombre, query._telefono, query._sueldo, query.hora, query._tren);
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
            const dni = req.params.dni;
            const telefono = req.params.telefono;
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
            const dni = req.params.dni;
            const salario = req.params.salario;
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
            const dni = req.params.dni;
            const idTren = req.params.idTren;
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
            const dni = req.params.dni;
            const nViajes = req.params.nViajes;
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
            const dni = req.params.dni;
            const nViajes = req.params.nViajes;
            const horas = req.params.horas;
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
            const dni = req.params.dni;
            const idTren = req.params.idTren;
            const horas = req.params.horas;
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
            const id = req.params.id;
            const origen = req.params.origen;
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
            const id = req.params.id;
            const destino = req.params.destino;
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
            const id = req.params.id;
            const tipo = req.params.tipocarga;
            const cantidad = req.params.cantidad;
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
            const id = req.params.id;
            const precio = req.params.precio;
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
    // private calcularSalario = async (req: Request, res: Response) => {
    //     await db.conectarBD()
    //     const id = req.params.id
    //     let tmpEmpleado: Empleado
    //     const query = await Emp.findOne({ _id: id })
    //     if (query._tipoObjeto == "Directivo") {
    //         tmpEmpleado = new Directivo(query._id,
    //             query._nombre,
    //             query._telefono,
    //             query._direccion,
    //             query._iban,
    //             query._sueldo,
    //             query._fecha,
    //             query._nivel)
    //         let salario = tmpEmpleado.salario().toString()
    //         res.send(salario)
    //     } else if (query._tipoObjeto == "Limpiador") {
    //         tmpEmpleado = new Limpiador(query._id,
    //             query._nombre,
    //             query._telefono,
    //             query._direccion,
    //             query._iban,
    //             query._sueldo,
    //             query._fecha,
    //             query._empresa)
    //         let salario = tmpEmpleado.salario().toString()
    //         res.send(salario)
    //     } else if (query._tipoObjeto == "Comercial") {
    //         tmpEmpleado = new Comercial(query._id,
    //             query._nombre,
    //             query._telefono,
    //             query._direccion,
    //             query._iban,
    //             query._sueldo,
    //             query._fecha,
    //             query._horas)
    //         let salario = tmpEmpleado.salario().toString()
    //         res.send(salario)
    //     }
    //     await db.desconectarBD()
    // }
    // private crearPrestamo = async (req: Request, res: Response) => {
    //     await db.conectarBD()
    //     const dniCli = req.params.id
    //     const prestamo = parseInt(req.params.prestamo)
    //     let tmpCliente: Cliente
    //     let dCliente: tCliente2
    //     let interes: number
    //     let fecha: Date = new Date()
    //     let plazo: Date
    //     let query: any = await Cli.find({ _id: dniCli })
    //     let sSchema: any
    //     let sSchemaReg: tRegistro = {
    //         _idComercial: null,
    //         _idCliente: null,
    //         _capitalCliente: null,
    //         _prestamo: null,
    //         _interes: null,
    //         _plazo: null,
    //     }
    //     for (dCliente of query) {
    //         if (dCliente._tipoObjeto == "Personal") {
    //             tmpCliente = new Persona(dCliente._id,
    //                                     dCliente._nombre,
    //                                     dCliente._telefono,
    //                                     dCliente._direccion,
    //                                     dCliente._capital,
    //                                     dCliente._ingresos,
    //                                     dCliente._comercial)
    //             if (prestamo < 10000) {
    //                 interes = 0.05
    //                 fecha.setMonth(fecha.getMonth() + 6)
    //                 plazo = fecha
    //             } else if (prestamo < 50000) {
    //                 interes = 0.07
    //                 fecha.setFullYear(fecha.getFullYear() + 2)
    //                 plazo = fecha
    //             } else {
    //                 interes = 0.09
    //                 fecha.setFullYear(fecha.getFullYear() + 10)
    //                 plazo = fecha
    //             }
    //             sSchemaReg._idComercial = dCliente._comercial
    //             sSchemaReg._idCliente = dCliente._id
    //             sSchemaReg._capitalCliente = dCliente._capital
    //             sSchemaReg._prestamo = prestamo
    //             sSchemaReg._interes = interes
    //             sSchemaReg._plazo = plazo
    //             sSchema = new Reg(sSchemaReg)
    //             await sSchema.save()
    //             .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
    //             .catch((err: any) => res.send('Error: ' + err))
    //             }
    //     }
    //     await db.desconectarBD()
    // }
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
        this._router.get('/salarios/:valor', this.calcularSalario);
        //this._router.get('/clientes/:valor', this.getclienteDNI)
        this._router.get('/empleado/:valor', this.getempleadoDNI);
        //this._router.get('/reserva/:valor', this.getreservaDNI)
        //DELETE
        this._router.delete('/deleteCliente/:dni', this.deleteCliente);
        this._router.delete('/deleteEmpleado/:dni', this.deleteEmpleados);
        this._router.delete('/deleteTrenes/:idTren', this.deleteTrenes);
        this._router.delete('/deleteBilletes/:dni', this.deleteBilletes);
        this._router.delete('/deleteRegistros/:id', this.deleteRegistros);
        //UPDATE
        //Cliente
        this._router.put('/actualizarTlfCli/:dni/:telefono', this.actualizarTlfCliente);
        //Empleado
        this._router.put('/actualizarSalEmp/:dni/:salario', this.actualizarSalarioEmpleado);
        //Operario
        this._router.put('/actualizarTrenOpe/:dni/:idTren', this.actualizarTrenOperario);
        this._router.put('/actualizarTrenOpe/:dni/:nViajes', this.actualizarViajesOperario);
        //Revisor
        this._router.put('/actualizarViajeHoras/:dni/:nViajes/:horas', this.actualizarViajesHorasRevisor);
        //Limpiador
        this._router.put('/actualizarHorasTren/:dni/:horas/:idTren', this.actualizarHorasTrenLimpiador);
        //Viajes
        this._router.put('/actualizarOrigenViaje/:id/:origen', this.actualizarOrigenViajes);
        this._router.put('/actualizarDestinoViaje/:id/:destino', this.actualizarDestinoViajes);
        //Mercancias
        this._router.put('/actualizarCarga/:id/:tipocarga/:cantidad', this.actualizarCarga);
        //Pasajeros
        this._router.put('/actualizarPrecio/:id/:precio', this.actualizarPrecio);
        // this._router.get('/buscar/:id', this.buscarComercial)
        // this._router.put('/actualizar/:id/:comercial', this.actualizarCliente)
        // this._router.delete('/borrar/:id', this.borrarCliente)
        // this._router.post('/salario/:id', this.calcularSalario)
        // this._router.post('/renta/:id', this.calcularRenta)
        // this._router.post('/ganancia/:id', this.mediaGanancia)
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
//Construccion del index
let title = '<h1>API Banco</h1><br>';
let explicacion = '<p>Para más información: <a href="https://github.com/">Github</a></p>';
let html = title + explicacion;