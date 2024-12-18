import './perfil.css';
import Card from './card';
import { umUsuario, atualizarUsuario } from '../service/UsuarioService';
import { useEffect, useState } from 'react';
import LivroRetiradoService from '../service/LivroRetirado';

function Perfil() {
  const idUsuario = localStorage.getItem('idUsuario');
  const [usuario, setUsuario] = useState(null);
  const [reload, setReload] = useState(false);

  if (!idUsuario) return <p>Usuario não está logado!</p>;

  useEffect(() => {
    umUsuario(idUsuario).then((res) => setUsuario(res));
  }, [idUsuario, reload]);

  if (!usuario) return <p>Carregando...</p>;

  return (
    <>
      <Dados usuario={usuario} idUsuario={idUsuario} setReload={setReload} />
      <section className="livros-retirados">
        <h2>Livros Retirados</h2>
        <LivrosRetirados idUsuario={idUsuario} />
      </section>
    </>
  );
}

function Dados({ usuario, idUsuario, setReload }) {
  const [nome, setNome] = useState(usuario.nome);
  const [matricula, setMatricula] = useState(usuario.matricula);
  const [senha, setSenha] = useState(usuario.senha);
  const [telefone, setTelefone] = useState(usuario.telefone);
  const [email, setEmail] = useState(usuario.email);
  const [senhaConfirmada, setSenhaConfirmada] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const editarUsuario = async (event) => {
    event.preventDefault();
    try {
      if (senha !== senhaConfirmada) {
        throw new Error('Senhas não conferem!');
      }

      const atualizacao = {
        nome,
        matricula,
        senha,
        telefone,
        email,
      };

      await atualizarUsuario(idUsuario, atualizacao);
      alert('Usuário atualizado com sucesso!');
      setReload((anterior) => !anterior);
    } catch (error) {
      setMensagemErro(error.message || 'Erro ao atualizar usuário.');
      console.error(error);
    }
  };

  return (
    <section className="perfil">
      <img src="/assets/img/foto-depoimentos-2.png" alt="Foto do usuario" />
      <form onSubmit={editarUsuario}>
        <fieldset>
          <div>
            <span>
              <label htmlFor="Nome">Nome</label>
              <input
                type="text"
                name="Nome"
                defaultValue={usuario.nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </span>
            <span>
              <label htmlFor="Matricula">Matricula</label>
              <input
                type="text"
                name="Matricula"
                defaultValue={usuario.matricula}
                onChange={(event) => setMatricula(event.target.value)}
              />
            </span>
          </div>
          <div>
            <span>
              <label htmlFor="Telefone">Telefone</label>
              <input
                type="text"
                name="Telefone"
                defaultValue={usuario.telefone}
                onChange={(event) => setTelefone(event.target.value)}
              />
            </span>
            <span>
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="Email"
                defaultValue={usuario.email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </span>
          </div>
          <div>
            <span>
              <label htmlFor="Senha">Senha</label>
              <input
                type="password"
                name="Senha"
                onChange={(event) => setSenha(event.target.value)}
                required
              />
            </span>
            <span>
              <label htmlFor="Confirmar">Confirmar Senha</label>
              <input
                type="password"
                name="Confirmar"
                onChange={(event) => setSenhaConfirmada(event.target.value)}
                required
              />
            </span>
          </div>
        </fieldset>
        <input type="submit" value="atualizar cadastro" />
        {mensagemErro && <p>{mensagemErro}</p>}
      </form>
    </section>
  );
}

function LivrosRetirados({ idUsuario }) {
  const [arrLivros, setArrLivros] = useState([]);
  const [mensagemErro, setMensagemErro] = useState('');

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        console.log(idUsuario);
        const response = await LivroRetiradoService.listarLporU(idUsuario);
        setArrLivros(response);
      } catch (error) {
        setMensagemErro(error.message || 'Erro ao buscar livros retirados');
      }
    };
    buscarLivros();
  }, [idUsuario]);
  if (arrLivros.length >= 1)
    return (
      <div id="display-livros">
        {arrLivros.map((obj) => {
          return <Card titulo={obj.nome_livro} img="/assets/img/imagem1.png" />;
        })}
        {mensagemErro && <p>{mensagemErro}</p>}
      </div>
    );
  else
    return (
      <div id="display-livros">
        <p>Usuário não possui livros retirados</p>
        {mensagemErro && <p>{mensagemErro}</p>}
      </div>
    );
}

export default Perfil;
