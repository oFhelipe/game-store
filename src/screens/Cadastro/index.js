import { useState } from "react";
import LoginCadTemplate from '../../components/LoginCadTemplate';
import InputLoginCad from '../../components/InputLoginCad';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo-small.svg";
import api from '../../services/api';
import './styles.scss';

function Cadastro ({ history }) {
  const [ username, setUsername ] = useState(null);
  const [ name, setName ] = useState(null);
  const [ lastname, setLastname ] = useState(null);
  const [ birthday, setBirthday ] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);
  const [email ,setEmail] = useState(null);
  const [confirmEmail ,setConfirmEmail] = useState(null);
  
  async function handleRegister(e) {
    e.preventDefault();
    if (!username || !password || !confirmPassword || !email || !confirmEmail || !name || !lastname || !birthday) {
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setEmail('');
      setConfirmEmail('');
      setName('');
      setLastname('');
      setBirthday('');
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

    const fullName = `${name} ${lastname}`

    
    try {
      const response = await api.post('/user', {
        name:fullName,
        username,
        email,
        password,
        confirmPassword,
        birthday
      })
      //mostrar modal de usuario cadastrado com sucesso

      //esperar alguns segundos para redirecionar para o login
      //localStorage.setItem('user', JSON.stringify([...response]))
      history.push('/login')

    } catch (error) {
      window.alert(error.response.data.message);
    }
    
  }
    

  

  return (
    <LoginCadTemplate reverse>
      <form id="cadastro-form">
        <img src={logo} alt="logo" />
        <h1>Criar conta</h1>
        <div id="password-container">
        <InputLoginCad className={name === ''&& 'required-input'} onChange={(e) => { setName(e.currentTarget.value) }} type="text" placeholder="Nome" required/>
        <InputLoginCad className={lastname === ''&& 'required-input'} onChange={(e) => { setLastname(e.currentTarget.value) }} type="text" placeholder="sobrenome" required/>
        </div>
        <InputLoginCad className={username === ''&& 'required-input'} onChange={(e) => { setUsername(e.currentTarget.value) }} type="text" placeholder="Usuário" required />
        <InputLoginCad className={email === ''&& 'required-input'} onChange={(e) => { setEmail(e.currentTarget.value) }} type="email" placeholder="E-mail" required/>
        <InputLoginCad className={confirmEmail === ''&& 'required-input'} onChange={(e) => { setConfirmEmail(e.currentTarget.value) }} type="email" placeholder="Confirmar E-mail" required/>
        <InputLoginCad className={birthday === ''&& 'required-input'} onChange={(e) => { setBirthday(e.currentTarget.value) }} type="date" required/>
        
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