export abstract class Empleado {
    private _dni:string;
    private _nombre:string;
    private _telefono:number;
    private _sueldo:number
    constructor(dni:string,
        nombre:string,
        telefono:number,
        sueldo:number){
            this._dni=dni,
            this._nombre=nombre,
            this._telefono=telefono,
            this._sueldo=sueldo
        }

    get dni(){
        return this._dni
    }
    get nombre(){
        return this._nombre
    }
    get telefono(){
        return this._telefono
    }
    get sueldo(){
        return this._sueldo
    }

    salario(){
        
    }
    



}