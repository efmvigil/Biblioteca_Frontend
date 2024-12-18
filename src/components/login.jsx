import { useState } from 'react';
import {useNavigate } from "react-router-dom";

import './login.css';
import logarUsuario from '../service/AuthService';

function Login() {
  const navigate = useNavigate(); 
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const fazerLogin = async (event) => {
    event.preventDefault();
    try {
      const token = await logarUsuario(matricula, senha);
      alert('Usuario logado com sucesso')
      navigate("/")
    } catch (error) {
      setMensagem('Erro: ' + (error.response?.data.msg || 'Erro desconhecido'));
    }
  };

  return (
    <section className="login">
      <form action="" method="post" onSubmit={fazerLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Matricula"
          onChange={(event) => setMatricula(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(event) => setSenha(event.target.value)}
          required
        />
        <div>
          <a href="#">Esqueci minha senha</a>
          <input type="submit" value="Fazer login" id="btn-login" />
          <input type="submit" value="Criar uma conta" />
        </div>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </section>
  );
}

export default Login;
