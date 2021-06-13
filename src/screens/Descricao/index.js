import './styles.scss';
import Menu from "../../components/Menu";
import SlideImage from "../../components/SlideImage";
import Footer from '../../components/Footer';
import api from '../../services/api';

import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaPlaystation, FaXbox, FaShoppingCart } from 'react-icons/fa';

import TagEighteen from '../../assets/icons/TagEighteen';
import TagFree from '../../assets/icons/TagFree';
import TagSixteen from '../../assets/icons/TagSixteen';
import TagTwelve from '../../assets/icons/TagTwelve';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Descricao () {
  const platformIcons = [<HiOutlineDesktopComputer />, <FaPlaystation />, <FaXbox />]
  const TagAge = [<TagEighteen />, <TagFree />, <TagSixteen />, <TagTwelve />]

  const renderPlatform = (indexIcon, index) => {
    return (
      <div key={index}>{platformIcons[indexIcon]}</div>
    )
  }

  const renderTagAge = (indexIcon, index) => {
    return (
      <div key={index}>{TagAge[indexIcon]}</div>
    )
  }

  
  const [ game, setGame ] = useState({});
  const params = useParams();
  const history = useHistory();

  function handleClickAdiquirir () {
    const isLoggedIn = localStorage.getItem('user');

    if (!isLoggedIn) {
      localStorage.clear()
      history.push('/login')
      return
    }

    const carrinhoString = localStorage.getItem('carrinho') || '[]'
    const carrinho = JSON.parse(carrinhoString)
    console.log(carrinho)
    const gameIndex = carrinho.indexOf(game.id)

    if (gameIndex === -1) {
      carrinho.push(game.id)
      const newCarrinhoString = JSON.stringify(carrinho)
      localStorage.setItem('carrinho',newCarrinhoString)
    }


    history.push('/carrinho')

  }


  useEffect(() => {
    async function init() {
      const { gameId } = params;
      const theGame = await api.get(`/game/${gameId}`);
      setGame(theGame.data);
      
    } 
    init();
  },[]);

  return(
    <div id="description-container">
      <Menu />
      <div id="description-slide">
        { game.multimedia && <SlideImage images={game.multimedia}/>}
      </div>

      <div className="JogoCardDescricao">
        <div className="JogoCardDescricao-images">

          <img className="imageMobile" alt="" src={game.cover}/>
          
          <img className="jogo-item-background" alt="" src={game.background}/>
          
          <img className="personagem" alt="" src={game.character}/>
        </div>
        
        <div className="jogo-item-info-container">
          <div className="nome-desenvolvedora-texto">
            <h4>{ game.name }</h4>
            <p className="txtDesktopOnly">
              { game.description }
            </p>
            <p className="txtMobileOnly">{ game.developer }</p>
          </div>
          <div className="preco-desconto">
            <div className="preco-desconto-sub">
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
            <div onClick={handleClickAdiquirir} className="Btn-containerDesktopOnly">
              <FaShoppingCart /> <p>Adquirir</p>
            </div>
          </div>
        </div>
        
      </div>

      <div id="description-content-container">
        <div className="content-abstract">
          <h2>Detalhes do Jogo</h2>
          <p>{game.description}</p>
        </div>
        <div className="description-additional">
          <h2>Informações adicionais</h2>
          <div className="description-additional-container">

            <div className="description-item">
              <h3>Tamanho aproximado</h3>
              <p>{game.size}GB</p>
            </div>

            <div className="description-item">
              <h3>Multijogador</h3>
              <p>{game.multiplayer}</p>
            </div>

            <div className="description-item">
              <h3>Data de lançamento</h3>
              <p>{game.release}</p>
            </div>

            <div className="description-item">
              <h3>Distribuidora</h3>
              <p>{game.destributor}</p>
            </div>

            <div className="description-item">
              <h3>Genero</h3>
              <p>{game.gender}</p>
            </div>

            <div className="description-item">
              <h3>Desenvolvedora</h3>
              <p>{game.developer}</p>
            </div>

            <div className="description-item">
              <h3>Plataforma</h3>
              <div className="description-item-platform">
                <div>
                  {game.platform && game.platform.map(renderPlatform)}
                </div>
              </div>
            </div>

            {/* <div className="description-item">
              <h3>Classificação indicativa</h3>
              <div>
                {game.tag.map(renderTagAge)}
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
      <div onClick={handleClickAdiquirir} className="Btn-add">
        <FaShoppingCart /> Adquirir
      </div>
      <Footer />
    </div>
  );
}

export default Descricao;