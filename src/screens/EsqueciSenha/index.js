import { Link } from 'react-router-dom'
import "./styles.scss";
import logo from "../../assets/images/logo-small.svg";
import dotBackground from "../../assets/images/dot-simple-background.svg";

function EsqueciSenha () {
  return (
    <div id="screen-passlost">
      <div id="container-form">
        <form id="passlost-form">
          <img className="icon-logo" src={logo} alt="logo" />
          <h1 className="passlost-title">Esqueceu a senha?</h1>
          <p className="passlost-text">Preencha com o e-mail que você usou para se cadastrar. Você receberá um e-mail com instruções sobre como redefinir sua senha.</p>
          <input className="input-email" type="email" placeholder="Email"/>
          <button className="btn-passlost">ENVIAR EMAIL</button>
          <div className="enter-accont-container">
            <p>Lembra sua senha?</p>
            <Link to="/login">Entrar</Link>
          </div>
        </form>
      </div>
      <div className="imagens-background">
        <img className="image-dots" src={dotBackground} alt="imagem de fundo" />
        <img className="image-dots" src={dotBackground} alt="imagem de fundo" />
      </div>
    </div>
  );
}
export default EsqueciSenha;