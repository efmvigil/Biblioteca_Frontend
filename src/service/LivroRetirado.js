import axios from "axios";

const BASE_URL = "http://localhost:3200/api/livrosRetirados";

async function listarLivrosRetirados() {
  const response = await axios.get(BASE_URL);
  return response.data;
}

async function InserirLivroRetirado(idLivro) {
  const token = localStorage.getItem("token"); 

  if (!token) {
    throw new Error("Token de autenticação não encontrado.");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${BASE_URL}/${idLivro}`, null, config);
  return response.data;
}

export default {
  listarLivrosRetirados,
  InserirLivroRetirado,
};
