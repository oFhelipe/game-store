import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import './styles.scss'
import JogoItem from '../../components/JogoItem'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { HiFilter } from 'react-icons/hi'

import api from '../../services/api'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Pesquisa () {
  const query = useQuery();

  const [game, setGame] = useState(query.get("jogo") || null);
  const [games, setGames] = useState([]);
  const [ filtrosVisiveis, setFiltrosVisiveis ] = useState(false);
  
  const [ promotion, setPromotion ] = useState(null);
  const [ platform, setPlatform ] = useState(null);
  const [ gender, setGender ] = useState(null);
  const [ order, setOrder ] = useState(null);

  function handleCLickFiltrar () {
    setFiltrosVisiveis(!filtrosVisiveis);
  }

  async function getGames(){
      try {
        const response = await api.get('/game', {
          params: {
            promotion,
            platform,
            gender,
            order,
            game
          }
        })
        setGames(response.data);
      } catch (error) {
        console.log(error)
      }
  }

  function handleChangeFilter(filter, value){
      switch (filter) {
        case 'promotion':
          setPromotion(value)
          break;

        case 'platform':
          setPlatform(value)
        break;
        
        case 'gender':
          setGender(value)
        break;
       
        case 'order':
          setOrder(value)
        break;

        default:
          break;
      }
  }

  useEffect(()=>{
    getGames();
  }, [])

  useEffect(()=>{
    getGames();
  }, [promotion, gender, platform, game, order])

  return (
    <div id="pesquisa-container" className="app-container">
      <Menu />
      <h2>{game ? `Pesquisa: ${game}` : 'Pesquise um jogo'}</h2>
      <hr />
      <button onClick={handleCLickFiltrar} id="filtro-button"><HiFilter/> <p>{filtrosVisiveis ? "Esconder" : "Mostrar"} filtros</p></button>
      <div id="filtros-box" className={`${filtrosVisiveis ? "mostrar-filtros" : "esconder-filtros"}`}>
        <div className="filtro-item">
          <label>Promoções</label>
          <select name="promocoes" onChange={(e)=>{ handleChangeFilter('promotion', e.currentTarget.value) }}>
            <option value="sem"> Sem filtro</option>
            <option value="10" >Até 10%</option>
            <option value="20" >Até 20%</option>
            <option value="30" >Até 30%</option>
            <option value="todas" >Todas as promoções</option>
          </select>
        </div>
        <div className="filtro-item">
          <label>Plataforma</label>
          <select name="plataforma" onChange={(e)=>{ handleChangeFilter('platform', e.currentTarget.value) }}>
            <option value="todas" >Todas as plataformas</option>
            <option value="0" >Pc</option>
            <option value="1" >Xbox</option>
            <option value="2" >Playstation</option>
          </select>
        </div>
        <div className="filtro-item">
          <label>Gênero</label>
          <select name="genero" onChange={(e)=>{ handleChangeFilter('gender', e.currentTarget.value) }}>
            <option value="sem" >Todos</option>
            <option value="aventura" >Aventura</option>
            <option value="ação" >Ação</option>
            <option value="casual" >Casual</option>
            <option value="corrida" >Corrida</option>
            <option value="esporte" >Esporte</option>
            <option value="estratégia" >Estratégia</option>
            <option value="indie" >Indie</option>
            <option value="rpg" >RPG</option>
            <option value="simulação" >Simulação</option>
          </select>
        </div>
        <div className="filtro-item">
          <label>Ordernar por</label>
          <select name="ordernar" onChange={(e)=>{ handleChangeFilter('order', e.currentTarget.value) }}>
          <option value="sem" >Sem Ordem</option>
            <option value="novo" >Lançados recentemente</option>
            <option value="antigo" >Lançados há mais tempo</option>
            <option value="crescente" >Menor preço</option>
            <option value="decrescente" >Maior preço</option>
          </select>
        </div>
      </div>
      <div className="jogos-component">
        {
          games.map((jogo)=>{
            return <JogoItem game={jogo} />
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default Pesquisa;