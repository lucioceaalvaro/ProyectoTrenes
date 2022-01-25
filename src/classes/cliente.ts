export  class Cliente {
    private _dni:string;
    private _nombre:string;
    private _email:string;
    private _telefono:number;

    
    
    constructor(
       dni:string,nombre:string,email:string,telefono:number
        ){
            this._dni=dni;
            this._nombre=nombre;
            this._email=email;
            this._telefono=telefono;
            
        }

    get dni(){
        return this._dni
    }
    get nombre(){
        return this._nombre
    }
    get email(){
        return this._email
    }
    get telefono(){
        return this._telefono
    }
    
    



}