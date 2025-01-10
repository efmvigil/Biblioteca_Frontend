import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './header.css';

export default function Menu() {
  const [titulo, setTitulo] = useState(""); // Estado para capturar o texto da pesquisa
  const navigate = useNavigate(); // Função de navegação do react-router

  // Manipula o envio do formulário de pesquisa
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (titulo.trim()) { // Verifica se o título não está vazio
      navigate(`/parecido?titulo=${titulo}`); // Redireciona para a rota com query param
    }
  };

  // Verifica se o usuário está logado
  const isLoggedIn = localStorage.getItem('idUsuario');

  return (
    <div className="body d-flex align-items-center justify-content-between">
      {/* Título com Link para a página inicial */}
      <Link to="/" className="Link">
        <h1 className="title">
          <i className="bi bi-book"></i> Mundo das Palavras
        </h1>
      </Link>

      {/* Formulário de pesquisa */}
      <form className="col-md-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="titulo"
            placeholder="Pesquisar"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} // Atualiza o estado do input
          />
        </div>
      </form>

      {/* Menu de usuário */}
      <div className="btn-group dropstart">
        {isLoggedIn ? (
          // Ícone de perfil para usuário logado
          <Link to="/perfil" className="Link">
            <i className="bi bi-person-circle perfilicone"></i>
          </Link>
        ) : (
          // Dropdown para usuário não logado
          <>
            <i
              className="bi bi-person-circle perfilicone"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <ul className="dropdown-menu">
              <li>
                <Link to="/login" className="dropdown-item">Logar</Link>
              </li>
              <li>
                <Link to="/cadastro" className="dropdown-item">Cadastro</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
