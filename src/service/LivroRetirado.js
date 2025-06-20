import axios from 'axios';

const BASE_URL = 'http://localhost:3200/api/livrosRetirados';
const API_URL = 'http://localhost:3200'; // Base para servir as imagens

async function listarLivrosRetirados() {
  const response = await axios.get(BASE_URL);

  // Converte o caminho relativo da imagem para uma URL completa
  return response.data.map((livro) => ({
    ...livro,
    imagem: livro.imagem
      ? `${API_URL}${livro.imagem}`
      : '/assets/img/default.jpg',
  }));
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

async function listarLporU(idUsuario) {
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
    const response = await axios.get(
      `${BASE_URL}/ListarLporU/${idUsuario}`,
      config
    );

    // Converte o caminho da imagem para URL completa
    return response.data.map((livro) => ({
      ...livro,
      imagem: livro.imagem
        ? `${API_URL}${livro.imagem}`
        : '/assets/img/default.jpg',
    }));
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

async function devolver(idLivro) {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token de autenticação não encontrado.');
  }

  try {
    console.log(idLivro);
    return await axios.delete(`${BASE_URL}/${idLivro}`);
  } catch (error) {
    console.error(
      'Erro ao devolver livro:',
      error.response?.data || error.message
    );
    alert('Erro ao devolver livro.');
  }
}

export default {
  listarLivrosRetirados,
  InserirLivroRetirado,
  listarLporU,
  devolver,
};
