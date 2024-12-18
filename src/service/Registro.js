import axios from "axios";

const BASE_URL = "http://localhost:3200/registrar";

// Função para registrar um novo usuário
async function registrar(usuario) {
    try {
        const response = await axios.post(BASE_URL, usuario);
        return response.data; // Retorna os dados da resposta
    } catch (error) {
        console.error("Erro ao registrar o usuário:", error);
        throw error; // Repassa o erro para ser tratado no componente
    }
}

export default {
    registrar
};