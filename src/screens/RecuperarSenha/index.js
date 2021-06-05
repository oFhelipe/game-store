import { Link } from 'react-router-dom'
import "./styles.scss";
import dotBackground from "../../assets/images/dot-simple-background.svg";

function validar(e) {
  e.preventDefault();
  const inputEmail = document.querySelector("#id-input-email");
  if(	inputEmail.value.length < 6 ||
      inputEmail.value.indexOf("@") <= 1 ||
      inputEmail.value.indexOf(".") <= 0
    ) {
    document.querySelector(".msg-warning").style.display = "inherit";
    inputEmail.focus();
    return false;
  }
  document.querySelector(".msg-warning").style.display = "none";
}

function RecuperarSenha () {
  return (
    <div id="screen-passlost">
      <div id="container-form">
        <form id="passlost-form">
          <h1 className="passlost-title">Esqueceu a senha?</h1>
          <p className="passlost-text">Preencha com o e-mail que você usou para se cadastrar. Você receberá um e-mail com instruções sobre como redefinir sua senha.</p>
          <input className="input-email" id="id-input-email" type="email" placeholder="Email"/>
          <span className="msg-warning">Email invalido</span>
          <button className="btn-passlost" onClick={validar}>ENVIAR EMAIL</button>
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
export default RecuperarSenha;