import axios from "axios";

const BASE_URL = "http://localhost:3200/api/livros"

async function listarLivros() {
    const response = await axios.get(BASE_URL);
    return response.data;
}

async function UmLivro(id) {
    const response = await axios.get(BASE_URL+"/"+id);
    return response.data;
}


export default {
    listarLivros,
    UmLivro
}