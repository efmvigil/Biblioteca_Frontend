import './login.css';

function Login() {
  return (
    <section className="login">
      <form action="" method="post">
        <h2>Login</h2>
        <input type="text" placeholder="Matricula" />
        <input type="text" placeholder="Senha" />
        <div>
          <a href="#">Esqueci minha senha</a>
          <input type="submit" value="Fazer login" id="btn-login" />
          <input type="submit" value="Criar uma conta" />
        </div>
      </form>
    </section>
  );
}

export default Login;
