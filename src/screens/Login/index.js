import { useState } from "react";
import LoginCadTemplate from "../../components/LoginCadTemplate";
import logo from "../../assets/images/logo-small.svg";
import InputLoginCad from '../../components/InputLoginCad'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import "./styles.scss";

function Login ({ history }) {
  const [ userName, setUserName ] = useState(null);
  const [password,setPassword] = useState(null);
  function handleLogin (e) {
    e.preventDefault();
    if (!userName || !password) {
      setUserName('');
      setPassword('');
      window.alert('Insira todos os dados do login');
      return
    }
    window.alert('Usuário logado com sucesso')
    history.push('/')
  }

  return (
    <LoginCadTemplate>
      <form id="login-form">
        <img src={logo} alt="logo" />
        <h1>Iniciar Sessão</h1>
        <InputLoginCad className={userName === ''&& 'required-input'} onChange={(e) => { setUserName(e.currentTarget.value) }} type="text" placeholder="Usuário" />
        <InputLoginCad className={password === ''&& 'required-input'} onChange={(e) => { setPassword(e.currentTarget.value) }} type="password" placeholder="Senha" />
        <Link to="/recuperarsenha">Esqueceu sua senha?</Link>
        <Button onClick={handleLogin}>Entrar</Button>
        <div id="criar-conta-container">
          <p>Não tem tem uma conta?</p>
          <Link to="/cadastro">Crie uma!</Link>
        </div>
      </form>
    </LoginCadTemplate>
  );
}

export default Login;
