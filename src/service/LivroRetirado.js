import axios from 'axios';

const BASE_URL = 'http://localhost:3200/api/livrosRetirados';

async function listarLivrosRetirados() {
  const response = await axios.get(BASE_URL);
  return response.data;
}

async function InserirLivroRetirado(idLivro) {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token de autenticação não encontrado.');
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${BASE_URL}/${idLivro}`, null, config);
  return response.data;
}

async function listarLporU(id) {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token de autenticação não encontrado.');
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(`${BASE_URL}/ListarLporU/${id}`, config);
    return response.data;
  } catch (error) {
    console.error(
      'Erro ao listar livros retirados por usuário:',
      error.response?.data || error.message
    );
    throw new Error(
      'Não foi possível listar os livros retirados pelo usuário.'
    );
  }
}

export default {
  listarLivrosRetirados,
  InserirLivroRetirado,
  listarLporU,
};
