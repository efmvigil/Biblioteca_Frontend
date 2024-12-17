import './perfil.css';
import Card from './card';

function Perfil() {
  return (
    <>
      <section className="perfil">
        <Foto />
        <Dados />
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

function Dados() {
  return (
    <form action="">
      <div>
        <span>
          <label htmlFor="Nome">Nome</label>
          <input type="text" name="Nome" />
        </span>
        <span>
          <label htmlFor="Matricula">Matricula</label>
          <input type="text" name="Matricula" />
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="Telefone">Telefone</label>
          <input type="text" name="Telefone" />
        </span>
        <span>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" />
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
