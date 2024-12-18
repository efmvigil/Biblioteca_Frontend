import axios from 'axios';

const BASE_URL = 'http://localhost:3200/';

async function logarUsuario(matricula, senha) {
  try {
    const response = await axios.post(BASE_URL + 'login', {
      matricula: matricula,
      senha: senha,
    });

    const token = response.data.token;
    const idUsuario = response.data.idUsuario;
    console.log('Token recebido: ', token);
    localStorage.setItem('token', token);
    localStorage.setItem('idUsuario', idUsuario);
    return { token, idUsuario };
  } catch (error) {
    throw error;
  }
}

export default logarUsuario;
