import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './header.css';

export default function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Obtém o ID do usuário do localStorage
    const userId = localStorage.getItem('idUsuario');
    setIsLoggedIn(Boolean(userId)); // Define como true se userId existir
  }, []);

  return (
    <div className="body">
      <Link to="/" className="Link">
        <h1 className="title">
          <i className="bi bi-book"></i> Mundo das Palavras
        </h1>
      </Link>

      <form className="col-md-3" action="">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="pesquisaGeral"
            placeholder="Pesquisar"
          />
        </div>
      </form>

      <div className="btn-group dropstart">
        {console.log(isLoggedIn) }
        {localStorage.getItem('idUsuario') ? (
          // Redireciona diretamente ao perfil se o usuário estiver logado
          <Link to="/perfil" className="Link">
            <i className="bi bi-person-circle perfilicone"></i>
          </Link>
        ) : (
          // Exibe o dropdown com opções de login e cadastro
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
