export default class Auto {
    constructor(marca, modelo, color = "blanco", kilometraje = 0) {
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._kilometraje = kilometraje;
        this._estado = "Apagado";
}

get color() {
    return this._color;
}

set color(newColor) {
    this._color = newColor.toUpperCase();
}

mostrarEstado() {

    console.log(`El auto ${this._marca} ${this._color}
        del año ${this._modelo} tiene un kilometraje de 
        ${this._kilometraje}kms y está ${this._estado}`);
    }

encender() {
    this._estado = "encendido";
    this.mostrarEstado();
    }

apagar() {
    this._estado = "Apagar";
    this.mostrarEstado();
    }
    avanzar(velocidad, tiempo){
        if(this._estado === "Apagado") {
            console.log('El auto no puede avanzar porque está apagado');
        }
        else {
            let distancia = velocidad * tiempo;
            this._kilometraje = this._kilometraje +
            distancia;
            this.mostrarEstado();
        }
    }
}

