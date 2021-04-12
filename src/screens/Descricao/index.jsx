import './styles.scss'
import JogoItemCarrinho from '../../components/JogoItemCarrinho';
import Menu from "../../components/Menu";


function Descricao () {
  const descricaoDoGame = {
    resumo: "Quando um jovem traficante, um assaltante de bancos aposentado e um psicopata aterrorizante envolvem-se com alguns dos elementos mais assustadores e desequilibrados do submundo do crime, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.",
    tamanho: "54GB",
    multijogadores: "1 a 30 jogadores online",
    lancamento: "18 de novembro de 2014",
    distribuidora: "Rockstar Games",
    genero: "Ação e aventura",
    desenvolvedora: "Rockstar North",
    plataforma: 2,
    tagDeIdade: 1
  }

  return(
    <div id="description-container">
      <Menu />
      <div id="description-slide"></div>

      <div id="description-item-container">
        <JogoItemCarrinho />
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
              <div className="description-item-plataform">

              </div>
            </div>

            <div className="description-item">
              <h3>Idade minima para apreciação</h3>
              <div>{descricaoDoGame.tagDeIdade}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descricao;