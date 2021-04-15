import { useState } from "react";
import LoginCadTemplate from '../../components/LoginCadTemplate'
import InputLoginCad from '../../components/InputLoginCad'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo-small.svg";
import './styles.scss'

function Cadastro ({ history }) {
  const [ userName, setUserName ] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);
  const [email ,setEmail] = useState(null);
  const [confirmEmail ,setConfirmEmail] = useState(null);
  function handleRegister(e) {
    e.preventDefault();
    if (!userName || !password || !confirmPassword || !email || !confirmEmail) {
      setUserName('');
      setPassword('');
      setConfirmPassword('');
      setEmail('');
      setConfirmEmail('');
      window.alert('Insira todos os dados do cadastro');
      return;
    }
    if (password !== confirmPassword) {
      window.alert('As senhas não coincidem');
      return;
    }
    if (email !== confirmEmail) {
      window.alert('Os emails não coincidem');
      return;
    }
    window.alert('Usuário cadastrado com sucesso')
    history.push('/login')
  }

  return (
    <LoginCadTemplate reverse>
      <form id="cadastro-form">
        <img src={logo} alt="logo" />
        <h1>Criar conta</h1>
        <InputLoginCad className={userName === ''&& 'required-input'} onChange={(e) => { setUserName(e.currentTarget.value) }} type="text" placeholder="Usuário" required />
        <InputLoginCad className={email === ''&& 'required-input'} onChange={(e) => { setEmail(e.currentTarget.value) }} type="email" placeholder="E-mail" required/>
        <InputLoginCad className={confirmEmail === ''&& 'required-input'} onChange={(e) => { setConfirmEmail(e.currentTarget.value) }} type="email" placeholder="Confirmar E-mail" required/>
        <div id="password-container">
        <InputLoginCad className={password === ''&& 'required-input'} onChange={(e) => { setPassword(e.currentTarget.value) }} type="password" placeholder="Senha" required/>
        <InputLoginCad className={confirmPassword === ''&& 'required-input'} onChange={(e) => { setConfirmPassword(e.currentTarget.value) }} type="password" placeholder="Confirmar senha" required/>
        </div>
        <Button onClick={handleRegister}>Cadastrar</Button>
        <div id="criar-conta-container">
          <p>Já tem uma conta?</p>
          <Link to="/login">Faça login!</Link>
        </div>
      </form>
    </LoginCadTemplate>
  );
}

export default Cadastro;