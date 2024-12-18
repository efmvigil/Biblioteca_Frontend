import './perfil.css';
import Card from './card';
import umUsuario from '../service/UsuarioService';
import { useEffect, useState } from 'react';

function Perfil() {
  const idUsuario = localStorage.getItem('idUsuario');
  const [usuario, setUsuario] = useState({});

  if (!idUsuario) return <p>Usuario não está logado!</p>;

  useEffect(() => {
    umUsuario(idUsuario).then((res) => setUsuario(res));
  }, [idUsuario]);

  return (
    <>
      <section className="perfil">
        <Foto />
        <Dados usuario={usuario} />
      </section>
      <section className="livros-retirados">
        <h2>Livros Retirados</h2>
        <LivrosRetirados />
      </section>
    </>
  );
}

function Foto() {
  return <img src="/assets/img/foto-depoimentos-2.png" alt="Foto do usuario" />;
}

function Dados(props) {
  return (
    <form action="">
      <div>
        <span>
          <label htmlFor="Nome">Nome</label>
          <input type="text" name="Nome" placeholder={props.usuario.nome} />
        </span>
        <span>
          <label htmlFor="Matricula">Matricula</label>
          <input
            type="text"
            name="Matricula"
            placeholder={props.usuario.matricula}
          />
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="Telefone">Telefone</label>
          <input
            type="text"
            name="Telefone"
            placeholder={props.usuario.telefone}
          />
        </span>
        <span>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" placeholder={props.usuario.email} />
        </span>
      </div>
    </form>
  );
}

function LivrosRetirados() {
  return (
    <div id="display-livros">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Perfil;
