import LoginCadTemplate from "../../components/LoginCadTemplate";
import logo from "../../assets/images/logo-small.svg";
import InputLoginCad from '../../components/InputLoginCad'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import "./styles.scss";

function Login() {
  return (
    <LoginCadTemplate>
      <form id="login-form">
        <img src={logo} alt="logo" />
        <h1>Iniciar Sessão</h1>
        <InputLoginCad type="text" placeholder="Usuário" />
        <InputLoginCad type="password" placeholder="Senha" />
        <Link to="/recuperarsenha">Esqueceu sua senha?</Link>
        <Button>Entrar</Button>
        <div id="criar-conta-container">
          <p>Não tem tem uma conta?</p>
          <Link to="/cadastro">Crie uma!</Link>
        </div>
      </form>
    </LoginCadTemplate>
  );
}

export default Login;
