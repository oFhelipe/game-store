import './styles.scss'
import logo from '../../assets/images/logo-full.svg'

function LoginCadTemplate ({children, reverse}) {
  return (
    <div className={`login-cad-container${reverse ? ' reversed-login-cad-container' : ''}`}>
      <div className="quadrado-branco">
        {children}
      </div>
      <div className="quadrado-escuro">
        <p>Cadastre-se no GameStore e descubra os melhores jogos para jogar.</p>
        <img src={logo} alt="logo" />
        <p>Criar uma conta, é gratuito e facil de usar.</p>
      </div>
    </div>
  );
}

export default LoginCadTemplate;
