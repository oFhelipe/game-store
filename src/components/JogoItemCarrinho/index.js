import { BsTrash } from "react-icons/bs";
import './styles.scss'

function JogoItemCarrinho ({ game, onClickDelete }) {

  function deleteGame() {
    onClickDelete(game.id)
  }

  return (
    <div className="jogo-item-carrinho-box">
      <img src={game.cover} alt="capa"/>
      <div className="jogo-item-carrinho-personagem-fundo">
      <img className="fundo" src={game.background} alt="fundo"/>
        <img className="personagem" alt="personagem" src={game.character}/>
      </div>
      <div className="jogo-item-carrinho-info-container">
        <div className="nome-desenvolvedora">
          <h4>{game.name}</h4>
          <p>{game.developer}</p>
        </div>
        <p className="descricao">{game.description}</p>
        <div className="preco-desconto">
        <div className="valores">
                
                {
                  game.discount ? <h4>R${ game.price }</h4> : <h4> </h4>
                }
                <h4>R${ parseFloat(game.price - (game.price * game.discount)).toFixed(2)  }</h4>
              </div>
              {
                  parseFloat(game.discount * 100) > 0 &&
                  <div className="desconto"> 
                    <p>-{parseFloat(game.discount * 100)}%</p>
                  </div>
                }
        </div>
      </div>
      <div onClick={deleteGame} className="trash-box">
        <BsTrash />
      </div>
    </div>
  );
}

export default JogoItemCarrinho;