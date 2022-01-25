import { Request, Response, Router } from 'express'
import { Operario } from '../classes/empleado/operario'
import {iOperario,Empleado, tEmpleado} from '../model/empleado'
import { db } from '../database/database'
import { Viaje } from '../model/viaje'
import { Cliente } from '../classes/cliente'
import { Clientes } from '../model/clientes'
import { Billetes } from '../model/billetes'
import { Registros } from '../model/registro'
//import { Empleado } from '../classes/empleado/empleado'
import { Revisor } from '../classes/empleado/revisor'
import { Limpiador } from '../classes/empleado/limpiado'
//import { Empleado } from '../classes/empleado/empleado'


class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router() {
        return this._router
    }

    private index = async (req: Request, res: Response) => {
        res.send(html)
    }

        private getEmpleados = async (req: Request, res: Response) => {
            await db.conectarBD()
            .then( async (mensaje) => {
                console.log(mensaje)
                const query  = await Empleado.find({})
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })

            db.desconectarBD()
        }
        private getClientes = async (req: Request, res: Response) => {
            await db.conectarBD()
            .then( async (mensaje) => {
                console.log(mensaje)
                const query  = await Clientes.find({})
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })

            db.desconectarBD()
        }
        private getViajes = async (req: Request, res: Response) => {
            await db.conectarBD()
            .then( async (mensaje) => {
                console.log(mensaje)
                const query  = await Viaje.find({})
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })

            db.desconectarBD()
        }
        private getBilletes = async (req: Request, res: Response) => {
            await db.conectarBD()
            .then( async (mensaje) => {
                console.log(mensaje)
                const query  = await Billetes.find({})
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })

            db.desconectarBD()
        }
        private getRegistros = async (req: Request, res: Response) => {
            await db.conectarBD()
            .then( async (mensaje) => {
                console.log(mensaje)
                const query  = await Registros.find({})
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })

            db.desconectarBD()
        }


        private crearOperario = async (req: Request, res: Response) => {
           
            const {dni,nombre,telefono,sueldo,tren,viajes} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "operario",
                _dni: dni,
                _nombre: nombre,     
                _telefono: telefono,
                _sueldo: sueldo,
                _tren: tren,
                _viajes: viajes
            }
            const oSchema = new Empleado(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }
        private crearLimpiador = async (req: Request, res: Response) => {
           
            const {dni,nombre,telefono,sueldo,horas,idTren} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "limpiador",
                _dni: dni,
                _nombre: nombre,     
                _telefono: telefono,
                _sueldo: sueldo,
                _horas:horas,
                _tren:idTren
            }
            const oSchema = new Empleado(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }
        private crearRevisor = async (req: Request, res: Response) => {
           
            const {dni,nombre,telefono,sueldo,horas,viajes} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "revisor",
                _dni: dni,
                _nombre: nombre,     
                _telefono: telefono,
                _sueldo: sueldo,
                _horas:horas,
                _viajes: viajes
            }
            const oSchema = new Empleado(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }


        private crearCliente = async (req: Request, res: Response) => {
           
            const {dni,nombre,telefono,email} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "Operario",
                _dni: dni,
                _nombre: nombre,     
                _telefono: telefono,
                _email: email,
                
            }
            const oSchema = new Clientes(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }


        private crearTrenPasajeros = async (req: Request, res: Response) => {
           
            const {id,origen,destino,nPasajeros,nPlazas,precio} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "pasajeros",
                _id: id,
                _origen: origen,     
                _destino: destino,
                _nPasajeros:nPasajeros,
                _nPlazas:nPlazas,
                _precio: precio
                
            }
            const oSchema = new Viaje(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }
        private crearTrenMercancias = async (req: Request, res: Response) => {
           
            const {id,origen,destino,carga,cantidad} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "mercancias",
                _id: id,
                _origen: origen,     
                _destino: destino,
                _tipoCarga:carga,
                _kilosCarga:cantidad
                
            }
            const oSchema = new Viaje(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }


        private crearBillete = async (req: Request, res: Response) => {
            const { dni,idTren,Asiento,Precio} = req.body
            await db.conectarBD()
            let dSchema:any

               let busquedatren =await Viaje.findOne({_id:idTren})
                //res.send(busquedatren)
               if(busquedatren._tipoObjeto=="pasajeros"){
                     let busquedacli =await Clientes.findOne({_dni:dni})
                     if(busquedacli){
                        dSchema={
                            _dni:dni,
                            _idTrenPasajeros:idTren,
                            _origen:busquedatren._origen,
                            _destino:busquedatren._destino,
                            _asiento:Asiento,
                            _precio:busquedatren._precio,
                            _fecha:new Date
                        }
                        // const oSchema = new Viaje(dSchema)
                        // await oSchema.save()
                     }
               }else{
                   res.send("Ese tren no es de pasajeros")
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

            const oSchema = new Billetes(dSchema)
            await oSchema.save()
                .then( (doc: any) => res.send(doc))
                .catch( (err: any) => res.send('Error: '+ err)) 
            await db.desconectarBD()
        }
        private crearRegistro = async (req: Request, res: Response) => {
            const { id,tren_id,kilometros} = req.body
            await db.conectarBD()
            let dSchema:any

               let busquedatren =await Viaje.findOne({_id:tren_id})
               if(busquedatren._tipoObjeto=="mercancias"){
                     
                     
                        dSchema={
                            _id: id,
                            _tren_id: tren_id,
                            _origen:busquedatren._origen,
                            _destino:busquedatren._destino,
                            _precio:busquedatren._precio,
                            _fecha:new Date,
                            _kilometros:kilometros
                        }
                        
                     
               }else{
                   res.send("Ese tren es de pasajeros")
               }
                
                    

            const oSchema = new Registros(dSchema)
            await oSchema.save()
                .then( (doc: any) => res.send(doc))
                .catch( (err: any) => res.send('Error: '+ err)) 
            await db.desconectarBD()
        }

        //DELETE
        //Cliente
        private deleteCliente = async (req: Request, res: Response) => {
            const { dni } = req.params
            await db.conectarBD()
            await Clientes.findOneAndDelete(
                    { _dni: dni}
                )
                .then( (doc: any) => {
                        if (doc == null) {
                            res.send(`No encontrado`)
                        }else {
                            res.send('Borrado correcto: '+ doc)
                        }
                })
                .catch( (err: any) => res.send('Error: '+ err)) 
            await db.desconectarBD()
        }
        //Empleados
        private deleteEmpleados = async (req: Request, res: Response) => {
            const { dni } = req.params
            await db.conectarBD()
            await Empleado.findOneAndDelete(
                    { _dni: dni}
                )
                .then( (doc: any) => {
                        if (doc == null) {
                            res.send(`No encontrado`)
                        }else {
                            res.send('Borrado correcto: '+ doc)
                        }
                })
                .catch( (err: any) => res.send('Error: '+ err)) 
            db.desconectarBD()
        }
        //Trenes
        private deleteTrenes = async (req: Request, res: Response) => {
            const { idTren } = req.params
            await db.conectarBD()
            await Viaje.findOneAndDelete(
                    { _id: idTren}
                )
                .then( (doc: any) => {
                        if (doc == null) {
                            res.send(`No encontrado`)
                        }else {
                            res.send('Borrado correcto: '+ doc)
                        }
                })
                .catch( (err: any) => res.send('Error: '+ err)) 
            await db.desconectarBD()
        }
        //Billetes
        private deleteBilletes = async (req: Request, res: Response) => {
            const { dni } = req.params
            await db.conectarBD()
            await Billetes.findOneAndDelete(
                    { _dni: dni}
                )
                .then( (doc: any) => {
                        if (doc == null) {
                            res.send(`No encontrado`)
                        }else {
                            res.send('Borrado correcto: '+ doc)
                        }
                })
                .catch( (err: any) => res.send('Error: '+ err)) 
            await db.desconectarBD()
        }
        private deleteRegistros = async (req: Request, res: Response) => {
            const { id } = req.params
            await db.conectarBD()
            await Registros.findOneAndDelete(
                    { _id: id}
                )
                .then( (doc: any) => {
                        if (doc == null) {
                            res.send(`No encontrado`)
                        }else {
                            res.send('Borrado correcto: '+ doc)
                        }
                })
                .catch( (err: any) => res.send('Error: '+ err)) 
            await db.desconectarBD()
        }

        private getempleadoDNI = async (req: Request, res: Response) => {
            const valor = req.params.valor
            await db.conectarBD()
            .then( async (mensaje) => {
                console.log(mensaje)
                const query  = await Empleado.aggregate([
                    {
                      $match:{"_dni" : valor}
          
                    }])
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })
    
        }


        private calcularSalario = async (req:Request, res:Response) => {
            try {
            await db.conectarBD()
            const id =req.params.valor
            let tmpOperario :Operario
            let tmpRevisor :Revisor
            let tmpLimpiador :Limpiador
            //let prueba:ERecepcion
            const query  = await Empleado.findOne({_dni:id})
            
            
            if(query._tipoObjeto =="operario"){
                tmpOperario=new Operario (
                    
                    query._dni,
                    query._nombre,
                    query._telefono,
                    query._sueldo,
                    query._tren,
                    query._viajes
                )
                let salario =Promise.resolve(tmpOperario.salario())
                res.send((await salario).toString())
            }else if(query._tipoObjeto =="revisor"){
                tmpRevisor=new Revisor (
                    
                    query._dni,
                    query._nombre,
                    query._telefono,
                    query._sueldo,
                    query.horas,
                    query._viajes
                    
                )
                let salario =tmpRevisor.salario().toString()
                res.send(salario)
            }else if(query._tipoObjeto =="limpiador"){
                tmpLimpiador=new Limpiador (
                    
                    query._dni,
                    query._nombre,
                    query._telefono,
                    query._sueldo,
                    query.hora,
                    query._tren
                    
                )
                let salario =Promise.resolve(tmpLimpiador.salario())
                res.send((await salario).toString())
            }
            await db.desconectarBD()
            } catch (error) {
               res.send(error)
            }
            
        }
        //UPDATE
        private actualizarTlfCliente = async (req: Request, res: Response) => {
            await db.conectarBD()
            const dni = req.params.dni
            const telefono = req.params.telefono
            await Clientes.findOneAndUpdate(
                { _dni: dni },
                {
                    _telefono: telefono
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
        }
        //Empleados
        private actualizarSalarioEmpleado = async (req: Request, res: Response) => {
            await db.conectarBD()
            const dni = req.params.dni
            const salario = req.params.salario
            await Empleado.findOneAndUpdate(
                { _dni: dni },
                {
                    _sueldo: salario
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
        }
        //Operario
        private actualizarTrenOperario = async (req: Request, res: Response) => {
            await db.conectarBD()
            const dni = req.params.dni
            const idTren = req.params.idTren
            await Empleado.findOneAndUpdate(
                { _dni: dni,
                  _tipoObjeto:"operario"
                },
                {
                    _tren: idTren
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
        }
        private actualizarViajesOperario = async (req: Request, res: Response) => {
            await db.conectarBD()
            const dni = req.params.dni
            const nViajes = req.params.nViajes
            await Empleado.findOneAndUpdate(
                { _dni: dni,
                  _tipoObjeto:"operario"
                },
                {
                    _viajes: nViajes
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
        }
        //Revisor
        private actualizarViajesHorasRevisor = async (req: Request, res: Response) => {
            await db.conectarBD()
            const dni = req.params.dni
            const nViajes = req.params.nViajes
            const horas = req.params.horas

            await Empleado.findOneAndUpdate(
                { _dni: dni,
                  _tipoObjeto:"revisor"
                },
                {
                    _horas: horas,
                    _viajes: nViajes
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
        }
        //Limpiador
        private actualizarHorasTrenLimpiador = async (req: Request, res: Response) => {
            await db.conectarBD()
            const dni = req.params.dni
            const idTren = req.params.idTren
            const horas = req.params.horas

            await Empleado.findOneAndUpdate(
                { _dni: dni,
                  _tipoObjeto:"limpiador"
                },
                {
                    _horas: horas,
                    _tren: idTren
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
        }
        
        //Viajes
        private actualizarOrigenViajes = async (req: Request, res: Response) => {
            await db.conectarBD()
            const id = req.params.id
            const origen = req.params.origen
            await Viaje.findOneAndUpdate(
                { _id: id
                },
                {
                    _origen: origen
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
        }
        private actualizarDestinoViajes = async (req: Request, res: Response) => {
            await db.conectarBD()
            const id = req.params.id
            const destino = req.params.destino
            await Viaje.findOneAndUpdate(
                { _id: id
                },
                {
                    _destino: destino
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
        }


        //Mercancias
        private actualizarCarga = async (req: Request, res: Response) => {
            await db.conectarBD()
            const id = req.params.id
            const tipo = req.params.tipocarga
            const cantidad = req.params.cantidad
            await Viaje.findOneAndUpdate(
                { _id: id,
                    _tipoObjeto: "mercancias"
                
                },
                {
                    _tipoCarga:tipo,
                    _kilosCarga:cantidad
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
        }
        //Pasajeros
        private actualizarPrecio = async (req: Request, res: Response) => {
            await db.conectarBD()
            const id = req.params.id
            const precio = req.params.precio
            
            await Viaje.findOneAndUpdate(
                { _id: id,
                    _tipoObjeto: "pasajeros"
                
                },
                {
                    _precio:precio,
                    
                }
            )
                .then((doc: any) => res.send('Se han actualizado los datos:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))

            await db.desconectarBD()
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
        this._router.get('/', this.index)

        //GET

        
        this._router.get('/clientes', this.getClientes)
        this._router.get('/empleados', this.getEmpleados)
        this._router.get('/viajes', this.getViajes)
        this._router.get('/billetes', this.getBilletes)
        this._router.get('/registro', this.getRegistros)



        //POST 

        
        this._router.post('/crearOperario', this.crearOperario)
        this._router.post('/crearLimpiador', this.crearLimpiador)
        this._router.post('/crearRevisor', this.crearRevisor)
        this._router.post('/crearRegistro', this.crearRegistro)
        this._router.post('/crearBilletes', this.crearBillete)
        this._router.post('/crearCliente', this.crearCliente)
        this._router.post('/crearTrenPasajeros', this.crearTrenPasajeros)
        this._router.post('/crearTrenMercancias', this.crearTrenMercancias)
        

        //GET con ID 

        this._router.get('/salarios/:valor', this.calcularSalario)
            
        //this._router.get('/clientes/:valor', this.getclienteDNI)
        this._router.get('/empleado/:valor', this.getempleadoDNI)
        //this._router.get('/reserva/:valor', this.getreservaDNI)
        

        //DELETE
         this._router.delete('/deleteCliente/:dni', this.deleteCliente)
         this._router.delete('/deleteEmpleado/:dni', this.deleteEmpleados)
         this._router.delete('/deleteTrenes/:idTren', this.deleteTrenes)
         this._router.delete('/deleteBilletes/:dni', this.deleteBilletes)
         this._router.delete('/deleteRegistros/:id', this.deleteRegistros)

        //UPDATE
        //Cliente
        this._router.put('/actualizarTlfCli/:dni/:telefono', this.actualizarTlfCliente)

        //Empleado
        this._router.put('/actualizarSalEmp/:dni/:salario', this.actualizarSalarioEmpleado)

            //Operario
            this._router.put('/actualizarTrenOpe/:dni/:idTren', this.actualizarTrenOperario)
            this._router.put('/actualizarTrenOpe/:dni/:nViajes', this.actualizarViajesOperario)

            //Revisor
            this._router.put('/actualizarViajeHoras/:dni/:nViajes/:horas', this.actualizarViajesHorasRevisor)

            //Limpiador
            this._router.put('/actualizarHorasTren/:dni/:horas/:idTren', this.actualizarHorasTrenLimpiador)
        
        //Viajes
        this._router.put('/actualizarOrigenViaje/:id/:origen', this.actualizarOrigenViajes)
        this._router.put('/actualizarDestinoViaje/:id/:destino', this.actualizarDestinoViajes)
        
            //Mercancias
            this._router.put('/actualizarCarga/:id/:tipocarga/:cantidad', this.actualizarCarga)

            //Pasajeros
            this._router.put('/actualizarPrecio/:id/:precio', this.actualizarPrecio)

        
        
        // this._router.get('/buscar/:id', this.buscarComercial)
        // this._router.put('/actualizar/:id/:comercial', this.actualizarCliente)
        // this._router.delete('/borrar/:id', this.borrarCliente)
        // this._router.post('/salario/:id', this.calcularSalario)
        // this._router.post('/renta/:id', this.calcularRenta)
        // this._router.post('/ganancia/:id', this.mediaGanancia)
        
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router

//Construccion del index
let title = '<h1>API Banco</h1><br>'
let explicacion = '<p>Para más información: <a href="https://github.com/">Github</a></p>'
let html = title + explicacion  