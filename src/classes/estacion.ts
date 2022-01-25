export  class Estacion {
    private _nombre:string;
    private _ciudad:string;
    private _id:number;
    private _capacidadAlmacenes:number


    
    
    constructor(
       nombre:string,ciudad:string,id:number,capacidadAlmacenes:number
        ){
            this._nombre = nombre;
            this._ciudad = ciudad;
            this._id = id;
            this._capacidadAlmacenes = capacidadAlmacenes;
            
        }

    get ciudad(){
        return this._ciudad
    }
    get id(){
        return this._id
    }
    get nombre(){
        return this._nombre
    }
    get capacidadAlmacenes(){
        return this._capacidadAlmacenes
    }
    
    
    



}