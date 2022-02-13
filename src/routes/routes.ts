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

        //POST
        private crearOperario = async (req: Request, res: Response) => {
           
            const {_dni,_nombre,_telefono,_sueldo,_tren,_viajes} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "operario",
                _dni: _dni,
                _nombre: _nombre,     
                _telefono: _telefono,
                _sueldo: _sueldo,
                _tren: _tren,
                _viajes: _viajes
            }
            const oSchema = new Empleado(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }
        private crearLimpiador = async (req: Request, res: Response) => {
           
            const {_dni,_nombre,_telefono,_sueldo,_horas,_tren} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "limpiador",
                _dni: _dni,
                _nombre: _nombre,     
                _telefono: _telefono,
                _sueldo: _sueldo,
                _horas:_horas,
                _tren:_tren
            }
            const oSchema = new Empleado(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }
        private crearRevisor = async (req: Request, res: Response) => {
           
            const {_dni,_nombre,_telefono,_sueldo,_horas,_viajes} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "revisor",
                _dni: _dni,
                _nombre: _nombre,     
                _telefono: _telefono,
                _sueldo: _sueldo,
                _horas:_horas,
                _viajes: _viajes
            }
            const oSchema = new Empleado(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }
        private crearCliente = async (req: Request, res: Response) => {
           
            const {_dni,_nombre,_telefono,_email} = req.body
             await db.conectarBD()
            const dSchema = {               
                
                _dni: _dni,
                _nombre: _nombre,     
                _telefono: _telefono,
                _email: _email,
                
            }
            const oSchema = new Clientes(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }
        //Viaje
        private crearTrenPasajeros = async (req: Request, res: Response) => {
           
            const {_id,_origen,_destino,_nPasajeros,_nPlazas,_precio} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "pasajeros",
                _id: _id,
                _origen: _origen,     
                _destino: _destino,
                _nPasajeros:_nPasajeros,
                _nPlazas:_nPlazas,
                _precio: _precio
                
            }
            const oSchema = new Viaje(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }
        private crearTrenMercancias = async (req: Request, res: Response) => {
           
            const {_id,_origen,_destino,_tipoCarga,_kilosCarga} = req.body
             await db.conectarBD()
            const dSchema = {               
                _tipoObjeto: "mercancias",
                _id: _id,
                _origen: _origen,     
                _destino: _destino,
                _tipoCarga:_tipoCarga,
                _kilosCarga:_kilosCarga
                
            }
            const oSchema = new Viaje(dSchema)
            await oSchema.save()
            //res.send(nombre)
                .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }


        private crearBillete = async (req: Request, res: Response) => {
            const { _dni,_idTrenPasajeros,_asiento} = req.body
            await db.conectarBD()
            let dSchema:any

               let busquedatren =await Viaje.findOne({_id:_idTrenPasajeros})
                //res.send(busquedatren)
               if(busquedatren._tipoObjeto=="pasajeros"){
                     let busquedacli =await Clientes.findOne({_dni:_dni})
                     if(busquedacli){
                        dSchema={
                            _dni:_dni,
                            _idTrenPasajeros:_idTrenPasajeros,
                            _origen:busquedatren._origen,
                            _destino:busquedatren._destino,
                            _asiento:_asiento,
                            _precio:busquedatren._precio,
                            _fecha:new Date
                        }
                        
                     }
               }else{
                   res.send("Ese tren no es de pasajeros")
               }
                
                    

            const oSchema = new Billetes(dSchema)
            await oSchema.save()
                .then( (doc: any) => res.send(doc))
                .catch( (err: any) => res.send('Error: '+ err)) 
            await db.desconectarBD()
        }
        private crearRegistro = async (req: Request, res: Response) => {
            const { _id,_tren_id,_kilometros} = req.body
            await db.conectarBD()
            let dSchema:any

               let busquedatren =await Viaje.findOne({_id:_tren_id})
               if(busquedatren._tipoObjeto=="mercancias"){
                     
                     
                        dSchema={
                            _id: _id,
                            _tren_id: _tren_id,
                            _origen:busquedatren._origen,
                            _destino:busquedatren._destino,
                            _fecha:new Date,
                            _kilometros:_kilometros
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
            const { _dni } = req.params
            await db.conectarBD()
            await Clientes.findOneAndDelete(
                    { _dni: _dni}
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
            const { _dni } = req.params
            await db.conectarBD()
            await Empleado.findOneAndDelete(
                    { _dni: _dni}
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
            const { _id } = req.params
            await db.conectarBD()
            await Viaje.findOneAndDelete(
                    { _id: _id}
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
            const { _dni } = req.params
            await db.conectarBD()
            await Billetes.findOneAndDelete(
                    { _dni: _dni}
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
        //Consulta selecta
        private getempleadoDNI = async (req: Request, res: Response) => {
            const valor = req.params._dni
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
        private getclienteDNI = async (req: Request, res: Response) => {
            const valor = req.params._dni
            await db.conectarBD()
            .then( async (mensaje) => {
                console.log(mensaje)
                const query  = await Clientes.aggregate([
                    {
                      $match:{"_dni" : valor}
          
                    }])
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })
    
        }
        private getviajeID = async (req: Request, res: Response) => {
            const valor = req.params._id
            await db.conectarBD()
            .then( async (mensaje) => {
                console.log(mensaje)
                const query  = await Viaje.aggregate([
                    {
                      $match:{"_id" : valor}
          
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
            const id =req.params._dni
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
                    query._horas,
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
                    query._hora,
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
            const dni = req.params._dni
            const telefono = req.params._telefono
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
            const dni = req.params._dni
            const salario = req.params._sueldo
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
            const dni = req.params._dni
            const idTren = req.params._tren
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
            const dni = req.params._dni
            const nViajes = req.params._viajes
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
            const dni = req.params._dni
            const nViajes = req.params._viajes
            const horas = req.params._horas

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
            const dni = req.params._dni
            const idTren = req.params._tren
            const horas = req.params._horas

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
            const id = req.params._id
            const origen = req.params._origen
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
            const id = req.params._id
            const destino = req.params._destino
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
            const id = req.params._id
            const tipo = req.params._tipoCarga
            const cantidad = req.params._kilosCarga
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
            const id = req.params._id
            const precio = req.params._precio
            
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

        this._router.get('/salarios/:_dni', this.calcularSalario)
        this._router.get('/viaje/:_id', this.getviajeID)
        this._router.get('/clientes/:_dni', this.getclienteDNI)
        this._router.get('/empleado/:_dni', this.getempleadoDNI)
        
        

        //DELETE
         this._router.delete('/deleteCliente/:_dni', this.deleteCliente)
         this._router.delete('/deleteEmpleado/:_dni', this.deleteEmpleados)
         this._router.delete('/deleteTrenes/:_id', this.deleteTrenes)
         this._router.delete('/deleteBilletes/:_dni', this.deleteBilletes)
         this._router.delete('/deleteRegistros/:_id', this.deleteRegistros)

        //UPDATE
        //Cliente
        this._router.put('/actualizarTlfCli/:_dni/:_telefono', this.actualizarTlfCliente)

        //Empleado
        this._router.put('/actualizarSalEmp/:_dni/:_sueldo', this.actualizarSalarioEmpleado)

            //Operario
            this._router.put('/actualizarTrenOpe/:_dni/:_tren', this.actualizarTrenOperario)
            this._router.put('/actualizarViajesOpe/:_dni/:_viajes', this.actualizarViajesOperario)

            //Revisor
            this._router.put('/actualizarViajeHoras/:_dni/:_viajes/:_horas', this.actualizarViajesHorasRevisor)

            //Limpiador
            this._router.put('/actualizarHorasTren/:_dni/:_horas/:_tren', this.actualizarHorasTrenLimpiador)
        
        //Viajes
        this._router.put('/actualizarOrigenViaje/:_id/:_origen', this.actualizarOrigenViajes)
        this._router.put('/actualizarDestinoViaje/:_id/:_destino', this.actualizarDestinoViajes)
        
            //Mercancias
            this._router.put('/actualizarCarga/:_id/:_tipoCarga/:_kilosCarga', this.actualizarCarga)

            //Pasajeros
            this._router.put('/actualizarPrecio/:_id/:_precio', this.actualizarPrecio)

        
        
        
        
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router

//Construccion de pagina por defecto
let title = '<h1>API-RES Trenes</h1><hr>Autor:Alvaro Lucio'
let explicacion = '<p>Para más información: <a href="https://github.com/lucioceaalvaro/ProyectoTrenes">Repositorio Github</a></p>'
let html = title + explicacion  