import axios from 'axios';

const BASE_URL = 'http://localhost:3200/api/usuarios';

async function umUsuario(id) {
  try {
    const response = await axios.get(BASE_URL + '/' + id);
    return response.data;
  } catch (error) {
    return (
      'Erro ao buscar dados do usuario: ' + error.response?.data.msg ||
      'Erro desconhecido'
    );
  }
}

export default umUsuario;
