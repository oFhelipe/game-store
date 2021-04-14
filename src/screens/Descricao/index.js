import './styles.scss';
import Menu from "../../components/Menu";
import SlideImage from "../../components/SlideImage";

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
    resumo: "Quando um jovem traficante, um assaltante de bancos aposentado e um psicopata aterrorizante envolvem-se com alguns dos elementos mais assustadores e desequilibrados do submundo do crime, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.",
    tamanho: "54GB",
    multijogadores: "1 a 30 jogadores online",
    lancamento: "18 de novembro de 2014",
    distribuidora: "Rockstar Games",
    genero: "Ação e aventura",
    desenvolvedora: "Rockstar North",
    plataforma: [1,2,3],
    tagDeIdade: [0],
    images: [
      "https://viciados.net/wp-content/uploads/2020/06/GTA-5-Online.jpg",
      "https://www.lendagames.com/wp-content/uploads/2020/05/ASSET-GTA-V-FREE-PC.jpg",
      "https://specials-images.forbesimg.com/imageserve/5ebd5555a69715000675b96d/960x0.jpg?fit=scale"
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
        <div className="BoxGameAcquire">
          <h2>{descricaoDoGame.nome}</h2>
          <div className="price">
            <div className="desconto">
              <p>-25%</p>
            </div>
            <div className="valores">
              <h4>R$200,00</h4>
              <h4>R$150,00</h4>
            </div>
          </div>
          <div className="Btn-container">
            <div className="Btn-add">
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
    </div>
  );
}

export default Descricao;