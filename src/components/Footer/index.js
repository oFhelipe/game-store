import './styles.scss'
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

function Footer () {
  return (
    <div className="footer-box">
      <div className="info-container">
        <p>© 2021 Game Store Corporation. Esta aplicação é apenas uma demonstração de designer, sem fins lucrativos.</p>
        <p>Por favor não nos prendam ;-;</p>
        <span />
        <div className="social-medias-container">
          <a href="https://www.linkedin.com/in/fhelipe-rodrigues-b57a52196/" target="_blank" rel="noreferrer"><AiFillLinkedin  className="social-icon" /></a>
          <a href="https://github.com/oFhelipe" target="_blank" rel="noreferrer"><AiOutlineGithub  className="social-icon" /></a>
          <a href="https://www.linkedin.com/in/weslley-ferreira-61a75a188/" target="_blank" rel="noreferrer"><AiFillLinkedin  className="social-icon" /></a>
          <a href="https://github.com/wdwf" target="_blank" rel="noreferrer"><AiOutlineGithub  className="social-icon" /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;