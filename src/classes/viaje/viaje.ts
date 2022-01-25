export abstract class Viajes {
    
    private _tipoObjeto:string;
    private _id:string;
    private _origen:string;
    private _destino:string;
    
    constructor(
        tipoObjeto:string,
        id:string,
        origen:string,
        destino:string
        ){
            this._tipoObjeto=tipoObjeto,
            this._id=id,
            this._origen=origen,
            this._destino=destino
            
            
        }

    get tipoObjeto(){
        return this._tipoObjeto
    }
    get id(){
        return this._id
    }
    get origen(){
        return this._origen
    }
    get destino(){
        return this._destino
    }
    
    mover(){
    //
    }

    



}