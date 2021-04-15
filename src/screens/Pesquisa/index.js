import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import './styles.scss'
import JogoItem from '../../components/JogoItem'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { HiFilter } from 'react-icons/hi'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Pesquisa () {
  const query = useQuery();

  const [jogo, setJogo] = useState(query.get("jogo") || null);
  const [ filtrosVisiveis, setFiltrosVisiveis ] = useState(false);

  function handleCLickFiltrar () {
    setFiltrosVisiveis(!filtrosVisiveis);
  }

  return (
    <div id="pesquisa-container" className="app-container">
      <Menu />
      <h2>{jogo ? `Pesquisa: ${jogo}` : 'Pesquise um jogo'}</h2>
      <hr />
      <button onClick={handleCLickFiltrar} id="filtro-button"><HiFilter/> <p>Filtrar</p></button>
      <div id="filtros-box" className={`${filtrosVisiveis ? "mostrar-filtros" : "esconder-filtros"}`}>
        <div className="filtro-item">
          <label>Promoções</label>
          <select name="promocoes">
            <option value="sem" >Sem filtro</option>
            <option value="10" >Até 10%</option>
            <option value="20" >Até 20%</option>
            <option value="30" >Até 10%</option>
            <option value="todas" >Todas as promoções</option>
          </select>
        </div>
        <div className="filtro-item">
          <label>Plataforma</label>
          <select name="plataforma">
            <option value="todas" >Todas as plataformas</option>
            <option value="pc" >Pc</option>
            <option value="xbox" >Xbox</option>
            <option value="playstation" >Playstation</option>
          </select>
        </div>
        <div className="filtro-item">
          <label>Gênero</label>
          <select name="genero">
            <option value="todos" >Todos</option>
            <option value="aventura" >Aventura</option>
            <option value="acao" >Ação</option>
            <option value="casual" >Casual</option>
            <option value="corrida" >Corrida</option>
            <option value="esporte" >Esporte</option>
            <option value="estrategia" >Estratégia</option>
            <option value="Indie" >Indie</option>
            <option value="rpg" >RPG</option>
            <option value="similacao" >Simulação</option>
          </select>
        </div>
        <div className="filtro-item">
          <label>Ordernar por</label>
          <select name="ordernar">
            <option value="todos" >Lançados recentemente</option>
            <option value="todos" >Lançados há mais tempo</option>
            <option value="todos" >Menor preço</option>
            <option value="todos" >Maior preço</option>
          </select>
        </div>
      </div>
      <div className="jogos-component">
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
      </div>
      <Footer />
    </div>
  );
}

export default Pesquisa;