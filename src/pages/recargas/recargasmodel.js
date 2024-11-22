// models/Recarga.js
export class Recarga {
    constructor(id, nomeCarro, horaInicio, dataInicio, tipoRecarga) {
        this.id = id;
        this.nomeCarro = nomeCarro;
        this.horaInicio = horaInicio;
        this.dataInicio = dataInicio;
        this.tipoRecarga = tipoRecarga;
    }
    
    static fromJSON(data) {
        return new Recarga(data.id, data.nomeCarro, data.horaInicio, data.dataInicio, data.tipoRecarga);
    }
}
