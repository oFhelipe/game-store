import { useHistory } from 'react-router-dom'
import './styles.scss'

function JogoItem () {
  const history = useHistory();
  function onClickGame() {
    history.push('/descricao');
    window.scrollTo(0,0);
  }
  return (
    <div onClick={onClickGame} className="jogo-item-box">
      <img src="https://i.pinimg.com/736x/46/9e/3b/469e3b46d476c3125cb81c978e81492f.jpg" alt="capa"/>
        <div className="jogo-item-background">
          <img src="https://i.pinimg.com/originals/f6/b7/ae/f6b7aeeca193bad95d735127cfc0e6a2.jpg" alt="background"/>
        </div>
      <div className="jogo-item-info-container">
        <div className="nome-desenvolvedora">
          <h4>Horizon Zero Down</h4>
          <p>FromSoftware</p>
        </div>
        <div className="preco-desconto">
          <h4>R$100,00</h4>
          <div>
            <p>25%</p>
          </div>
        </div>
      </div>
      <img className="personagem" alt="Personagem" src="https://1.bp.blogspot.com/-QPZv37t7qUg/WNqoxYYpDzI/AAAAAAAAM5w/5chwbjYfiaQbYgzDOwYN1z0zVy9FAT78ACEw/s1600/horizon-zero-dawn-two-column-aloy-03-ps4-eu-22jun16.png"/>
    </div>
  );
}

export default JogoItem;