import axios from 'axios';

const BASE_URL = 'http://localhost:3200/api/livros';
const API_URL = 'http://localhost:3200';

async function listarLivros() {
  const response = await axios.get(BASE_URL);

  return response.data.map((livro) => ({
    ...livro,
    imagem: livro.imagem
      ? `${API_URL}${livro.imagem}`
      : '/public/assets/img/default.jpg',
  }));
}

async function UmLivro(id) {
  const response = await axios.get(`${BASE_URL}/${id}`);

  return {
    ...response.data,
    imagem: response.data.imagem
      ? `${API_URL}${response.data.imagem}`
      : '/public/assets/img/default.jpg',
  };
}

export default {
  listarLivros,
  UmLivro,
};
