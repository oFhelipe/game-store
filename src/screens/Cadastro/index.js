import LoginCadTemplate from '../../components/LoginCadTemplate'
import InputLoginCad from '../../components/InputLoginCad'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo-small.svg";
import './styles.scss'

function Cadastro () {
  return (
    <LoginCadTemplate reverse>
      <form id="cadastro-form">
        <img src={logo} alt="logo" />
        <h1>Criar conta</h1>
        <InputLoginCad type="text" placeholder="Usuário" required />
        <InputLoginCad type="email" placeholder="E-mail" required/>
        <InputLoginCad type="email" placeholder="Confirmar E-mail" required/>
        <div id="password-container">
        <InputLoginCad type="password" placeholder="Senha" required/>
        <InputLoginCad type="password" placeholder="Confirmar senha" required/>
        </div>
        <Button>Cadastrar</Button>
        <div id="criar-conta-container">
          <p>Já tem uma conta?</p>
          <Link to="/login">Faça login!</Link>
        </div>
      </form>
    </LoginCadTemplate>
  );
}

export default Cadastro;