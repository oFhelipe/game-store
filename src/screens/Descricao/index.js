import './styles.scss';
import Menu from "../../components/Menu";
import SlideImage from "../../components/SlideImage";
import Footer from '../../components/Footer'

import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaPlaystation, FaXbox, FaShoppingCart } from 'react-icons/fa';

import TagEighteen from '../../assets/icons/TagEighteen';
import TagFree from '../../assets/icons/TagFree';
import TagSixteen from '../../assets/icons/TagSixteen';
import TagTwelve from '../../assets/icons/TagTwelve';

function Descricao () {
  const platformIcons = [<HiOutlineDesktopComputer />, <FaPlaystation />, <FaXbox />]
  const TagAge = [<TagEighteen />, <TagFree />, <TagSixteen />, <TagTwelve />]
  const descricaoDoGame = {
    nome: "Grand theft auto V",
    resumo: "Em uma era na qual máquinas vagam livremente e a humanidade deixou de ser a espécie dominante, uma jovem caçadora chamada Aloy inicia uma jornada na qual desvendará o seu destino. Em um mundo pós-apocalíptico exuberante, onde a natureza retomou as ruínas de uma civilização esquecida, pequenos grupos de pessoas vivem em tribos primitivas de caçadores e coletores. O domínio delas sobre esse novo ambiente selvagem foi usurpado pelas máquinas, terríveis criaturas mecânicas de origem desconhecida.",
    tamanho: "49GB",
    multijogadores: "1 player",
    lancamento: "Fevereiro 28, 2017",
    distribuidora: "Guerrilla Games",
    genero: "Ação e aventura",
    desenvolvedora: "Sony",
    plataforma: [1],
    tagDeIdade: [2],
    images: [
      "https://miro.medium.com/max/5040/1*RRmYBcrgXBC3cexlpoMBBA.jpeg",
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/03/desenvolvedor-de-horizon-zero-dawn-responde-as-criticas-pelo-jogo-deixar-de-ser-exclusivo.jpg",
      "https://gmedia.playstation.com/is/image/SIEPDC/horizon-zero-dawn-screen-06-ps4-us-03oct16?$1600px$"
    ]
  }

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

  return(
    <div id="description-container">
      <Menu />
      <div id="description-slide">
        <SlideImage images={descricaoDoGame.images}/>
      </div>

      <div className="JogoCardDescricao">
        <div className="JogoCardDescricao-images">
          <img className="imageMobile" src="https://i.pinimg.com/736x/46/9e/3b/469e3b46d476c3125cb81c978e81492f.jpg"/>
          
          <img className="jogo-item-background" src="https://i.pinimg.com/originals/f6/b7/ae/f6b7aeeca193bad95d735127cfc0e6a2.jpg"/>
          
          <img className="personagem" src="https://1.bp.blogspot.com/-QPZv37t7qUg/WNqoxYYpDzI/AAAAAAAAM5w/5chwbjYfiaQbYgzDOwYN1z0zVy9FAT78ACEw/s1600/horizon-zero-dawn-two-column-aloy-03-ps4-eu-22jun16.png"/>
        </div>
        
        <div className="jogo-item-info-container">
          <div className="nome-desenvolvedora-texto">
            <h4>Horizon Zero Down</h4>
            <p className="txtDesktopOnly">
              Horizon Zero Dawn é um game RPG de ação de mundo aberto desenvolvido pela Guerrilla Games e publicado pela Sony Computer Entertainment para o PlayStation 4 em 2017.
            </p>
            <p className="txtMobileOnly">Guerrilla Games</p>
          </div>
          <div className="preco-desconto">
            <div className="preco-desconto-sub">
              <div className="valores">
                <h4>R$200,00</h4>
                <h4>R$150,00</h4>
              </div>
              <div className="desconto">
                <p>-25%</p>
              </div>
            </div>
            <div className="Btn-containerDesktopOnly">
              <FaShoppingCart /> Adquirir
            </div>
          </div>
        </div>
        
      </div>

      <div id="description-content-container">
        <div className="content-abstract">
          <h2>Detalhes do Jogo</h2>
          <p>{descricaoDoGame.resumo}</p>
        </div>
        <div className="description-additional">
          <h2>Informações adicionais</h2>
          <div className="description-additional-container">

            <div className="description-item">
              <h3>Tamanho aproximado</h3>
              <p>{descricaoDoGame.tamanho}</p>
            </div>

            <div className="description-item">
              <h3>Multijogador</h3>
              <p>{descricaoDoGame.multijogadores}</p>
            </div>

            <div className="description-item">
              <h3>Data de lançamento</h3>
              <p>{descricaoDoGame.lancamento}</p>
            </div>

            <div className="description-item">
              <h3>Distribuidora</h3>
              <p>{descricaoDoGame.distribuidora}</p>
            </div>

            <div className="description-item">
              <h3>Genero</h3>
              <p>{descricaoDoGame.genero}</p>
            </div>

            <div className="description-item">
              <h3>Desenvolvedora</h3>
              <p>{descricaoDoGame.desenvolvedora}</p>
            </div>

            <div className="description-item">
              <h3>Plataforma</h3>
              <div className="description-item-platform">
                <div>
                  {descricaoDoGame.plataforma.map(renderPlatform)}
                </div>
              </div>
            </div>

            <div className="description-item">
              <h3>Classificação indicativa</h3>
              <div>
                {descricaoDoGame.tagDeIdade.map(renderTagAge)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="Btn-add">
        <FaShoppingCart /> Adquirir
      </div>
      <Footer />
    </div>
  );
}

export default Descricao;