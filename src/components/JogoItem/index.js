import { useHistory } from "react-router-dom";
import "./styles.scss";

function JogoItem({ game }) {
  const { id, background, name, price, discount, cover, developer, character } =
    game;
  const history = useHistory();
  function onClickGame() {
    history.push(`/descricao/${id}`);
    window.scrollTo(0, 0);
  }
  return (
    <div onClick={onClickGame} className="jogo-item-box">
      <img src={cover} alt="capa" />
      <div className="jogo-item-background">
        <img src={background} alt="background" />
      </div>
      <div className="jogo-item-info-container">
        <div className="nome-desenvolvedora">
          <h4>{name}</h4>
          <p>{developer}</p>
        </div>
        <div className="preco-desconto">
          <h4>R$ {`${(price - price * discount).toFixed(2)}`.replace('.', ',')}</h4>
          {discount > 0 && (
            <div>
              <p>{discount * 100}%</p>
            </div>
          )}
        </div>
      </div>
      <img className="personagem" src={character} />
    </div>
  );
}

export default JogoItem;
