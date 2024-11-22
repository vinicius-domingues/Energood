export default class Recarga {
    constructor(nomeCarro, tipoRecarga, horaInicio, dataInicio, idUser) {
      this.nomeCarro = nomeCarro;
      this.tipoRecarga = tipoRecarga;
      this.horaInicio = horaInicio;
      this.dataInicio = dataInicio;
      this.idUser = idUser;
    }
  
    // Método para validar os dados
    static validar(recarga) {
      if (!recarga.nomeCarro || !recarga.tipoRecarga || !recarga.horaInicio) {
        return 'Por favor, preencha todos os campos!';
      }
      return null;
    }
  }
  