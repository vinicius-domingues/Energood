import Recarga from '../models/Recarga';
import recargaService from '../services/recargaService';

const RecargaController = {
  async salvarRecarga({ nomeCarro, tipoRecarga, horaInicio, idUser, dataInicio }) {
    const recarga = new Recarga(nomeCarro, tipoRecarga, horaInicio, dataInicio, idUser);
    
    const erro = Recarga.validar(recarga);
    if (erro) {
      return erro; // Retorna erro de validação para a View
    }

    // Chama o serviço para salvar no backend
    try {
      await recargaService.salvarRecarga(recarga);
      return 'Recarga salva com sucesso!';
    } catch (error) {
      return 'Erro ao salvar recarga';
    }
  }
};

export default RecargaController;
