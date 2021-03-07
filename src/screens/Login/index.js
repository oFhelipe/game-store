import LoginCadTemplate from "../../components/LoginCadTemplate";
import logo from "../../assets/images/logo-small.svg";
import InputLoginCad from '../../components/InputLoginCad'
import Button from '../../components/Button'
import "./styles.scss";

function Login() {
  return (
    <LoginCadTemplate>
      <form id="login-form">
        <img src={logo} alt="logo" />
        <h1>Iniciar Sessão</h1>
        <InputLoginCad type="text" placeholder="Usuário" />
        <InputLoginCad type="password" placeholder="Senha" />
        <a href="#">Esqueceu sua senha?</a>
        <Button>Entrar</Button>
        <div id="criar-conta-container">
          <p>Não tem tem uma conta?</p>
          <a href="#">Crie uma!</a>
        </div>
      </form>
    </LoginCadTemplate>
  );
}

export default Login;
